const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var plantSchema = new Schema({
    userId: String,
    name: String,
    type: String,
    waterIntake: String,
    sunIntake: String,
    watering: Array,
    brightness: Array
}, {
    timestamps: true
});


module.exports = mongoose.model('Plant', plantSchema);