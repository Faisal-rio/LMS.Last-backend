import express from "express";
import {
  signUp,
  login,
 
} from "../controllers/authController.js";

const router = express.Router();

// Signup Route
router.post("/signup", signUp);

// Login Route
router.post("/login", login);


export default router;
