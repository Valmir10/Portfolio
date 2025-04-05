import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Liad environment variable
dotenv.config();

// Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const mongoURI =
  process.env.MONGO_URI || "mongodb://localhost:27017/portfolioDB";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ 2. create Mongoose-modell (schema)
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// save to database
app.post("/contact", async (req, res) => {
  console.log("📩 Received data:", req.body);

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ success: "Message saved to database!" });
  } catch (error) {
    console.error("❌ Database Error:", error);
    res.status(500).json({ error: "Failed to save message" });
  }
});

// GET-Route to get message
app.get("/messages", async (req, res) => {
  try {
    const messages = await Contact.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error("❌ Fetch Error:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
