const express = require('express');
const createRoute = express.Router();
// import controller
const { createCar } = require('../controllers/car.controller.js');

// api routes
// createRoute.get('/create', createCar);
createRoute.get('/create', (req, res) => {
  res.json({
    message: 'you want to create something'
  });
});

module.exports = createRoute;
