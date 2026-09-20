require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Contact = require("./models/Contact");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Backend is working!");
});

app.post("/api/contact", async (req, res) => {

    console.log("Contact request received");
    console.log("Data received:", req.body);

    try {

        const { email, subject, message } = req.body;

        const newContact = new Contact({
            email,
            subject,
            message
        });

        await newContact.save();

        console.log("Message sent successfully");

        res.status(201).json({
            message: "Message sent successfully"
        });

    } catch (error) {

        console.log("ERROR SAVING MESSAGE:");
        console.log(error);

        res.status(500).json({
            message: "Error saving message",
            error: error.message
        });

    }

});
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        console.log("MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    })
    .catch((error) => {

        console.log("MongoDB connection failed");
        console.log(error);

    });