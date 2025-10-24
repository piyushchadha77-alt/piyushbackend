const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const { authMiddleware, roleMiddleware } = require("../middleware/authMiddleware");

router.post("/", authMiddleware, roleMiddleware(process.env.ROLE_USER), taskController.createTask);
router.get("/", authMiddleware, taskController.getTasks);
router.get("/my-tasks", authMiddleware, roleMiddleware(process.env.ROLE_USER), taskController.getUserTasks);
router.get("/:taskId/bids", authMiddleware, roleMiddleware(process.env.ROLE_USER), taskController.getTaskBids);

module.exports = router;


