const ContractorService = require("../services/contractorService");

exports.register = async (req, res) => {
  try {
    const contractor = await ContractorService.register(req.body);
    res.status(201).json({ message: "Contractor registered", contractor });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const result = await ContractorService.login(req.body);
    res.status(200).json({ message: "Login successful", ...result });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const contractors = await ContractorService.getAllContractors();
    res.status(200).json(contractors);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* exports.getById = async (req, res) => {
  try {
    const contractor = await ContractorService.getContractorById(req.params.id);
    res.status(200).json(contractor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; */
