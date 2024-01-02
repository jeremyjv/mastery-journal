const router = require('express').Router();
let Journal = require('../models/journal.model');

//returns all journals
router.route('/').get((req,res) => {
    Journal.find()
        .then(journals => res.json(journals))
        .catch(err => res.status(400).json('Error: ' + err));

})

router.route('/add').post((req, res) => {
    const goals = req.body.skills;
    const skills = req.body. goals;
    const dates = req.body.dates; //array of date ids

    const newJournal = new Journal({goals, skills, entries})

    newJournal.save()
        .then(() => res.json('journal added')) // returns added user in json
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
