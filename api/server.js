const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());   // <--- needed for POST body

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Note model
const Note = mongoose.model("Note", {
  title: String,
  content: String
});

// Test route
app.get("/", (req, res) => {
  res.send("DevOps Notes API Running");
});

// Create note route
app.post("/notes", async (req, res) => {
  const note = await Note.create(req.body);
  res.json(note);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
