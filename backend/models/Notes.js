const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: String,
  body: String,
  course: { type: String, default: "" },
  department: { type: String, default: "" },
  semester: { type: String, default: "" },

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
  comment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comments",
  },
});

module.exports = mongoose.model("Notes", notesSchema);
