require("dotenv").config({ path: "../.env" });

const express = require("express");
const router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
const fileDB = require("../models/File");
const { v4: uuidv4 } = require("uuid");

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
router.post("/upload/:id", async (req, res) => {
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
      requestId: req.params.id,
    });
    const response = await file.save();
    //res.json({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}` });
    return res.json({
      file: `http://localhost:80/file/download/${response.uuid}`,
      uuid: response.uuid,
    });
  });
});

//get req to download a file from mongodb
router.get("/download/:uuid", async (req, res) => {
  // Extract link and get file from storage send download stream
  const file = await fileDB.findOne({ uuid: req.params.uuid });
  // Link expired
  if (!file) {
    return res.render("download", { error: "Link has been expired." });
  }
  const response = await file.save();
  const filePath = `${file.path}`;
  res.download(filePath);
});

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

//email sending to the user
router.post("/send", async (req, res) => {
  const { uuid, emailTo, emailFrom } = req.body;
  if (!uuid || !emailTo || !emailFrom) {
    return res.status(422).send({ error: "All fields are required" });
  }
  // Get data from db
  const file = await fileDB.findOne({ uuid: uuid });
  if (file.sender) {
    return res.status(422).send({ error: "Email already sent" });
  }
  file.sender = emailFrom;
  file.receiver = emailTo;
  const response = await file.save();
  // Send email
  const sendMail = require("../services/mailService");
  sendMail({
    from: emailFrom,
    to: emailTo,
    subject: "IUT Edumate File Sharing",
    text: `${emailFrom} shared a file with you.`,
    html: require("../services/emailTemplate")({
      emailFrom: emailFrom,
      downloadLink: `http://localhost:80/file/download/${file.uuid}`,
      size: parseInt(file.size / 1000) + " KB",
      expires: "24 hours",
    }),
  });
  return res.send({ success: true });
});

module.exports = router;
