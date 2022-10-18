const express = require('express');
const router = express.Router();
const questionRouter = require('./Question');
const commentRouter = require('./Comment');
 const answerRouter = require('./Answers');
 const userRouter = require('./User');
 const projectRouter = require('./projectidea');
 const researchRouter = require('./research');
router.get('/',(req, res) => {
    res.send('Hello from Iut Edumate');

})

router.use('/askquestion', questionRouter);
router.use('/answer', answerRouter);
router.use('/comment', commentRouter);
router.use('/user', commentRouter);
router.use('/project',projectRouter);
router.use('/research',researchRouter);

module.exports = router;