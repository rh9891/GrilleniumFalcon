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

app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    // Lets the user know that the port is listening and functioning as expected.
    console.log("Server is running on 2187...Cell 2187, that is. Found in Detention Block AA-23, sub-level five.")    
});