require('dotenv').config();

const express = require('express');

// Express App
const app = express();


// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
});


// Routes
app.get('/', (req, res) => {
    res.json({message: "Welcome to the app!"});
});


// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
});