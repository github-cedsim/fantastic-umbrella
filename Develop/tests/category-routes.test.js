const request = require('supertest');
const app = require('../server');
const sequelize = require('../config/connection');
const { Category } = require('../models');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Category API Routes', () => {
  test('GET /api/categories should return all categories', async () => {
    const res = await request(app).get('/api/categories');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  test('POST /api/categories should create a new category', async () => {
    const newCategory = { category_name: 'Test Category' };
    const res = await request(app).post('/api/categories').send(newCategory);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.category_name).toBe('Test Category');
  });

  test('GET /api/categories/:id should return a single category', async () => {
    const category = await Category.create({ category_name: 'Single Category' });
    const res = await request(app).get(`/api/categories/${category.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', category.id);
    expect(res.body.category_name).toBe('Single Category');
  });

  test('PUT /api/categories/:id should update an existing category', async () => {
    const category = await Category.create({ category_name: 'Old Category' });
    const updatedCategory = { category_name: 'Updated Category' };
    const res = await request(app).put(`/api/categories/${category.id}`).send(updatedCategory);
    expect(res.statusCode).toBe(200);
    expect(res.body[0]).toBe(1); // Number of rows updated
  });

  test('DELETE /api/categories/:id should delete an existing category', async () => {
    const category = await Category.create({ category_name: 'Category to Delete' });
    const res = await request(app).delete(`/api/categories/${category.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe(1); // Number of rows deleted
  });
});
