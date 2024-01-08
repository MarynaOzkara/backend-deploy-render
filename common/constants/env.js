const dotenv = require("dotenv");
dotenv.config();

const { MONGODB_URL, PORT } = process.env;
if (!MONGODB_URL) {
  console.log("MONGODB_URL is not set");
  process.exit(1);
}
if (!PORT) {
  console.log("PORT is not set");
  process.exit(1);
}

module.exports = { MONGODB_URL, PORT };
