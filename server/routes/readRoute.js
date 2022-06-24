const express = require('express');
const readRoute = express.Router();
// import controller
const { findCar } = require('../controllers/car.controller.js');

// api routes
// readRoute.get('/find', findCar);
readRoute.get('/find', (req, res) => {
  res.status(200).json({
    message: 'Test API is working!'
  });
});

module.exports = readRoute;
