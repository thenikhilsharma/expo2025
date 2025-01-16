import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  startupName: { type: String, required: true },
  email: { type: String, required: true },
  startupSector: { type: String, required: true },
  startupHQ: { type: String, required: true },
  Linkedin: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.models.Users || mongoose.model('Users', userSchema);