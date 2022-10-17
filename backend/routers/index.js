const express = require('express');
const router = express.Router();
const questionRouter = require('./Question');
const commentRouter = require('./Comment');
 const answerRouter = require('./Answers');
 const userRouter = require('./User');
router.get('/',(req, res) => {
    res.send('Hello from Iut Edumate');

})

router.use('/askquestion', questionRouter);
router.use('/answer', answerRouter);
router.use('/comment', commentRouter);
router.use('/user', commentRouter);

module.exports = router;