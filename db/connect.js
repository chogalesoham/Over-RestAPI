const mongoose = require("mongoose");

const connectDB = (uri) => {
  console.log("Database Connect...");
  return mongoose.connect(uri);
};

module.exports = connectDB;
