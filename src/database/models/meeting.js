import mongoose from 'mongoose';

const meetingSchema = mongoose.Schema({
  meeting_id: { type: Number},
  room_id: { type: Number},
  meeting_unix: { type: Number},
  data: { type: [Object]}
});


export default mongoose.model('Meeting', meetingSchema);
