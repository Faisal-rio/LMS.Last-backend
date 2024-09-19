import express from "express";
import Enrollment from "../models/Enrollment.js";

const router = express.Router();

router.post("/enroll", async (req, res) => {
  try {
    const { name, email, phone, course, price } = req.body;

    const newEnrollment = new Enrollment({
      name,
      email,
      phone,
      course,
      price,
    });

    await newEnrollment.save();

    res.json({ message: "Enrollment successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
