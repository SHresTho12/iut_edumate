const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: String,
  body: String,
  tags: [],
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
  user: Object,
  comment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comments",
  },
});

module.exports = mongoose.model("Questions", questionSchema);