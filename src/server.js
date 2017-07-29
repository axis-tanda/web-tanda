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
let mongoURI = 'mongodb://heroku_x0x8lgpx:pkhda7ei241c1etj37hvop43ju@ds013966.mlab.com:13966/heroku_x0x8lgpx';
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
