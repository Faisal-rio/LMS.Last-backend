// models/Enrollment.js
import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  course: String,
  price: Number,
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

export default Enrollment;
