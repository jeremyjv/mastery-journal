const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;



app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI
mongoose.connect(uri);
//verify connection to database
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connected successfully')
});

const timelineRouter = require('./routes/timeline');

app.use('/timeline', timelineRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



//Need to create routes in to access data in database
