const mongoose = require("mongoose");
const validator = require("validator");

// Use env variables for roles
const ROLE_USER = process.env.ROLE_USER || "user";
const ROLE_CONTRACTOR = process.env.ROLE_CONTRACTOR || "contractor";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Full name must be at least 2 characters"],
      maxlength: [50, "Full name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    address: {
      type: String,
      trim: true,
    },
    phoneNo: {
      type: String,
      trim: true,
    },
    image: {
      type: String, // Can store full URL or filename
      default: null,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "suspended"],
      default: "active",
    },
    role: {
      type: String,
      enum: [ROLE_USER, ROLE_CONTRACTOR],
      default: ROLE_USER,
      required: true,
    },
  },
  { timestamps: true }
);

// Hide password when sending user object as JSON
userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

module.exports = mongoose.model("User", userSchema);







