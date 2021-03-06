const jwt = require('express-jwt');
// const { secret } = require('../config/auth.config');
const db = require('../utils/db.connection');

module.exports = authorize;

const secret = process.env.JWT_SECRET;

function authorize(roles = []) {
  // roles param can be a single role string (e.g Role.Admin or 'Admin')
  // or an array of roles (e.g. [Role.Admin, Role.Customer] or ['Admin', 'User']);
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return [
    //authenticate JWT token and attach user to request object (req.user)
    jwt({ secret, algorithms: ['HS256'] }),

    //authorize based on user role
    async (req, res, next) => {
      const user = await db.User.findById(req.user.id);
      const refreshTokens = await db.RefreshToken.find({ user: user.id });
      
      if (!user || (roles.length && !roles.includes(user.role))) {
        // user account no longer exists or role not authorized
        return res.status(401).json({ message: 'Unauthorized!' });
      }

      //authentication and authorization successful
      req.user.role = user.role;
      req.user.ownsToken = token => !!refreshTokens.find(x => x.token === token);
      next();
    },
  ];
}