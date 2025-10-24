const Task = require("../models/Task");
const Bid = require("../models/bid");

exports.createTask = async (req, res) => {
  try {
    const task = new Task({ ...req.body, user: req.user.id });
    await task.save();
    res.status(201).json({ message: "Task created", task });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const filter = {};
    if (req.query.city) filter.city = req.query.city;
    const tasks = await Task.find(filter).populate("user", "name email phoneNo");
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTaskBids = async (req, res) => {
  try {
    const bids = await Bid.find({ task: req.params.taskId }).populate("contractor", "name email phoneNo");
    res.status(200).json(bids);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

