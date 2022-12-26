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

module.exports = router;
