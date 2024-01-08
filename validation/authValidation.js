const { body } = require("express-validator");
const registerValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  body("fullName").isLength({ min: 3 }),
  body("avatarUrl").optional().isString(),
];

const loginValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
];
module.exports = { registerValidation, loginValidation };
