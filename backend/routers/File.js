const express = require("express");
const router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
const fileDB = require("../models/File");
const { v4: uuidv4 } = require("uuid");
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

// let storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./Uploads/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueName = `${Date.now()}-${Math.round(
//       Math.random() * 1e9
//     )}${path.extname(file.originalname)}`;
//     cb(null, uniqueName);
//   },
// });

let storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "backend/uploads/"),
  filename: (req, file, cb) => {
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
router.post("/upload", async (req, res) => {
  //VALIDATE REQUEST
  upload(req, res, async (err) => {
    if (!req.file) {
      return res.status(400).send({
        status: false,
        message: "File not added successfully",
      });
    }
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
    //res.json({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}` });
    return res.json({
      file: `http://localhost:80/file/upload/${response.uuid}`,
    });
  });
});

// router.get("/show/:uuid", async (req, res) => {
//   try {
//     const file = await File.findOne({ uuid: req.params.uuid });
//     // Link expired
//     if (!file) {
//       return res.render("download", { error: "Link has been expired." });
//     }
//     return res.render("download", {
//       uuid: file.uuid,
//       fileName: file.filename,
//       fileSize: file.size,
//       downloadLink: `http://localhost:80/file/download/${file.uuid}`,
//     });
//   } catch (err) {
//     return res.render("download", { error: "Something went wrong." });
//   }
// });
//get req to download a file from mongodb
// router.get("/download/:uuid", async (req, res) => {
//   try {
//     const file = await fileDB.findOne({ uuid: req.params.uuid });
//     if (!file) {
//       return res.status(400).send({
//         status: false,
//         message: "File not found",
//       });
//     }
//     const filePath = `${__dirname}/../${file.path}`;
//     res.download(filePath);
//   } catch (err) {
//     return res.status(500).send({ error: err.message });
//   }
// });

//GET REQUEST FOR GETTING FILE INFO
router.get("/show/:uuid", async (req, res) => {
  try {
    const file = await fileDB.findOne({ uuid: req.params.uuid });
    if (!file) {
      return res.status(400).send({
        status: false,
        message: "File not found",
      });
    }
    return res.json({
      file,
      downloadLink: `http://localhost:80/file/download/${file.uuid}`,
    });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router;
