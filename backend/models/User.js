const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fireuid: { type: String, default: "", unique: true },
  name: { type: String, default: "" },
  email: { type: String, default: "" },
  department: { String, default: "" },
  program: { String, default: "" },
  Semester: { String, default: "" },
  studentid: { type: String, default: "" },
  requestedID: { type: Array, default: [] },
  request: { type: Array, default: [] },
  points: { type: Number, default: 0 },
  user: Object,
});

module.exports = mongoose.model("Users", userSchema);
