import express from "express";
import { signup, login, logout, requestPasswordReset, resetPassword } from "../controller/controller.signup.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/request-reset-password", requestPasswordReset); // Send reset email
router.post("/reset-password/:token", resetPassword); // Reset password

export default router;