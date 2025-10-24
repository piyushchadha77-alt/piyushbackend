const Bid = require("../models/bid");
const Task = require("../models/Task");

exports.createBid = async (req, res) => {
  try {
    const task = await Task.findById(req.body.task);
    if (!task) return res.status(404).json({ message: "Task not found" });

    const bid = new Bid({
      contractor: req.user.id,
      task: req.body.task,
      bidPrice: req.body.bidPrice,
      shortDescription: req.body.shortDescription
    });

    await bid.save();
    res.status(201).json({ message: "Bid placed", bid });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getMyBids = async (req, res) => {
  try {
    const bids = await Bid.find({ contractor: req.user.id }).populate("task");
    res.status(200).json(bids);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



