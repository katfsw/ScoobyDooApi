const router = require('express').Router();
const Characters = require('./character-model.js');

router.get('/', (req, res) => {
    Characters.find()
        .then(character => {
             res.json(character);
         })
         .catch(err => res.send(err));
});

module.exports = router;