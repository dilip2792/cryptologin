import express from 'express';
import {requestPasswordReset,resetPassword} from "../controller/controller.email_update.js";
const router=express.Router();
// Request password reset
router.post("/request-reset-password", requestPasswordReset);

// Reset password
router.post("/reset-password/:token", resetPassword);
export default router;