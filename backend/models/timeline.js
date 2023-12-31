const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const timelineSchema = new Schema({
    skills: {type: typeof([])},
    goals: {type: typeof([])},
    dates: {type: typeof([])}
});

const timeline = mongoose.model('timeline', timelineSchema);

module.exports = timeline;