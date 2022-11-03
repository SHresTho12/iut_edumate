const mongoose = require("mongoose");

const examQuesSchema = new mongoose.Schema({
  title: String,
  body: String,
  semester: { String, default: "" },
  department: { String, default: "" },
  course: { String, default: "" },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  upvote: {
    type: Number,
    default: 0,
  },
  downvote: {
    type: Number,
    default: 0,
  },

  //array of objects
  upvotedBy: {
    type: Array,
    default: [],
  },
  downvotedBy: {
    type: Array,
    default: [],
  },
  interested: {
    type: Array,
    default: [],
  },
  user: Object,
});

module.exports = mongoose.model("ExamQuestions", examQuesSchema);
