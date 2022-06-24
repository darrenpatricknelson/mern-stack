// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// app init
const app = express();

// add mongoDB
const URI = process.env.MONGO_URI;
mongoose.Promise = global.Promise;

mongoose
  .connect(URI, {
    /* 
    ! HI MODERATOR
    I struggle to connect to my database and had to do some research
    The following linf of code was the cause of this:

    useMongoClient: true

    According to the information I found (stack overflow ofcourse haha)
    Mongoose 5 doesnt need this line apparently and that it should be removed

    Please update the infomation you provide your students becuase it's really frustrating to work to information provided and then things don't know and as a studentn you don't know what to do. As a student you think you've done something wrong because you want to believe that the information provided is bankable and potentially bullet proof. We, as students, are here to learn from you guys and its a bit discouraging when the information YOU, as HyperionDev, provide us is outdated information that does not work. It's scary infact because now we less focused on learning and more focused on just getting the task to work and not all students will get this right. 

    I know, it is good practice as a developer to do research and find out how things work under the bonet, I know that will make myself a better developer but I need to have the confidence that the information provided by HyperionDev is a good guide. Otherwise, I feel like I might as well self study 

    Only problem with that is that there is not certification at the end. 

    Please update the information you provide students. 

    Here is a link to the stack overflow site: 
    https://stackoverflow.com/questions/48031029/the-options-usemongoclient-is-not-supported
    */
    // ,
    dbName: 'Darren-cars'
  })
  .then(() => console.log('DB CONNECTED'))
  .catch((err) => console.log('DB CONNECTION ERROR ', err));

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(morgan('dev'));

// creaete routes
const createRoute = require('./routes/createRoute.js');
const readRoute = require('./routes/readRoute.js');
const updateRoute = require('./routes/updateRoute.js');
const deleteRoute = require('./routes/deleteRoute.js');

app.get('/', (req, res) => {
  res.json({
    message: 'There has been a successfuly connection'
  });
});

// use Routes
app.use('/', createRoute);
app.use('/', readRoute);
app.use('/', updateRoute);
app.use('/', deleteRoute);

// PORT
const PORT = process.env.PORT || 3001;

// listerner
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
