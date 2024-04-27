const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const app = express();

const DB_USER= `root`;

const DB_PASSWORD= `password`;

const DB_HOST= `27017`;

const HOST= `mongo`;

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${HOST}:27017` ;
mongoose.connect(URI).then(()=>console.log("Connected to MongoDB")).catch((err)=> console.error(err));


app.get('/', (req, res) => res.send("<h1> Hello Omar</h1>"));
app.listen(PORT, () => {
    console.log(`App is up and running on port: ${PORT}`);
});