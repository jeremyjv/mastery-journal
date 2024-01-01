const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//will need to adjust types accordingly
const timelineSchema = new Schema({
    goals: {type: String, required: true},
    skills: {type: String, required: true},
    dates: {type: String, required: true}
});

const timeline = mongoose.model('timeline', timelineSchema);

module.exports = timeline;