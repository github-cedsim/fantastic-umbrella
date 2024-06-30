const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// This middleware function handles unknown routes
router.use((req, res) => {
  res.status(404).send("Wrong Route!");
});

module.exports = router;
