const router = require('express').Router();
let Timeline = require('../models/timeline.model');

//returns all timelines
router.route('/').get((req,res) => {
    Timeline.find()
        .then(timelines => res.json(timelines))
        .catch(err => res.status(400).json('Error: ' + err));

})

router.route('/add').post((req, res) => {
    const goals = req.body.skills;
    const skills = req.body.goals;
    const dates = req.body.dates; //arry of date objects

    const newTimeline = new Timeline({goals, skills, dates})

    newTimeline.save()
        .then(() => res.json('timeline added')) // returns added user in json
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
