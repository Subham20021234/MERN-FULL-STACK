import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true,        
  },
  email: {
    type: String,
    required: true,
    unique: true,     
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin']  
  }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
