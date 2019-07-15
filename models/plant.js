const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var plantSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    name: String,
    waterSum: { type: Number, default: 0 },
    growth: { type: Number, default: 0 }
}, {
    timestamps: true
});


module.exports = mongoose.model('Plant', plantSchema);