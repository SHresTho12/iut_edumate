const express = require("express");
const router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
//file upload to mongodb

// const GridFsStorage = require("multer-gridfs-storage");
// const Grid = require("gridfs-stream");
// const crypto = require("crypto");
// const path = require("path");

// const methodOverride = require("method-override");
// const bodyParser = require("body-parser");
// const fileDB = require("../models/File");
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

//post req to upload a file to mongodb
router.post("/file", async (req, res) => {
  if (!req.body.file) {
    return res.status(400).send({
      status: false,
      message: "File not added successfully",
    });
  }

  const fileData = new fileDB({
    filename: req.body.filename,
    file: req.body.file,
    course: req.body.course,
    department: req.body.department,
    semester: req.body.semester,
    user: req.body.user,
  });

  await fileData

    .save()
    .then((doc) => {
      res.status(201).send({
        status: true,
        data: doc,
      });
    })
    .catch((err) => {
      res.status(400).send({
        status: false,
        message: "File not added successfully",
      });
    });
});

router.post("/upload/file");

module.exports = router;
