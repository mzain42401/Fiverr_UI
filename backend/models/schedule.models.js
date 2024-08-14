const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema(
    {
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  platform: { type: String, required: true }, // e.g., Facebook, Instagram, etc.
  contentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Content', required: true },
  scheduledTime: { type: Date, required: true },
  status: { type: String, default: 'Pending' }
}
);

module.exports = mongoose.model('Schedule', ScheduleSchema);
