import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import signupRouter from './routes/route.signup.js';
import emailRouter from './routes/route.email_update.js';

// Load environment variables
dotenv.config();

const app = express();

  
  // Example API Route
 
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Allow cookies if needed
  }));
// Use the port from the environment variable, fallback to 3000
const PORT = process.env.PORT || 3000;
const URI= process.env.DB_HOST;

// Connect to MongoDB
try {
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log(error);
}

// Middleware to parse JSON requests
app.use("/", signupRouter);

//Deployment
if(process.env.NODE_ENV==='production'){
  const dirPath= path.resolve();
  app.use(express.static("Fronend/dist"));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dirPath,"Fronend","dist","index.html"));
  })
}



// Define a simple route


// Start the server
app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
});
