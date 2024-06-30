const request = require('supertest');
const app = require('../server');
const sequelize = require('../config/connection');
const { Tag } = require('../models');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Tag API Routes', () => {
  test('GET /api/tags should return all tags', async () => {
    const res = await request(app).get('/api/tags');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  test('POST /api/tags should create a new tag', async () => {
    const newTag = { tag_name: 'Test Tag' };
    const res = await request(app).post('/api/tags').send(newTag);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.tag_name).toBe('Test Tag');
  });

  test('GET /api/tags/:id should return a single tag', async () => {
    const tag = await Tag.create({ tag_name: 'Single Tag' });
    const res = await request(app).get(`/api/tags/${tag.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', tag.id);
    expect(res.body.tag_name).toBe('Single Tag');
  });

  test('PUT /api/tags/:id should update an existing tag', async () => {
    const tag = await Tag.create({ tag_name: 'Old Tag' });
    const updatedTag = { tag_name: 'Updated Tag' };
    const res = await request(app).put(`/api/tags/${tag.id}`).send(updatedTag);
    expect(res.statusCode).toBe(200);
    expect(res.body[0]).toBe(1); // Number of rows updated
  });

  test('DELETE /api/tags/:id should delete an existing tag', async () => {
    const tag = await Tag.create({ tag_name: 'Tag to Delete' });
    const res = await request(app).delete(`/api/tags/${tag.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe(1); // Number of rows deleted
  });
});
