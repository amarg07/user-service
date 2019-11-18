/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const client = require("../src/redis/redis");

const app = express();
const routes = require("../src/routes/userRoutes")

client.on('connect', () => { console.log("redis connected"); });
client.on('error', (err) => { console.log("redis error", err) });

mongoose.connect('mongodb://mongo:27017/test', { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (err) => { console.log('error', err); });
db.on('disconneted', () => { console.log('error'); });

db.once('open', () => { console.log('connected'); });

//app.use(bodyparser.urlencoded({ extended: false}));
app.use(express.json());
app.listen(8081, (err) => {
    console.log("Listening on 8081");
});
app.use(routes);