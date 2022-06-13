'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SensorsSchema = new Schema({
    name: { type: String, required: true },
    plantName: { type: String, required: true },
    minHumidity: { type: Number, required: true },
    maxHumidity: { type: String, required: true },
    plantPicture: { data: Buffer, contentType: String }
});

module.exports = mongoose.model('Sensors', SensorsSchema);