const { body } = require("express-validator");

exports.registerContractorValidator = [
  body("fullName").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  body("phoneNo").notEmpty().withMessage("Phone number is required"),
  body("address").notEmpty().withMessage("Address is required"),
];

exports.loginContractorValidator = [
  body("email").isEmail().withMessage("Valid email is required"),
  body("password").notEmpty().withMessage("Password is required"),
];
