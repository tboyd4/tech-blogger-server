// importing express router
const router = require('express').Router();

// importing models required
const Post = require('../models/post.model');

// setting up route handling
router.route('/').get((req, res) => {
    Post.find()
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const postText = req.body.postText;
    const author = req.body.author;

    const newPost = new Post({title, description, postText, author});
    newPost.save()
        .then(post => res.json(post))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route(':id').get((req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route(':id').delete((req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.json('Post with ID ' + req.params.id + ' was deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').put((req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            post.title = req.body.title;
            post.description = req.body.description;
            post.postText = req.body.postText;
            post.author = req.body.author;

            post.save()
                .then(post => res.status(200).json(post))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

// exporting post routes
module.exports = router;
