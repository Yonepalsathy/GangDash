const jwt = require('jsonwebtoken');
const authService = require('../services/auth.service');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token using service (which supports fallback)
      const user = await authService.getUserById(decoded.id);
      
      // Select all but password (for mock users, just delete it)
      if (user.password) {
        delete user.password;
      }
      req.user = user;

      next();
    } catch (error) {
      res.status(401);
      next(new Error('Not authorized, token failed'));
    }
  }

  if (!token) {
    res.status(401);
    next(new Error('Not authorized, no token'));
  }
};

// Grant access to specific roles
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(403);
      return next(
        new Error(`User role ${req.user.role} is not authorized to access this route`)
      );
    }
    next();
  };
};

module.exports = { protect, authorize };
