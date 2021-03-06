'use strict';
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    config = require('./config.js'),
    path = require("path"),
    Sensor = require('./models/SensorsModel'),
    Upload = require('./models/PlantPicturesModel'),
    bodyParser = require("body-parser");

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV.trim() !== 'test') {
    mongoose.connect(config.database, config.dbsettings)
        .then(res => {
            console.log("DB Connected!")
        })
        .catch(err => {
            console.log(Error, err.message);
        });
}

/*mongoose.connect(config.database, config.dbsettings)
    .then(res => {
        console.log("DB Connected!")
    })
    .catch(err => {
        console.log(Error, err.message);
    });*/

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', '*'); // Origin, X-Requested-With, content-type, Accept, Authorization
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Request-Headers', '*');
    next();
});

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(bodyParser.json());

const routes = require('./routes/SensorsRoutes');
routes(app);

const server = app.listen(
    port,
    console.log(`REST API running on port: ${port}`)
);

module.exports = {app, server};