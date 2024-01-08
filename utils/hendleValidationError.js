const { validationResult } = require("express-validator");

const hendleValidationError = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  next();
};
module.exports = hendleValidationError;
