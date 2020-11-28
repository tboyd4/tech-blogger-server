// importing express router
const router = require('express').Router();

// importing models required
const Author = require('../models/author.model');

// setting up route handling

router.route('/').get((req, res) => {
    Author.find()
        .then(author => res.status(200).json(author))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const fullname = req.body.fullname;
    const posts = [];
    const email = req.body.email;

    const newAuthor = new Author({fullname, posts, email});
    newAuthor.save()
        .then(author => res.status(200).json(author))
        .catch(err => res.status(400).json('Error: ' + err));
})

// export router
module.exports = router;