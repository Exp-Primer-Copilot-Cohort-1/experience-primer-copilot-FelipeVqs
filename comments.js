// Create web server

// Import libraries
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create web server
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(cors());

// Set up routes
const comments = require('./routes/api/comments');
app.use('/api/comments', comments);

// Set up port
const port = process.env.PORT || 5000;

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));
