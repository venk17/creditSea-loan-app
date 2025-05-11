const jwt = require('jsonwebtoken');
const ApiResponse = require('../utils/ApiResponse');

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json(new ApiResponse({ error: 'No token, authorization denied' }, false));
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json(new ApiResponse({ error: 'Token is not valid' }, false));
  }
};