import { Signup } from "../model/model.signup.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import crypto from "crypto";
import sgMail from "@sendgrid/mail";
import createTokenAndSaveCookies from "../jwt/generateToken.js";

export const signup = async (req, res) => {
  const { name, surname, email, password, repeat_password } = req.body;
  console.log("Signup request data:", req.body);
  try {
    // Check if passwords match
    if (password !== repeat_password) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Check if the user already exists
    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newSignup = new Signup({
      name,
      surname,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newSignup.save();

    // Generate a JWT and save it in cookies
    createTokenAndSaveCookies(newSignup._id, res);

    // Respond with success
    res.status(201).json({
      message: "New user created",
      signup: {
        _id: newSignup._id,
        name: newSignup.name,
        surname: newSignup.surname,
        email: newSignup.email,
      },
    });
  } catch (error) {
    console.error("Error during signup:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const login = async (req,res)=>{
  const{email,password}=req.body;
  try{
    const user =await Signup.findOne({email});
  if(!user){
    return res.status(400).json({ error: "Invalid user credentials" });
  }

  const isMatch = await bcrypt.compare(password,user.password);
  if (!isMatch) {
    console.log("Password mismatch"); // Debug log
    return res.status(400).json({ error: "Invalid user credentials" });
  }
  // Create token and save cookies
  createTokenAndSaveCookies(user._id, res);

  //Response with userdata
  res.status(200).json({
    message: "User logged in successfully",
    user:{
      _id: user._id,
      name:user.name,
      email:user.email,
    },
  });
  }catch(error){
    console.log("Error during login: ", error);
      res.status(500).json({ error: "Internal server error" });
  }

};
export const logout=async(req,res)=>{
  try{
      res.clearCookie("jwt")
      res.status(200).json({message:"User logged out successfully"})
  }catch(error){
      console.log(error)
  res.status(500).json({error:"Internal server error"});
  }
}
export const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await Signup.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Generate a secure reset token
    const token = crypto.randomBytes(32).toString("hex");
    user.resetToken = token;
    user.resetTokenExpiration = Date.now() + 3600000; // Token valid for 1 hour
    await user.save();

    // Configure SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const resetLink = `http://localhost:5173/reset-password/${token}`;
    const msg = {
      to: user.email,
      from: "dpdilip.prajapati123@gmail.com", // Must be a verified email in SendGrid
      subject: "Password Reset Request",
      html: `<p>You requested a password reset. Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    };

    await sgMail.send(msg);

    res.status(200).json({ message: "Password reset email sent." });
  } catch (error) {
    console.error("Error during password reset request:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await Signup.findOne({
      resetToken: token,
      resetTokenExpiration: { $gt: Date.now() }, // Token is valid
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid or expired token." });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successful." });
  } catch (error) {
    console.error("Error during password reset:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};