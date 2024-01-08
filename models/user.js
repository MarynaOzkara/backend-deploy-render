const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    avatarUrl: String,
  },
  { timestamps: true, versionKey: false }
);

const User = model("User", UserSchema);
module.exports = User;
