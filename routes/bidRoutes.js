// const express = require("express");
// const router = express.Router();
// const bidController = require("../controllers/bidController");
// const { authMiddleware, roleMiddleware } = require("../middleware/authMiddleware");

// router.post("/", authMiddleware, roleMiddleware(process.env.ROLE_CONTRACTOR), bidController.placeBid);
// router.get("/", authMiddleware, bidController.getAllBids);

// module.exports = router;


// routes/bidRoutes.js
const express = require("express");
const router = express.Router();

const { createBid, getMyBids } = require("../controllers/bidController");
const { authMiddleware } = require("../middleware/authMiddleware");

// Route to create a bid
router.post("/create", authMiddleware, createBid);

// Route to get all bids of the logged-in contractor
router.get("/my-bids", authMiddleware, getMyBids);

module.exports = router;
