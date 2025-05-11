const User = require('../models/User');
const ApiResponse = require('../utils/ApiResponse');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json(new ApiResponse({ error: 'Username or email already exists' }, false));
    }

    // Create new user
    const user = new User({ username, email, password, role });
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.status(201).json(new ApiResponse({ token, user: { id: user._id, username: user.username, role: user.role } }));
  } catch (error) {
    res.status(500).json(new ApiResponse({ error: 'Server error' }, false));
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json(new ApiResponse({ error: 'Invalid credentials' }, false));
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json(new ApiResponse({ error: 'Invalid credentials' }, false));
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.status(200).json(new ApiResponse({ token, user: { id: user._id, username: user.username, role: user.role } }));
  } catch (error) {
    res.status(500).json(new ApiResponse({ error: 'Server error' }, false));
  }
};

// Get current user profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json(new ApiResponse({ user }));
  } catch (error) {
    res.status(500).json(new ApiResponse({ error: 'Server error' }, false));
  }
};

// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const { username, email } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { username, email },
      { new: true }
    ).select('-password');

    res.status(200).json(new ApiResponse({ user }));
  } catch (error) {
    res.status(500).json(new ApiResponse({ error: 'Server error' }, false));
  }
};