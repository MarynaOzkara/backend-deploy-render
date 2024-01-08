const express = require("express");
const {
  getAll,
  create,
  getOne,
  remove,
  update,
  uploadImage,
} = require("../controllers/post");

const { postCreateValidation } = require("../validation/postValidation");

const checkAuth = require("../utils/checkAuth");
const upload = require("../utils/upload");
const hendleValidationError = require("../utils/hendleValidationError");
const router = express.Router();

router.get("/", getAll);
router.post(
  "/",
  checkAuth,
  postCreateValidation,
  hendleValidationError,
  create
);
router.get("/:id", getOne);
router.delete("/:id", checkAuth, remove);
router.patch(
  "/:id",
  checkAuth,
  postCreateValidation,
  hendleValidationError,
  update
);
router.post("/upload", checkAuth, upload.single("image"), uploadImage);

module.exports = router;
