import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  id: {type: Number},
  name: {type: String},
  date_of_birth: {type: String},
  employment_start_date: {type: String},
  employee_id: {type: String},
  passcode: {type: String},
  user_levels: {type: [Object]},
  department_ids: {type: [Object]},
  preferred_hours: {type: Number},
  award_template_id: {type: String},
  preferred_hours: {type: Number},
  award_template_id: {type: String},
  award_tag_ids: {type: [Object]},
	report_department_id: {type: String},
	managed_department_ids: {type: [Object]},
	active: {type: Boolean},
	email: {type: String},
	photo: {type: String},
	phone: {type: String},
	normalised_phone: {type: String},
	time_zone: {type: String},
	utc_offset: {type: Number},
	created_at: {type: Number},
	employment_basis: {type: String},
	super_fund_membership: {type: String},
	bank_details: {type: String},
	tax_declaration: {type: String},
	updated_at: {type: Number}
});

export default mongoose.model('User', userSchema);
