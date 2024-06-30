const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Define the root route
app.get('/', (req, res) => {
  res.send('Welcome to the Fantastic Umbrella API!');
});

if (process.env.NODE_ENV !== 'test') {
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
  });
}

module.exports = app;
