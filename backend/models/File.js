//model for storing files
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fileSchema = new Schema({
  filename: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});
const fileDB = mongoose.model("fileDB", fileSchema);
