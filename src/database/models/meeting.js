import mongoose from 'mongoose';

const meetingSchema = mongoose.Schema({
  meeting_id: { type: Number},
  meeting_time: { type: String},
  meeting_day: { type: String},
  data: { type: [Object]}
});

export default mongoose.model('Meeting', meetingSchema);
