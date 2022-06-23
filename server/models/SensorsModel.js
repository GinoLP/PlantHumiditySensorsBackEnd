'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SensorsSchema = new Schema({
    name: { type: String, required: true },
    plantName: { type: String, required: true },
    minHumidity: { type: Number, required: true },
    maxHumidity: { type: Number, required: true },
    plantPictureId: { type: Schema.Types.ObjectId, ref:'PlantPictures' }
});

module.exports = mongoose.model('Sensors', SensorsSchema);