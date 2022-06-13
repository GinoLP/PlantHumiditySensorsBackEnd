'use strict';
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    config = require('./config.js'),
    path = require("path"),
    Sensor = require('./models/SensorsModel'),
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

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(bodyParser.json());
const routes = require('./routes/SensorsRoutes');
routes(app);

/*app.get('*', (req, res) => {
    res.status(404).send({url:`${req.originalUrl} not found`});
});*/

const server = app.listen(
    port,
    console.log(`REST API running on port: ${port}`)
);

module.exports = {app, server};