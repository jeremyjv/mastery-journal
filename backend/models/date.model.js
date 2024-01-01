const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dateSchema = new Schema({
    past: {type: typeof([])},
    present: {type: typeof([])},
    future: {type: typeof([])}
});

const date = mongoose.model('date', dateSchema);

module.exports = date;
