const { Product } = require('../models');

const productData = [
  {
    product_name: 'Laptop',
    price: 1000.00,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: 'Shirt',
    price: 25.00,
    stock: 30,
    category_id: 2,
  },
  {
    product_name: 'Book',
    price: 15.00,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Chair',
    price: 85.00,
    stock: 20,
    category_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
