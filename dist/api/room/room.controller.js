'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllRooms = getAllRooms;

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "next" }] */
var log = (0, _debug2.default)('room.controller');
var data = require(__dirname + '/../../data/dummy');

function getAllRooms(req, res, next) {
  log('Get All Rooms!');

  // log(data);

  res.status(200).send(data);
}
//# sourceMappingURL=room.controller.js.map