// require("dotenv").config();
// const express = require("express");
// const connectDB = require("./config/db");
// const cors = require("cors");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// // eee
// app.get("/", (req, res) => res.send("Server is running"));
// // Routes

// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/tasks", require("./routes/taskRoutes"));
// app.use("/api/bid", require("./routes/bidRoutes"));
// app.use("/api/contractor", require("./routes/contractorRoutes"));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// // Connect DB once here
// connectDB();

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));


require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path"); // ✅ Add this

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Root route
app.get("/", (req, res) => res.send("🚀 Server is running"));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/bid", require("./routes/bidRoutes"));
app.use("/api/contractor", require("./routes/contractorRoutes"));

// Connect to MongoDB
connectDB()
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
