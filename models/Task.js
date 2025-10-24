const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  description: { type: String },
  budget: { type: Number },
  status: { type: String, enum: ["active", "completed"], default: "active" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
