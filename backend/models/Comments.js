const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  //   commentID: String,
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Questions",
  },
  comment: String,
  like: { type: Number, default: 0 },
  dislike:{ type: Number, default: 0 },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
});

module.exports = mongoose.model("Comments", CommentSchema);