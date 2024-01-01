const router = require('express').Router();
let Entry = require('../models/entry.model');

//fetch all dates
router.route('/').get((req,res) => {
    Entry.find()
        .then(dates => res.json(timelines))
        .catch(err => res.status(400).json('Error: ' + err));

})

router.route('/add').post((req, res) => {
    const day = Date.parse(req.body.day);
    const reflect = req.body.reflect;
    const wins = req.body.wins;
    const action = req.body.action; 
    const gratitude = req.body.gratitude;
    const visualize = req.body.visualize;
    

    const newEntry = new Entry({
        day,
        reflect,
        wins,
        action,
        gratitude,
        visualize
    });

    newEntry.save()
        .then(() => res.json('Entry added')) // returns added user in json
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
