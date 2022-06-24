const express = require('express');
const deleteRoute = express.Router();
// import controller
const { deleteCar } = require('../controllers/car.controller.js');

// api routes
// deleteRoute.get('/delete', deleteCar);
deleteRoute.get('/delete', (req, res) => {
  res.json({
    message: 'you want to delete something'
  });
});

module.exports = deleteRoute;
