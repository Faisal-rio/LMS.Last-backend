import Course from "../models/courseModel.js";

export const addCourse = async (req, res) => {
  const { courseName, instructor, description } = req.body;
  try {
    const newCourse = new Course({ courseName, instructor, description });
    await newCourse.save();
    res.status(201).json({ message: "Course added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding course", error });
  }
};
