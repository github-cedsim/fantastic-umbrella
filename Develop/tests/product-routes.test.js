const request = require('supertest');
const app = require('../server');
const sequelize = require('../config/connection');
const { Product, Category } = require('../models');

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await Category.create({ category_name: 'Test Category' });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Product API Routes', () => {
  test('GET /api/products should return all products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  test('POST /api/products should create a new product', async () => {
    const newProduct = {
      product_name: 'Test Product',
      price: 10.99,
      stock: 100,
      category_id: 1
    };
    const res = await request(app).post('/api/products').send(newProduct);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.product_name).toBe('Test Product');
  });

  test('GET /api/products/:id should return a single product', async () => {
    const product = await Product.create({
      product_name: 'Single Product',
      price: 15.99,
      stock: 50,
      category_id: 1
    });
    const res = await request(app).get(`/api/products/${product.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', product.id);
    expect(res.body.product_name).toBe('Single Product');
  });

  test('PUT /api/products/:id should update an existing product', async () => {
    const product = await Product.create({
      product_name: 'Old Product',
      price: 20.99,
      stock: 200,
      category_id: 1
    });
    const updatedProduct = { product_name: 'Updated Product', price: 25.99 };
    const res = await request(app).put(`/api/products/${product.id}`).send(updatedProduct);
    expect(res.statusCode).toBe(200);
    expect(res.body[0]).toBe(1); // Number of rows updated
  });

  test('DELETE /api/products/:id should delete an existing product', async () => {
    const product = await Product.create({
      product_name: 'Product to Delete',
      price: 30.99,
      stock: 300,
      category_id: 1
    });
    const res = await request(app).delete(`/api/products/${product.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe(1); // Number of rows deleted
  });
});
