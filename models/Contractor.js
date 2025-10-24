const mongoose = require("mongoose");

const contractorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNo: { type: String },
  address: { type: String },
  status: { type: String, enum: ["active", "inactive", "suspended"], default: "active" },
  role: { type: String, enum: [process.env.ROLE_CONTRACTOR], default: process.env.ROLE_CONTRACTOR }
}, { timestamps: true });

module.exports = mongoose.model("Contractor", contractorSchema);
