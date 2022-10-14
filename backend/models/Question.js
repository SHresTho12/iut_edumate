

const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: String,
  body: String,
  tags: [],
  created_at: {
    type: Date,
    default: Date.now(),
  },
  like: integer,
  dislike:integer,
  user: Object,
  comment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comments",
  },
});

module.exports = mongoose.model("Questions", questionSchema);