'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _mongoose$Schema;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var userSchema = _mongoose2.default.Schema((_mongoose$Schema = {
		id: { type: Number },
		name: { type: String },
		date_of_birth: { type: String },
		employment_start_date: { type: String },
		employee_id: { type: String },
		passcode: { type: String },
		user_levels: { type: [Object] },
		department_ids: { type: [Object] },
		preferred_hours: { type: Number },
		award_template_id: { type: String }
}, _defineProperty(_mongoose$Schema, 'preferred_hours', { type: Number }), _defineProperty(_mongoose$Schema, 'award_template_id', { type: String }), _defineProperty(_mongoose$Schema, 'award_tag_ids', { type: [Object] }), _defineProperty(_mongoose$Schema, 'report_department_id', { type: String }), _defineProperty(_mongoose$Schema, 'managed_department_ids', { type: [Object] }), _defineProperty(_mongoose$Schema, 'active', { type: Boolean }), _defineProperty(_mongoose$Schema, 'email', { type: String }), _defineProperty(_mongoose$Schema, 'photo', { type: String }), _defineProperty(_mongoose$Schema, 'phone', { type: String }), _defineProperty(_mongoose$Schema, 'normalised_phone', { type: String }), _defineProperty(_mongoose$Schema, 'time_zone', { type: String }), _defineProperty(_mongoose$Schema, 'utc_offset', { type: Number }), _defineProperty(_mongoose$Schema, 'created_at', { type: Number }), _defineProperty(_mongoose$Schema, 'employment_basis', { type: String }), _defineProperty(_mongoose$Schema, 'super_fund_membership', { type: String }), _defineProperty(_mongoose$Schema, 'bank_details', { type: String }), _defineProperty(_mongoose$Schema, 'tax_declaration', { type: String }), _defineProperty(_mongoose$Schema, 'updated_at', { type: Number }), _mongoose$Schema));

exports.default = _mongoose2.default.model('User', userSchema);
//# sourceMappingURL=user.js.map