const sequelize = require('./connection');

const createSchema = async () => {
  try {
    await sequelize.query('CREATE DATABASE IF NOT EXISTS `t5y6q5z89ntlmipk`');
    console.log('Database schema created successfully');
    process.exit(0);
  } catch (err) {
    console.error('Failed to create database schema:', err);
    process.exit(1);
  }
};

createSchema();
