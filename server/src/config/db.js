const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // These options are mostly defaults in Mongoose 6+, but good practice if needed for older ones
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error connecting to MongoDB`);
    // process.exit(1); // Do not crash
  }
};

module.exports = connectDB;
