'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _chalk = require('chalk');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var log = (0, _debug2.default)('server');
var PORT = process.env.PORT || 8000;

// Load the routes
require('./routes').default(app);

//Mongo Connect
var mongoURI = 'mongodb://heroku_x0x8lgpx:pkhda7ei241c1etj37hvop43ju@ds013966.mlab.com:13966/heroku_x0x8lgpx';
_mongoose2.default.connect(mongoURI, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('MongoDB successfully connected to: ', mongoURI);
  }
});

// Start the server
app.listen(PORT, function () {
  return log('Server listening on port ' + (0, _chalk.green)(PORT));
});

exports.default = app;
//# sourceMappingURL=server.js.map