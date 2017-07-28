'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clockin = clockin;

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "next" }] */
var log = (0, _debug2.default)('clockin.controller');

function clockin(req, res, next) {
  log('Clock In!');
  log('Employee id ' + req.body.user_id);

  var config = {
    method: 'POST',
    url: 'https://my.tanda.co/api/v2/clockins',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.TANDA_TOKEN
    },
    form: {
      user_id: parseInt(req.body.user_id),
      type: 'clockin',
      time: Date.now()
    }
  };

  (0, _request2.default)(config, function (err, response, body) {
    if (err) {
      throw new Error(err);
    }
    log(body);

    res.send({
      message: 'Successfully clocked in!'
    });
  });
}
//# sourceMappingURL=clockin.controller.js.map