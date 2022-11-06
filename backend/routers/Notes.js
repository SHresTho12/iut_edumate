const express = require("express");
const router = express.Router();
const notesDB = require("../models/Notes");

router.post("/", async (req, res) => {
  const noteData = new notesDB({
    title: req.body.title,
    body: req.body.body,
    course: req.body.course,
    department: req.body.department,
    semester: req.body.semester,
    user: req.body.user,
  });

  await noteData
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
        message: "Note not added successfully",
      });
    });
});

//create a put req to increament the vote count
router.put("/upvote/:id", async (req, res) => {
  const id = req.params.id;

  const user = req.body.user.uid;
  const note = await notesDB.findById(id);
  let upvote = note.upvote;
  let downvote = note.downvote;
  const upvotedBy = note.upvotedBy;
  const downvotedBy = note.downvotedBy;

  if (upvotedBy.includes(user)) {
    res.status(400).send({
      status: false,
      message: "You have already upvoted this note",
    });
  } else if (downvotedBy.includes(user)) {
    const index = downvotedBy.indexOf(user);
    downvotedBy.splice(index, 1);
    downvote--;
    upvote++;
    upvotedBy.push(user);
    await notesDB.findByIdAndUpdate(id, {
      upvote: upvote,
      downvote: downvote,
      upvotedBy: upvotedBy,
      downvotedBy: downvotedBy,
    });
    res.status(200).send({
      status: true,
      message: "Upvote added successfully",
    });
  } else {
    upvote++;
    upvotedBy.push(user);
    await notesDB.findByIdAndUpdate(id, {
      upvote: upvote,
      upvotedBy: upvotedBy,
    });
    res.status(200).send({
      status: true,
      message: "Upvote added successfully",
    });
  }
});

//create a put req to decreament the vote count
router.put("/downvote/:id", async (req, res) => {
  const id = req.params.id;
  const user = req.body.user.uid;
  const note = await notesDB.findById(id);
  let upvote = note.upvote;
  let downvote = note.downvote;
  const upvotedBy = note.upvotedBy;
  const downvotedBy = note.downvotedBy;
  if (downvotedBy.includes(user)) {
    res.status(400).send({
      status: false,
      message: "You have already downvoted this question",
    });
  } else if (upvotedBy.includes(user)) {
    const index = upvotedBy.indexOf(user);
    upvotedBy.splice(index, 1);
    upvote--;
    downvote++;
    downvotedBy.push(user);
    await notesDB.findByIdAndUpdate(id, {
      upvote: upvote,
      downvote: downvote,
      upvotedBy: upvotedBy,
      downvotedBy: downvotedBy,
    });
    res.status(200).send({
      status: true,
      message: "Downvote added successfully",
    });
  } else {
    downvote++;
    downvotedBy.push(user);
    await notesDB.findByIdAndUpdate(id, {
      downvote: downvote,
      downvotedBy: downvotedBy,
    });
    res.status(200).send({
      status: true,
      message: "Downvote added successfully",
    });
  }
});

//get note request
router.get("/", async (req, res) => {
  await notesDB
    .find()
    .then((doc) => {
      res.status(200).send({
        status: true,
        data: doc,
      });
    })
    .catch((err) => {
      res.status(400).send({
        status: false,
        message: "No notes found",
      });
    });
});

//interested update request
router.put("/interested/:id", async (req, res) => {
  const id = req.params.id;
  const user = req.body.user;
  const note = await notesDB.findById(id);
  let interested = note.interested;
  if (interested.includes(user)) {
    res.status(400).send({
      status: false,
      message: "You have already added this note to your interested list",
    });
  } else {
    interested.push(user);
    await notesDB.findByIdAndUpdate(id, {
      interested: interested,
    });
    res.status(200).send({
      status: true,
      message: "Note added to your interested list",
    });
  }
});

module.exports = router;
