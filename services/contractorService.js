const Contractor = require("../models/Contractor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class ContractorService {
  static async register({ name, email, password, phoneNo, address }) {
    const existing = await Contractor.findOne({ email });
    if (existing) throw new Error("Contractor already exists");

    const hashed = await bcrypt.hash(password, 10);
    const contractor = new Contractor({ name, email, password: hashed, phoneNo, address });
    await contractor.save();
    return contractor;
  }

  static async login({ email, password }) {
    const contractor = await Contractor.findOne({ email });
    if (!contractor) throw new Error("Contractor not found");

    const match = await bcrypt.compare(password, contractor.password);
    if (!match) throw new Error("Invalid password");

    const token = jwt.sign({ id: contractor._id, role: contractor.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return { contractor, token };
  }

  static async getAllContractors() {
    return Contractor.find().select("-password");
  }

  static async getContractorById(id) {
    return Contractor.findById(id).select("-password");
  }
}

module.exports = ContractorService;
