// models/Enrollment.js
import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  courseTitle: { type: String, required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

export default Enrollment;
