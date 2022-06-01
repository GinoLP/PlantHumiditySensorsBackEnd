'use strict';

module.exports = (app) => {
    const Sensors = require('../controllers/SensorController');
    app.route('/sensors')
        .get(Sensors.getAllSensors)
        .post(Sensors.createNewSensor);

    app.route('/sensors/:sensorId')
        .get(Sensors.getSensor)
        .put(Sensors.updateSensor)
        .delete(Sensors.removeSensor);
};