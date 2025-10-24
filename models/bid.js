const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema({
  contractor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  task: { type: mongoose.Schema.Types.ObjectId, ref: "Task", required: true },
  bidPrice: { type: Number, required: true },
  shortDescription: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("bids", bidSchema);
