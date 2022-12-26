const express = require("express");
const router = express.Router();
const questionRouter = require("./Question");
const commentRouter = require("./Comment");
const answerRouter = require("./Answers");
const userRouter = require("./User");
const projectRouter = require("./Project");
const notesRouter = require("./Notes");
const noteCommentRouter = require("./NoteComments");
const fileRouter = require("./File");
router.get("/", (req, res) => {
  res.send("Hello from Iut Edumate");
});

router.use("/askquestion", questionRouter);
router.use("/answer", answerRouter);
router.use("/comment", commentRouter);
router.use("/user", userRouter);
router.use("/project", projectRouter);
router.use("/notes", notesRouter);
router.use("/noteComment", noteCommentRouter);
router.use("/file", fileRouter);
module.exports = router;
