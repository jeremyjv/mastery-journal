const router = require('express').Router();
let Journal = require('../models/journal.model');

//returns all journals
router.route('/').get((req,res) => {
    Journal.find()
        .then(journals => res.json(journals))
        .catch(err => res.status(400).json('Error: ' + err));

})
//add new 
router.route('/add').post((req, res) => {
    const goals = req.body.goals;
    const skills = req.body.skills;
    const entries = req.body.dates; //array of date ids

    const newJournal = new Journal({goals, skills, entries})

    newJournal.save()
        .then(() => res.json('journal added')) // returns added user in json
        .catch(err => res.status(400).json('Error: ' + err));
});

//need to create PUT route to update 
router.route('/:id').put((req, res) => {
    Journal.findByIdAndUpdate(req.params.id, {
        goals: req.body.goals,
        skills: req.body.skills,
        entries: req.body.entries
    })
        .then(() => res.json("Journal Updated"))
        .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;
