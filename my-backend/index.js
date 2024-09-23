// Import necessary packages
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import enrollRoutes from "./routes/enrollRoutes.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

// CORS Middleware (configure origin to allow your frontend domain)
app.use(cors({
  origin: ['https://unlucky-lms-project-rio-main.netlify.app/'],  // Replace with your actual frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],     // Specify allowed methods
  credentials: true                              // Allow credentials like cookies, sessions, etc.
}));

// Body parser middleware to parse JSON requests
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);     // Authentication routes (login, signup, etc.)
app.use("/api/contact", contactRoutes); // Contact form routes
app.use("/api/course", courseRoutes);   // Course-related routes
app.use("/api/enroll", enrollRoutes);   // Enrollment-related routes

// MongoDB connection
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

connectToDatabase();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
