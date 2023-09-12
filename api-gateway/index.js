const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Define your desired port number

// Middleware setup, if needed
app.use(bodyParser.json())
// Define your route
app.get('/', (req, res) => {
    res.send({ "status": "ready" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

