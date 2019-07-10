const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var plantSchema = new Schema({
    userId: String,
    name: String,
    type: String,
    waterIntake: String,
    sunIntake: String
}, {
    timestamps: true
});

var userSchema = new Schema({
    name: String,
    password: String,
    plants: [plantSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);