const { Seeder } = require('mongo-seeding');
const path = require('path');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv-safe');

dotenv.config({ path: path.resolve(`./.env.${process.env.NODE_ENV}`) });

const User = require('../models/User');
const Product = require('../models/Product');
const Store = require('../models/Store');

const config = {
  database: process.env.MONGODB_URI,
  dropDatabase: false,
};

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
  path.resolve('./seeders/data')
);

const importData = async () => {
  try {
    await seeder.import(collections);
    console.log(`Seed Complete`.green.inverse);
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Store.deleteMany();
    console.log('Data Destroyed...'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
 