const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB:", err));

const clubSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    image: String,
    logo: String
});

const Club = mongoose.model('Club', clubSchema, 'Clubs');

const eventSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    image: String,
    date: String,
    time: String,
    venue: String
});

const Event = mongoose.model('Event', eventSchema, 'events');

app.get("/clubs", async (req, res) => {
    try {
        const clubs = await Club.find().exec();
        res.json(clubs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching clubs" });
    }
});

app.get("/events", async (req, res) => {
    try {
        const events = await Event.find().exec();
        res.json(events);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching events" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});