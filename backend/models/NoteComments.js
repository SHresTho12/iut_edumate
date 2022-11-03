const mongoose = require("mongoose");
const noteCommentSchema = new mongoose.Schema({
  //   commentID: String,
  note_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Notes",
  },
  comment: String,

  created_at: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
});

module.exports = mongoose.model("NoteComments", noteCommentSchema);
