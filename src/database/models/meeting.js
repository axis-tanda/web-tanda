import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const meetingSchema = mongoose.Schema({
  meeting_id: { type: Number},
  meeting_time: { type: String},
  meeting_day: { type: String},
  data: { type: [Object]},
  room_id: { type: Schema.ObjectId, ref: 'Room', default: null },
});


export default mongoose.model('Meeting', meetingSchema);
