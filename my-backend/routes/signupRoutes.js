import { Router } from "express";
import { signUp, login } from "../controllers/userController.js";

const router = Router();

router.post("/signup", signUp); // Route for user signup
router.post("/login", login); // Route for user login


export default router;
