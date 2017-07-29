'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = set;
exports.attend = attend;

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _meeting = require('../../database/models/meeting');

var _meeting2 = _interopRequireDefault(_meeting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _debug2.default)('meeting.controller'); /* eslint no-unused-vars: ["error", { "argsIgnorePattern": "next" }] */
function set(req, res, next) {
  log('Set Meeting!');
  var _req$body = req.body,
      meeting_time = _req$body.meeting_time,
      meeting_day = _req$body.meeting_day,
      meeting_id = _req$body.meeting_id,
      data = _req$body.data;

  var meeting = new _meeting2.default({
    meeting_id: meeting_id,
    meeting_day: meeting_day,
    meeting_time: meeting_time,
    data: data
  });

  meeting.save().then(function (data) {
    log(data);
  }).catch(function (err) {
    if (err) log(err);
  });

  res.end();
}

function attend(req, res, next) {
  log('Attend Meeting!');

  res.end();
}
//# sourceMappingURL=meeting.controller.js.map