const express = require("express");
const mongoose = require("mongoose");
const requestDB = require("../models/Requests");
const router = express.Router();

//post a request to the database
router.post("/", async (req, res) => {
  const request = new RequestDB({
    title: req.body.title,
    department: req.body.department,
    semester: req.body.semester,
    course: req.body.course,
    requester: req.body.user,
    requestedID: req.body.requestedID,
    resourceID: req.body.resourceID,
    owner: owner,
  });

  await request
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
        message: "Request not added successfully",
      });
    });
});

//get only reqest made by the user
router.get("/user", async (req, res) => {
  const user = req.body.user;
  await requestDB
    .find({ requester: user })
    .then((doc) => {
      res.status(200).send({
        status: true,
        data: doc,
      });
    })
    .catch((err) => {
      res.status(400).send({
        status: false,
        message: "Request not found",
      });
    });
});

//get all the requests of the user of owner
router.get("/owner", async (req, res) => {
  const user = req.body.user;
  await requestDB

    .find({ owner: user })
    .then((doc) => {
      res.status(200).send({
        status: true,
        data: doc,
      });
    })
    .catch((err) => {
      res.status(400).send({
        status: false,
        message: "Request not found",
      });
    });
});

module.exports = router;
