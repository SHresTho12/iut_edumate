const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
// const mongoose = require('mongoose')
const QuestionDB = require('../models/Question');

router.post('/', async (req, res) => {
  const questionData = new QuestionDB({
    title: req.body.title,
    body: req.body.body,
    tags: req.body.tags,
    user: req.body.user,
  });

  await questionData
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
        message: "Question not added successfully",
      });
    });
});


//create a put req to increament the vote count
router.put('/upvote/:id', async (req, res) => {
    const id = req.params.id;
    
    const user = req.body.user.uid;
    const question = await QuestionDB.findById(id);
    let upvote = question.upvote;
    let downvote = question.downvote;
    const upvotedBy = question.upvotedBy;
    const downvotedBy = question.downvotedBy;

    if (upvotedBy.includes(user)) {
        res.status(400).send({
            status: false,
            message: 'You have already upvoted this question',
        });
    } else if (downvotedBy.includes(user)) {
        const index = downvotedBy.indexOf(user);
        downvotedBy.splice(index, 1);
        downvote--;
        upvote++;
        upvotedBy.push(user);
        await QuestionDB.findByIdAndUpdate(id, {
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
        await QuestionDB.findByIdAndUpdate(id, {
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
    const question = await QuestionDB.findById(id);
    let upvote = question.upvote;
    let downvote = question.downvote;
    const upvotedBy = question.upvotedBy;
    const downvotedBy = question.downvotedBy;
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
        await QuestionDB.findByIdAndUpdate(id, {
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
        await QuestionDB.findByIdAndUpdate(id, {
            downvote: downvote,
            downvotedBy: downvotedBy,
        });
        res.status(200).send({
            status: true,
            message: 'Downvote added successfully',
        });
    }
});




router.get("/:id", async (req, res) => {
    try {
      
      QuestionDB.aggregate([
        {
          $match: { _id: mongoose.Types.ObjectId(req.params.id) },
        },
        {
          $lookup: {
            from: "answers",
            let: { question_id: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$question_id", "$$question_id"],
                  },
                },
              },
              {
                $project: {
                  _id: 1,
                  user: 1,
                  answer: 1,
                  // created_at: 1,
                  upvote:1,
                  downvote:1,
                  question_id: 1,
                  created_at: 1,
                },
              },
            ],
            as: "answerDetails",
          },
        },
        {
          $lookup: {
            from: "comments",
            let: { question_id: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$question_id", "$$question_id"],
                  },
                },
              },
              {
                $project: {
                  _id: 1,
                  question_id: 1,
                  user: 1,
                  comment: 1,
                  // created_at: 1,
                  // question_id: 1,
                  created_at: 1,
                },
              },
            ],
            as: "comments",
          },
        },
        // {
        //   $unwind: {
        //     path: "$answerDetails",
        //     preserveNullAndEmptyArrays: true,
        //   },
        // },
        {
          $project: {
            __v: 0,
           
          },
        },
      ])
        .exec()
        .then((questionDetails) => {
          res.status(200).send(questionDetails);
        })
        .catch((e) => {
          console.log("Error: ", e);
          res.status(400).send(e);
        });
    } catch (err) {
      res.status(400).send({
        message: "Question not found",
      });
    }
  });
  
  router.get("/", async (req, res) => {
    const error = {
      message: "Error in retrieving questions",
      error: "Bad request",
    };
  
    QuestionDB.aggregate([
      {
        $lookup: {
          from: "comments",
          let: { question_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$question_id", "$$question_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                // user_id: 1,
                comment: 1,
                created_at: 1,
                // question_id: 1,
              },
            },
          ],
          as: "comments",
        },
      },
      {
        $lookup: {
          from: "answers",
          let: { question_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$question_id", "$$question_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                // user_id: 1,
                // answer: 1,
                // created_at: 1,
                // question_id: 1,
                // created_at: 1,
              },
            },
          ],
          as: "answerDetails",
        },
      },
      // {
      //   $unwind: {
      //     path: "$answerDetails",
      //     preserveNullAndEmptyArrays: true,
      //   },
      // },
      {
        $project: {
          __v: 0,
          // _id: "$_id",
          // answerDetails: { $first: "$answerDetails" },
        },
      },
    ])
      .exec()
      .then((questionDetails) => {
        res.status(200).send(questionDetails);
      })
      .catch((e) => {
        console.log("Error: ", e);
        res.status(400).send(error);
      });
  });
  
module.exports = router;