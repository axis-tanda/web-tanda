'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.train = train;

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _child_process = require('child_process');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _debug2.default)('model.controller'); /* eslint no-unused-vars: ["error", { "argsIgnorePattern": "next" }] */

var data = require(__dirname + '/../../data/dummy');

function train(req, res, next) {
  log('Train!');

  (0, _child_process.exec)('python ' + __dirname + '/model.py', function (err, stdout, stderr) {
    if (err) {
      throw new Error(err);
    }

    log(stdout);
    log(stderr);

    res.send({
      message: 'Successfully trained!'
    });
  });
}
//# sourceMappingURL=model.controller.js.map