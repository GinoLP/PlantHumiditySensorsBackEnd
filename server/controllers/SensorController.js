'use strict';

const mongoose = require('mongoose'),
    Sensor = mongoose.model('Sensors'),
    Pictures = mongoose.model('PlantPictures');

exports.getAllSensors = (req, res) => {
    Sensor.find({}, (error, result) => {
        if (error)
            res.send(error);

        res.json({result});
    });
};

exports.createNewSensor = (req, res) => {
    let newSensor = new Sensor(req.body);
    newSensor.save((error, result) => {
        if (error)
            res.send(error);

        res.json(result);
    });
}

exports.getSensor = (req, res) => {
    let sensor = findById(req, res);
    res.json({Sensor: sensor.toObject({getters: true})});
}

exports.updateSensor = (req, res) => {
    let updatedSensor = findById(req, res);
    res.json({updatedSensor});
}
exports.addPictureWithId = (req, res) => {
    console.log(req.body);
    Pictures.findById(req.body.pictureId, (error, result) =>{
        if (error)
            res.send(error);
    });
    console.log(req.body);
    Sensor.updateOne(
        {
            _id: mongoose.Types.ObjectId("6297e11efa979a214bbf1c0e")
        },{
            $set:{
                plantPictureId: mongoose.Types.ObjectId(req.body.pictureId)
            }
        },(error, result) => {
            if (error)
                res.send(error);

            res.send(result);
        });
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

        return result;
    })
}