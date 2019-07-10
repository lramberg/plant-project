const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    password: String,
    plants: [{type: Schema.Types.ObjectId, ref: 'Plant'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);