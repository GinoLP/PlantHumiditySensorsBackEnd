'use strict';

const Sensors = require("../controllers/SensorController");
module.exports = (app) => {
    const Sensors = require('../controllers/SensorController');
    const multer  = require('multer')
    const Upload = require("../models/PlantPicturesModel");
    const storage = multer.memoryStorage();
    const upload = multer({ storage: storage });

    app.route('/sensors')
        .get(Sensors.getAllSensors)
        .post(Sensors.createNewSensor);

    app.route('/addPlantPicture')
        .post(upload.single("file"), async (req, res) => {
            // req.file can be used to access all file properties
            try {
                //check if the request has an image or not
                if (!req.file) {
                    console.log("here")
                    res.json({
                        success: false,
                        message: "You must provide at least 1 file"
                    });
                } else {

                    let imageUploadObject = {
                        file: {
                            data: req.file.buffer,
                            contentType: req.file.mimetype
                        },
                        fileName: req.body.fileName,
                        plantName: req.body.plantName
                    };
                    const uploadObject = new Upload(imageUploadObject);
                    // saving the object into the database
                    const uploadProcess = await uploadObject.save();

                    res.json(`${imageUploadObject.plantName} has been added to the database.`);
                }
            } catch (error) {
                console.error(error);
                res.status(500).send("Server Error");
            }
        });

    app.route('/sensors/:sensorId')
        .get(Sensors.getSensor)
        //.put(Sensors.updateSensor)
        .delete(Sensors.removeSensor);

    app.route('/sensors/addPicture')
        .put(Sensors.addPictureWithId);
};