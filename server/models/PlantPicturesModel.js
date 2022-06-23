const mongoose = require("mongoose");

const PlantPictureSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    file: {
        data: Buffer,
        contentType: String
    },
    plantName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("PlantPictures", PlantPictureSchema);