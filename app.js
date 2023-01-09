require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const routes = require('./routes/approutes');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/', routes);
app.use(express.urlencoded({ extended: true }));

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECT, () => {

console.log("Connected to db!");

app.listen(3000, () => console.log("Server Up and running"));
});
