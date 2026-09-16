const User = require('../models/User');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Fallback in-memory database if MongoDB Atlas connection fails
const mockUsers = [];
const isDbConnected = () => mongoose.connection.readyState === 1;

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const registerUser = async (userData) => {
  const { name, email, password, role } = userData;

  if (isDbConnected()) {
    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error('User already exists');
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    };
  } else {
    // Fallback Mock Logic
    if (mockUsers.find(u => u.email === email)) {
      throw new Error('User already exists');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = { _id: Date.now().toString(), name, email, password: hashedPassword, role: role || 'user' };
    mockUsers.push(newUser);
    
    return {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      token: generateToken(newUser._id),
    };
  }
};

const loginUser = async (email, password) => {
  if (isDbConnected()) {
    // Check for user
    const user = await User.findOne({ email }).select('+password');
    if (!user) throw new Error('Invalid credentials');
    
    // Check if password matches
    const isMatch = await user.matchPassword(password);
    if (!isMatch) throw new Error('Invalid credentials');

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    };
  } else {
    // Fallback Mock Logic
    const user = mockUsers.find(u => u.email === email);
    if (!user) throw new Error('Invalid credentials');
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    };
  }
};

const getUserById = async (id) => {
  if (isDbConnected()) {
    const user = await User.findById(id);
    if (!user) throw new Error('User not found');
    return user;
  } else {
    // Fallback Mock Logic
    const user = mockUsers.find(u => u._id === id);
    if (!user) throw new Error('User not found');
    return user;
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserById,
};
