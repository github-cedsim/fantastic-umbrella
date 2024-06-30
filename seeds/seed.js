const sequelize = require('../config/connection');
const { Category, Product, Tag, ProductTag } = require('../models');

const categoryData = [
  { category_name: 'Category 1' },
  { category_name: 'Category 2' },
];

const productData = [
  { product_name: 'Product 1', price: 10.0, stock: 10, category_id: 1 },
  { product_name: 'Product 2', price: 20.0, stock: 20, category_id: 2 },
];

const tagData = [
  { tag_name: 'Tag 1' },
  { tag_name: 'Tag 2' },
];

const productTagData = [
  { product_id: 1, tag_id: 1 },
  { product_id: 2, tag_id: 2 },
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Category.bulkCreate(categoryData);
  await Product.bulkCreate(productData);
  await Tag.bulkCreate(tagData);
  await ProductTag.bulkCreate(productTagData);

  process.exit(0);
};

seedDatabase();
