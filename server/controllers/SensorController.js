'use strict';

const mongoose = require('mongoose'),
    Sensor = mongoose.model('Sensors'),
    multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

exports.getAllSensors = (req, res) => {
    Sensor.find({}, (error, result) => {
        if (error)
            res.send(error);

        res.json(result);
    });
};

exports.createNewSensor = (req, res) => {
    const path = req.file.path.replace(/\\/g, "/")

    let newSensor = new Sensor(req.body);
    newSensor.plantPicture = "https://plant-humidity-sensors.herokuapp.com/" + path;
    newSensor.save((error, result) => {
        if (error)
            res.send(error);

        res.json(result);
    });
}

exports.getSensor = (req, res) => {
    findById(req, res);
}

exports.updateSensor = (req, res) => {
    findById(req, res);
}

exports.removeSensor = (req, res) => {
    Sensor.remove({
        _id: req.params.sensorId
    }, (error, result) => {
        if (error)
            res.send(error);

        res.json(result);
    })
}

function findById(req,res) {
    Sensor.findById(req.params.sensorId, (error, result) => {
        if (error)
            res.send(error);

        res.json(result);
    })
}