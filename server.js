// server imports
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// initiating dotenv
require('dotenv').config();

// setting up app variables
const app = express();
const port = process.env.PORT || 5000;

// setting up middleware
app.use(cors());
app.use(express.json());

// setting up connection to MongoDB Database (Using Atlas)
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB Connection Made... Status: Successful...')
});

// setting up routes
const postRouter = require('./routes/posts');
const authorRouter = require('./routes/authors');
app.use('/posts', postRouter);
app.use('/authors', authorRouter);

// getting server running
app.listen(port, () => {
    console.log(`Server running... listening on port: ${port}`);
})