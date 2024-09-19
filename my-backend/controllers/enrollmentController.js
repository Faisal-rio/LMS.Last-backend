import Enrollment from "../models/Enrollment.js";

export const enroll = async (req, res) => {
  const { name, email, phone, course, price } = req.body;
  try {
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
};
