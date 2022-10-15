const express = require('express');
const router = express.Router();
const questionRouter = require('./Question');
// const Comment = require('../models/Comments');
// const Answer = require('../models/Answers');
router.get('/',(req, res) => {
    res.send('Hello from Iut Edumate');

})

router.use('/askquestion', questionRouter);

module.exports = router;