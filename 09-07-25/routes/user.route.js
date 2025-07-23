import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../model/user.model.js';

const router = express.Router();

const registerUser = async (req, res) => {
  try {
    const { fullname, email, phone, password, role } = req.body;

    if (!fullname || !email || !phone || !password || !role) {
      return res.status(400).json({
        error: "All fields (fullname, email, phone, password, role) are required."
      });
    }

    const existUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existUser) {
      return res.status(400).json({
        error: "User already exists! Please use a different phone or email."
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    

    res.status(201).json({
      message: "User registered successfully!",
      fullname,
      email
    });

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Sorry !! Server Down " });
  }
};

router.post("/register", registerUser);



















//LOGIN API
const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        error: "All fields (email, password, role) are required."
      });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    if (existingUser.role !== role) {
      return res.status(400).json({ error: "Invalid role provided." });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    const tokenData = {
      userID: existingUser._id,
      userEmail: existingUser.email
    };

    const token = jwt.sign(tokenData, process.env.security_key, { expiresIn: '1d' });

    res.status(200).json({
      message: "Login successful!",
      token,
      user: {
        fullname: existingUser.fullname,
        email: existingUser.email,
        role: existingUser.role
      }
    });

  } catch (error) {
    console.log('Login Error:', error.message);
    res.status(500).json({ error: "Sorry!! Server Down" });
  }
};

router.post("/login", loginUser);

export default router;
