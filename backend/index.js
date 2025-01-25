const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow requests from React frontend
app.use(express.json()); // Parse JSON request bodies

// Example API endpoint
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express.js!" });
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const path = require("path");

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

