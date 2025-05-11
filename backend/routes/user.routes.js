const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validate = require('../utils/validations');

// Public routes
router.post('/register', validate.register, userController.register);
router.post('/login', validate.login, userController.login);

// Protected routes
router.get('/profile', authMiddleware, userController.getProfile);
router.put('/profile', authMiddleware, validate.updateProfile, userController.updateProfile);

module.exports = router;