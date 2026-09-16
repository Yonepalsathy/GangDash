const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const { errorHandler } = require('./middlewares/error.middleware');

// Route files
const authRoutes = require('./api/auth.routes');

const app = express();

// Enable CORS
app.use(cors());

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Security Middlewares
// Set security headers
app.use(helmet());

// Prevent XSS attacks and NoSQL injections
// app.use(mongoSanitize()); // Temporarily disabled due to Express 5 req.query getter conflict

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100, // Limit each IP to 100 requests per `window` (here, per 10 minutes)
});
app.use(limiter);


// Mount routers
app.use('/api/auth', authRoutes);

// Custom error handler
app.use(errorHandler);

module.exports = app;
