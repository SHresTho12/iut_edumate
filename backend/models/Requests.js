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
  owner: Object,
  requester: Object,
  resourceID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Notes",
  },
  status: { tyepe: Boolean, default: false },
});

module.exports = mongoose.model("Requests", requestSchema);
