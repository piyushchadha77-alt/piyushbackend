const express = require("express");
const router = express.Router();
const contractorController = require("../controllers/contractorController");
const { authMiddleware, roleMiddleware } = require("../middleware/authMiddleware");

// POST routes
router.post("/register", contractorController.register);
router.post("/login", contractorController.login);

// GET routes (protected)
router.get(
  "/",
  authMiddleware,
  roleMiddleware("contractor"), // ✅ use string instead of process.env
  contractorController.getAll
);

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("contractor"), // ✅ same fix
  contractorController.getById
);

module.exports = router;
