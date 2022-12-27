const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  title: { type: String, required: false },
  semester: { type: String, required: false },
  department: { type: String, required: false },
  course: { type: String, required: false },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  owner: { type: String, required: true },
  requester: { type: String, required: true },
  resourceID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Notes",
    required: true,
  },
  status: { type: Boolean, default: false },
});

module.exports = mongoose.model("Requests", requestSchema);
