const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//mongodb already generates unique id
const dateSchema = new Schema({
    day: {type: Date, required: true},
    reflect: String,
    wins: String,
    action: String,
    gratitude: String,
    visualize: String,
    
});

const date = mongoose.model('date', dateSchema);

module.exports = date;
