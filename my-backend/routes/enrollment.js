// routes/enrollment.js
import express from 'express';
import Enrollment from '../models/Enrollment.js';

const router = express.Router();

// POST /api/enroll
router.post('/', async (req, res) => {
  const { name, email, phone, courseTitle, price } = req.body;

  try {
    const newEnrollment = new Enrollment({
      name,
      email,
      phone,
      courseTitle,
      price,
    });

    await newEnrollment.save();
    res.status(201).json({ message: 'Enrollment successful', data: newEnrollment });
  } catch (error) {
    console.error('Error saving enrollment:', error);
    res.status(500).json({ message: 'Failed to enroll', error });
  }
});

export default router;
