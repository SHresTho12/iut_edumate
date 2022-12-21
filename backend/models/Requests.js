const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  title: { type: String, required: true },
  semester: { type: String, required: true },
  department: { type: String, required: true },
  course: { type: String, required: true },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  requestUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  resourceID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Notes",
  },
});

module.exports = mongoose.model("Requests", requestSchema);
