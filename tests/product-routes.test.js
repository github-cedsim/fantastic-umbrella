const request = require('supertest');
const app = require('../app');
const sequelize = require('../config/connection');
const { Product } = require('../models');
let server;

beforeAll(async () => {
  await sequelize.sync({ force: true });
  server = app.listen();
  await Product.create({ product_name: 'Test Product', price: 10.99, stock: 100, category_id: 1 });
});

afterAll(async () => {
  await server.close();
  await sequelize.close();
});

describe('Product API Routes', () => {
  test('GET /api/products/:id should return a single product', async () => {
    const product = await Product.findOne({ where: { product_name: 'Test Product' } });

    const res = await request(server).get(`/api/products/${product.id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', product.id);
    expect(res.body.product_name).toBe('Test Product');
  });
});
