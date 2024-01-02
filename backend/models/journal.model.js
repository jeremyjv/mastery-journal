const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//will need to adjust types accordingly
const journalSchema = new Schema({
    goals: {type: [], required: true},
    skills: {type: [], required: true},

    //contain array of ids to reduce json size
    entries: {type: [], required: true}
});

const journal = mongoose.model('journal', journalSchema);

module.exports = journal;



