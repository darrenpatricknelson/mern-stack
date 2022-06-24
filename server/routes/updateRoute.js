const express = require('express');
const updateRoute = express.Router();
// import controller
const { updateCar } = require('../controllers/car.controller.js');

// api routes
// updateRoute.get('/update', updateCar);
updateRoute.get('/update', (req, res) => {
  res.json({
    message: 'you want to update something'
  });
});

module.exports = updateRoute;
