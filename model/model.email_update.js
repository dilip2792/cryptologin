import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Define the Signup Schema
const email_updateSchema = new mongoose.Schema({
 
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetToken: String,
  resetTokenExpiration: Date,
 
}, { timestamps: true }); 
email_updateSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
// Export Models
export const Email_update = mongoose.model("Email_update", email_updateSchema);
export default Email_update