const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//will need to adjust types accordingly
const timelineSchema = new Schema({
    goals: {type: [], required: true},
    skills: {type: [], required: true},

    //contain array of ids to reduce json size
    dates: {type: [], required: true}
});

const timeline = mongoose.model('timeline', timelineSchema);

module.exports = timeline;



