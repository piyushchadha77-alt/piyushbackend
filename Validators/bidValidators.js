const { body } = require("express-validator");

exports.createBidValidator = [
  body("task").notEmpty().withMessage("Task ID is required"),
  body("bidPrice").isNumeric().withMessage("Bid price must be a number"),
  body("shortDescription").notEmpty().withMessage("Short description is required"),
];
