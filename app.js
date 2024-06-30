const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Define the root route
app.get('/', (req, res) => {
  res.send('Welcome to the Fantastic Umbrella API!');
});

module.exports = app; // Export the app for testing
