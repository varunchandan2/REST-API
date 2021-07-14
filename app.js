const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');        // Parse the body to make it readablestream

// Create express app
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");

})

// Starting the server
app.listen(3000, console.log("Listening on port 3000"))