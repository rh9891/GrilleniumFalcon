// Allows the user to receive the information back in JSON form.
const bodyParser = require('body-parser')

// Makes routing easier for the user using node.js.
const express = require("express");

// Setting the variable in order to easily call it.
const app = express();
const path = require("path");

// The port can be whatever the port is defined as by the deployment site or it also works on the local host (so that it doesn't need to be reconfigured when deployed live).
const PORT = process.env.PORT || 2187;

// Sets up the Express app to handle data parsing.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];
const waitlist = [];

// HTML Routes
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/tables.html"))
});

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/reservation.html"))
});

// API Routes
app.get("/api/tables", (req, res) => {
    return res.json(reservations);
});

app.post("/api/tables", (req, res) => {
    var newReservation = req.body;

    if(reservations.length >= 5)    {
        waitlist.push(newReservation);
    } else  {
        reservations.push(newReservation);
    }
    res.json(newReservation);
});

app.get("/api/waitlist", (req, res) => {
    return res.json(waitlist);
});

app.post('/api/clear', (req, res) => {
	reservations = [];
	waitlist = [];
});

app.listen(PORT, () => {
    // Lets the user know that the port is listening and functioning as expected.
    console.log("Server is running on 2187...Cell 2187, that is. Found in Detention Block AA-23, sub-level five.")    
});