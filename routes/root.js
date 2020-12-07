// importing express router
const router = require('express').Router();

// setting up route handling

router.route('/').get((req, res) => {
    res.send('hello there')
})

// export router
module.exports = router;