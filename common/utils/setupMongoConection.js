const { default: mongoose } = require("mongoose");
const { MONGODB_URL } = require("../constants/env.js");

const setupMongoConection = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Database connection successful");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = setupMongoConection;
