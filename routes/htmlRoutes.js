const path =require("path");

module.exports = function(app) {
// HTML Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/tables.html"))
});

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/reservation.html"))
});

// Catchall route so that if no matching route is found, it defaults to home.
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};