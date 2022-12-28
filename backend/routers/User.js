const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const UserDB = require("../models/User");

router.post("/", async (req, res) => {
  const userData = new UserDB({
    fireuid: req.body.fireuid,
    name: req.body.name,
    email: req.body.email,
    studentid: req.body.studentid,
    department: req.body.department,
    program: req.body.program,
    Semester: req.body.Semester,
    user: req.body.user,
  });

  await userData
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
        message: "User already exists",
      });
    });
});

//get request for user matching fireuid
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserDB.findOne({ fireuid: id });
    if (!user) {
      res.status(404).send({
        status: false,
        message: "User not found",
      });
    } else {
      res.status(200).send({
        status: true,
        data: user,
      });
    }
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Error while getting user",
    });
  }
});

//update profile requested
router.put("/update/:id", async (req, res) => {
  const fireuid = req.params.id;

  const name = req.body.name;
  const email = req.body.email;
  const studentid = req.body.studentid;
  const department = req.body.department;
  const program = req.body.program;
  const semester = req.body.Semester;

  const filter = { fireuid: req.params.id };
  const update = {
    studentid: studentid,
    name: name,
    department: department,
    program: program,
    Semester: semester,
  };
  const response = await new Promise((resolve, reject) => {
    UserDB.findOneAndUpdate(filter, update, { new: true }, (err, doc) => {
      if (err) {
        resolve("User not updated");
      } else {
        resolve(doc);
      }
    });
  });

  res.status(200).send({
    data: response,
  });
});

//increament points
router.put("/update/points/:id", async (req, res) => {
  const fireuid = req.params.id;
  const points = req.body.points;
  const filter = { fireuid: req.params.id };
  const update = {
    points: points,
  };
  const response = await new Promise((resolve, reject) => {
    UserDB.findOneAndUpdate(filter, update, { new: true }, (err, doc) => {
      if (err) {
        resolve("User not updated");
      } else {
        resolve(doc);
      }
    });
  });
});

module.exports = router;
