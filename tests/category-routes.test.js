const request = require('supertest');
const app = require('../app');
const sequelize = require('../config/connection');
const { Category } = require('../models');
let server;

beforeAll(async () => {
  await sequelize.sync({ force: true });
  server = app.listen();
  await Category.create({ category_name: 'New Test Category' });
});

afterAll(async () => {
  await server.close();
  await sequelize.close();
});

describe('Category API Routes', () => {
  test('GET /api/categories/:id should return a single category', async () => {
    const category = await Category.findOne({ where: { category_name: 'New Test Category' } });

    const res = await request(server).get(`/api/categories/${category.id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', category.id);
    expect(res.body.category_name).toBe('New Test Category');
  });
});
