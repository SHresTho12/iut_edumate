const mongoose = require("mongoose");
const labCommentSchema = new mongoose.Schema({
  //   commentID: String,
  lab_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Labs",
  },
  comment: String,

  created_at: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
});

module.exports = mongoose.model("LabComments", labCommentSchema);
