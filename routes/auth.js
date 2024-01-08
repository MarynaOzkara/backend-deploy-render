const express = require("express");
const { getMe, register, login } = require("../controllers/auth");
const checkAuth = require("../utils/checkAuth");
const hendleValidationError = require("../utils/hendleValidationError");
const {
  registerValidation,
  loginValidation,
} = require("../validation/authValidation");

const router = express.Router();

router.get("/me", checkAuth, getMe);
router.post("/register", registerValidation, hendleValidationError, register);
router.post("/login", loginValidation, hendleValidationError, login);

module.exports = router;
