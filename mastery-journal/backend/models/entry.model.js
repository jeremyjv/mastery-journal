const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//mongodb already generates unique id
const entrySchema = new Schema({
    day: {type: Date, required: true},
    reflect: String,
    wins: String,
    action: String,
    gratitude: String,
    visualize: String,
    
});

const entry = mongoose.model('entry', entrySchema);

module.exports = entry;
