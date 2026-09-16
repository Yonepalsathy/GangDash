require('dotenv').config({ quiet: true });
const app = require('./app');
const connectDB = require('./config/db');



// Connect to database (but don't wait for it to block server startup)
connectDB();

const PORT = process.env.PORT

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.error(`Error: ${err.message}`);
  // Close server & exit process
  // server.close(() => process.exit(1)); // Commented out to prevent crashes during dev
});
