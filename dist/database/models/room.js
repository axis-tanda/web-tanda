'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var roomSchema = _mongoose2.default.Schema({
  room_id: { type: Number },
  room_name: { type: String },
  data: { type: [Object] }
});

exports.default = _mongoose2.default.model('Room', roomSchema);
//# sourceMappingURL=room.js.map