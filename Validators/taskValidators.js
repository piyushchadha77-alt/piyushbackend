const { body } = require("express-validator");

exports.createTaskValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("streetAddress").notEmpty().withMessage("Street address is required"),
  body("city").notEmpty().withMessage("City is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("budget").isNumeric().withMessage("Budget must be a number"),
  body("status").optional().isIn(["active", "completed"]).withMessage("Invalid status"),
];
