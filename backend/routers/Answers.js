const express = require("express");
const router = express.Router();
const answerDB = require("../models/Answers");

router.post("/", async (req, res) => {
  const answerData = new answerDB({
    question_id: req.body.question_id,
    answer: req.body.answer,
    user: req.body.user,
  });

  await answerData
    .save()
    .then((doc) => {
      res.status(201).send({
        status: true,
        data: doc,
      });
    })
    .catch((err) => {
      res.status(400).send({
        status: false,
        message: "Answer not added successfully",
      });
    });
});



//create a put req to increament the vote count
router.put('/upvote/:id', async (req, res) => {
    const id = req.params.id;
    
    const user = req.body.user.uid;
    const answer = await answerDB.findById(id);
    let upvote = answer.upvote;
    let downvote = answer.downvote;
    const upvotedBy = answer.upvotedBy;
    const downvotedBy = answer.downvotedBy;

    if (upvotedBy.includes(user)) {
        res.status(400).send({
            status: false,
            message: 'You have already upvoted this answer',
        });
    } else if (downvotedBy.includes(user)) {
        const index = downvotedBy.indexOf(user);
        downvotedBy.splice(index, 1);
        downvote--;
        upvote++;
        upvotedBy.push(user);
        await answerDB.findByIdAndUpdate(id, {
            upvote: upvote,
            downvote: downvote,
            upvotedBy: upvotedBy,
            downvotedBy: downvotedBy,
        });
        res.status(200).send({
            status: true,
            message: 'Upvote added successfully',
        });
    } else {
        upvote++;
        upvotedBy.push(user);
        await answerDB.findByIdAndUpdate(id, {
            upvote: upvote,
            upvotedBy: upvotedBy,
        });
        res.status(200).send({
            status: true,
            message: 'Upvote added successfully',
        });
    }
});

//create a put req to decreament the vote count
router.put('/downvote/:id', async (req, res) => {
    const id = req.params.id;
    const user = req.body.user.uid;
    const answer = await answerDB.findById(id);
    let upvote = answer.upvote;
    let downvote = answer.downvote;
    const upvotedBy = answer.upvotedBy;
    const downvotedBy = answer.downvotedBy;
    if (downvotedBy.includes(user)) {
        res.status(400).send({
            status: false,
            message: 'You have already downvoted this question',
        });
    } else if (upvotedBy.includes(user)) {
        const index = upvotedBy.indexOf(user);
        upvotedBy.splice(index, 1);
        upvote--;
        downvote++;
        downvotedBy.push(user);
        await answerDB.findByIdAndUpdate(id, {
            upvote: upvote,
            downvote: downvote,
            upvotedBy: upvotedBy,
            downvotedBy: downvotedBy,

        });
        res.status(200).send({
            status: true,
            message: 'Downvote added successfully',
        });
    } else {
        downvote++;
        downvotedBy.push(user);
        await answerDB.findByIdAndUpdate(id, {
            downvote: downvote,
            downvotedBy: downvotedBy,
        });
        res.status(200).send({
            status: true,
            message: 'Downvote added successfully',
        });
    }
});


module.exports = router;