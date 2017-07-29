import express from 'express';
import debug from 'debug';
import body_parser from 'body-parser';
import {
  green
} from 'chalk';
import mongoose from 'mongoose';

const app = express();
const log = debug('server');
const PORT = process.env.PORT || 8000;

// Load the routes
require('./routes').default(app);


//Mongo Connect
let mongoURI = 'mongodb://heroku_49v1vbqj:sm8vl3p2deertte9a7ea70f3uh@ds127883.mlab.com:27883/heroku_49v1vbqj';
mongoose.connect(mongoURI, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('MongoDB successfully connected to: ', mongoURI);
  }
});

app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

// Start the server
app.listen(PORT, () => log(`Server listening on port ${green(PORT)}`));

export default app;
