const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { signup, login, updatePassword } = require("../controllers/authController");

// Multer configuration for storing images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // folder to store uploaded images
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// File filter: only accept images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

const upload = multer({ storage, fileFilter });

// Routes
router.post("/signup", upload.single("image"), signup); // 'image' is the field name in the form
router.post("/login", login);
router.put("/update-password", updatePassword);

module.exports = router;











