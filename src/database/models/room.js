import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
  room_id: { type: Number},
  room_name: { type: String},
  data: { type: [Object]},
  isVacant: {type: Boolean}
});

module.exports = mongoose.model('Room', roomSchema);
