require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Contact = require("./models/Contact");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// connect once, reuse across requests (serverless-friendly)
async function connectDB() {
    if (mongoose.connection.readyState === 1) return;
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
}

app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        console.log("MongoDB connection failed", error);
        res.status(500).json({ message: "DB connection failed", error: error.message });
    }
});

app.get("/", (req, res) => {
    res.send("Backend is working!");
});

app.post("/api/contact", async (req, res) => {
    try {
        const { email, subject, message } = req.body;
        await new Contact({ email, subject, message }).save();
        res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
        console.log("ERROR SAVING MESSAGE:", error);
        res.status(500).json({ message: "Error saving message", error: error.message });
    }
});

// only listen when running locally
if (require.main === module) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;