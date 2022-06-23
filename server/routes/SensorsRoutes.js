'use strict';
import upload from './upload.js'

module.exports = (app) => {
    const Sensors = require('../controllers/SensorController');
    app.route('/sensors')
        .get(Sensors.getAllSensors)
        .post(upload, Sensors.createNewSensor);

    app.route('/sensors/:sensorId')
        .get(Sensors.getSensor)
        .put(Sensors.updateSensor)
        .delete(Sensors.removeSensor);
};