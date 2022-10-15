const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Questions",
  },
  answer: String,
  created_at: {
    type: Date,
    default: Date.now(),
  },
  like: { type: Number, default: 0 },
  dislike:{ type: Number, default: 0 },
  user: Object,
  comment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comments",
  },
});

module.exports = mongoose.model("Answers", answerSchema);