import mongoose from "mongoose";

// Define the Signup Schema
const signupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  repeat_password: {
    type: String,
  },
  resetToken: {
    type: String,
  },
  resetTokenExpiration: {
    type: Date,
  },
}, { timestamps: true }); // Adds createdAt and updatedAt

// Define the Login Schema (if needed)


// Export Models
export const Signup = mongoose.model("Signup", signupSchema);


 
