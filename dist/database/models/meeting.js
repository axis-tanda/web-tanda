'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var meetingSchema = _mongoose2.default.Schema({
  meeting_id: { type: Number },
  meeting_time: { type: String },
  meeting_day: { type: String },
  data: { type: [Object] }
});

exports.default = _mongoose2.default.model('Meeting', meetingSchema);
//# sourceMappingURL=meeting.js.map