const Car = require('../models/car.model.js');

//create
exports.createCar = (req, res) => {
  let carModel = new Car({
    model: req.model,
    make: req.make,
    registration: req.registration,
    owner: req.owner,
    year: req.year
  });

  carModel.save((err, data) => {
    if (err) {
      return res.json({
        message: 'An error has occured trying to create your new car entry.',
        status: 500,
        err
      });
    }

    return res.json({
      message: 'Your new car entry has succesfully been added to the database',
      data
    });
  });
};

// Read / find
exports.findCar = (req, res) => {
  Car.find((err, car) => {
    if (err) {
      return res.json({
        message: 'An error has occured trying to find your car entry.',
        status: 500,
        err
      });
    }

    return res.json({
      message: 'Your new car entry has succesfully been added to the database',
      car
    });
  });
};

// Update
exports.updateCar = (req, res) => {
  // creaete a variable containing the old car
  const queryCar = {
    car: req.car
  };

  // create varibale containing the updated car schema
  const updatedCar = {
    model: req.model,
    make: req.make,
    registration: req.registration,
    owner: req.owner,
    year: req.year
  };

  Car.findOneAndUpdate(queryCar, updatedCar, { new: true }, (err, doc) => {
    if (err) {
      return res.json({
        message: 'Something went wrong when updating the car',
        status: 500,
        err
      });
    }

    return res.json({
      message: 'Your car has been updated!',
      doc
    });
  });
};

// delete
exports.deleteCar = (req, res) => {
  // creaete a variable containing the old car
  const queryCar = {
    car: req.car
  };

  Car.remove(queryCar, (err) => {
    if (err) {
      return res.json({
        message: 'Something went wrong when deleting the car',
        status: 500,
        err
      });
    }

    return res.json({
      message: 'Your car has been deleted!'
    });
  });
};
