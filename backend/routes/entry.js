const router = require('express').Router();
let Entry = require('../models/entry.model');

//fetch all dates
router.route('/').get((req,res) => {
    Entry.find()
        .then(entries => res.json(entries))
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

//use to obtain specific entry
router.route('/:id').get((req, res) => {
    Entry.findById(req.params.id)
        .then(entry => res.json(entry))
        .catch(err => res.status(400).json('Error: ' + err));
});

//use to update current entry 
router.route('/:id').put((req, res) => {

    Entry.findByIdAndUpdate(req.params.id, {
        day: Date.parse(req.body.day),
        reflect: req.body.reflect,
        wins: req.body.wins,
        action: req.body.action,
        gratitude: req.body.gratitude,
        visualize: req.body.visualize
    })
        .then(() => res.json("entry updated"))
        .catch(err => res.status(400).json('Error: ' + err));

    
});

module.exports = router;
