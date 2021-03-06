const faker = require('faker');
const bcrypt = require('bcryptjs');
const ObjectId = require('mongodb').ObjectId;

module.exports = [
  {
    _id: new ObjectId('5efec5f82516e36a501ceaaa'),
    firstName: 'Patrick',
    lastName: 'Castro',
    email: 'ppcc@tizko.com',
    passwordHash: bcrypt.hashSync('password', 10),
    role: 'Admin',
    acceptTerms: true,
    contactNumber: faker.phone.phoneNumber('+639#########'),
    shippingAddress: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.country(),
    billingAddress: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.country(),
    verified: faker.date.past(),
    created: faker.date.past(),
    updated: faker.date.recent(),
    store: new ObjectId('5f68d23709787424cfa4950a')
  },

  {
    _id: new ObjectId('5efea341cb4e4c61fafb8c35'),
    firstName: 'Karl',
    lastName: 'Balagtey',
    email: 'kmb@tizko.com',
    passwordHash: bcrypt.hashSync('password', 10),
    role: 'SuperAdmin',
    acceptTerms: true,
    contactNumber: faker.phone.phoneNumber('+639#########'),
    shippingAddress: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.country(),
    billingAddress: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.country(),
    verified: faker.date.past(),
    created: faker.date.past(),
    updated: faker.date.recent()
  },
  {
    _id: new ObjectId('5c8a1d5b0190b214360dc031'),
    firstName: 'Pauline',
    lastName: 'Castro',
    email: 'pmcc@tizko.com',
    passwordHash: bcrypt.hashSync('password', 10),
    role: 'Customer',
    acceptTerms: true,
    contactNumber: faker.phone.phoneNumber('+639#########'),
    shippingAddress: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.country(),
    billingAddress: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.country(),
    verified: faker.date.past(),
    created: faker.date.past(),
    updated: faker.date.recent()
  },
  {
    _id: new ObjectId('5c8a1d5b0190b214360dc032'),
    firstName: 'Raphael',
    lastName: 'Castro',
    email: 'rcc@tizko.com',
    passwordHash: bcrypt.hashSync('password', 10),
    role: 'Customer',
    acceptTerms: true,
    contactNumber: faker.phone.phoneNumber('+639#########'),
    shippingAddress: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.country(),
    billingAddress: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.country(),
    verified: faker.date.past(),
    created: faker.date.past(),
    updated: faker.date.recent()
  },
  {
    _id: new ObjectId('5f8fefcdc3e019936e1fc7b7'),
    firstName: 'Kilo',
    lastName: 'Man',
    email: 'admin@tizko.com',
    passwordHash: bcrypt.hashSync('password', 10),
    role: 'Admin',
    acceptTerms: true,
    contactNumber: faker.phone.phoneNumber('+639#########'),
    shippingAddress: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.country(),
    billingAddress: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.country(),
    verified: faker.date.past(),
    created: faker.date.past(),
    updated: faker.date.recent()
  },
  {
    _id: new ObjectId('5f8fefd60488fc06f488a533'),
    firstName: 'Victor',
    lastName: 'Magtanggol',
    email: 'victor@tizko.com',
    passwordHash: bcrypt.hashSync('password', 10),
    role: 'Customer',
    acceptTerms: true,
    contactNumber: faker.phone.phoneNumber('+639#########'),
    shippingAddress: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.country(),
    billingAddress: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.country(),
    verified: faker.date.past(),
    created: faker.date.past(),
    updated: faker.date.recent()
  },

  
]