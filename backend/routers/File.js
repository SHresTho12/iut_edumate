const express = require("express");
const router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
const fileDB = require("../models/File");
//file upload to mongodb

// const GridFsStorage = require("multer-gridfs-storage");
// const Grid = require("gridfs-stream");
// const crypto = require("crypto");
//

// const methodOverride = require("method-override");
// const bodyParser = require("body-parser");
//
// const notesDB = require("../models/Notes");
// const { db } = require("../models/Notes");
// const { response } = require("express");
// const { json } = require("body-parser");
// const { ObjectId } = require("mongodb");
// const { Mongoose } = require("mongoose");
// const { findById } = require("../models/Notes");
// const { findOne } = require("../models/Notes");
// const { findOneAndUpdate } = require("../models/Notes");
// const { findOneAndDelete } = require("../models/Notes");
// const { findOneAndRemove } = require("../models/Notes");
// const { findOneAndReplace } = require("../models/Notes");
// const { findOneAndUpsert } = require("../models/Notes");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

let upload = multer({ storage, limits: { fileSize: 1000000 * 100 } }).single(
  "myfile"
);

//post req to upload a file to mongodb
router.post("/", async (req, res) => {
  if (!req.body.file) {
    return res.status(400).send({
      status: false,
      message: "File not added successfully",
    });
  }

  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).send({ error: err.message });
    }
    const file = new fileDB({
      filename: req.file.filename,
      uuid: uuidv4(),
      path: req.file.path,
      size: req.file.size,
      user: req.body.user,
      semester: req.body.semester,
      department: req.body.department,
      course: req.body.course,
    });
    const response = await file.save();
    res.json({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}` });
  });
});

router.post("/upload/file");

module.exports = router;
