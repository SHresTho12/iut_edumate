const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fireuid: { type: String, default: "", unique: true },
  name: { type: String, default: "" },
  email: { type: String, default: "" },
  department: { String, default: "" },
  Semester: { String, default: "" },
  user: Object,
  studentid: { type: String, default: "" },
});

module.exports = mongoose.model("Users", userSchema);
