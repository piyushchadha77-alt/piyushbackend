const Task = require("../models/Task");

class TaskService {
  static async createTask(data) {
    const task = new Task(data);
    await task.save();
    return task;
  }

  static async getAllTasks(filter = {}) {
    return Task.find(filter).populate("user", "name email phoneNo");
  }

  static async getUserTasks(userId) {
    return Task.find({ user: userId });
  }

  static async getTaskById(taskId) {
    return Task.findById(taskId);
  }
}

module.exports = TaskService;
