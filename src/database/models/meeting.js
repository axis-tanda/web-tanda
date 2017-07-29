import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const meetingSchema = mongoose.Schema({
  meeting_id: { type: Number},
<<<<<<< HEAD
  meeting_time: { type: String},
  meeting_day: { type: String},
  data: { type: [Object]},
  room_id: { type: Schema.ObjectId, ref: 'Room', default: null },
=======
  room_id: { type: Number},
  meeting_unix: { type: Number},
  data: { type: [Object]}
>>>>>>> 5a34bcfdfc185011624a2365abc0b644c72840e8
});


export default mongoose.model('Meeting', meetingSchema);
