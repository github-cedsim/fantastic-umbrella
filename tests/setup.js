const sequelize = require('../config/connection');
const { Category, Product } = require('../models');

module.exports = async () => {
  require('dotenv').config();
  await sequelize.sync({ force: true });

  await Category.create({ category_name: 'New Test Category' });
  await Product.create({ product_name: 'Test Product', price: 10.99, stock: 100, category_id: 1 });
};
