//imports
require('dotenv').config();
const express = require('express');
const mongoose = require ('mongoose');
const cors = require('cors');

//creating app
const app = express();
const port = process.env.PORT || 3339;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('uploads'));

//database connection
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {console.log('Connected to database')})
.catch(err => {console.log(err)});

//routes prefix
app.use('/api/post', require('./routes/routes'))

//starting server
app.listen(port, () => {console.log(`Server started on http://localhost:${port}`)});