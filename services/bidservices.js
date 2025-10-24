const Bid = require("../models/bid");

class BidService {
  static async createBid(data) {
    const bid = new Bid(data);
    await bid.save();
    return bid;
  }

  static async getBidsByTask(taskId) {
    return Bid.find({ task: taskId }).populate("contractor", "name email phoneNo");
  }

  static async getBidsByContractor(contractorId) {
    return Bid.find({ contractor: contractorId }).populate("task");
  }
}

module.exports = BidService;
