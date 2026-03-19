const express = require('express');

// Express App
const app = express();

// Routes
app.get('/', (req, res) => {
    res.json({message: "Welcome to the app!"});
});


// Listen for requests
app.listen(4000, () => {
    console.log('listening on port 4000');
});