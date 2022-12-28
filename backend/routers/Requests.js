const express = require("express");
const mongoose = require("mongoose");
const requestDB = require("../models/Requests");
const router = express.Router();

//post a request to the database
router.post("/", async (req, res) => {
  const request = new requestDB({
    title: req.body.title,
    department: req.body.department,
    semester: req.body.semester,
    course: req.body.course,
    requester: req.body.requester,
    resourceID: req.body.resourceID,
    owner: req.body.owner,
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
      console.log(err);
      res.status(400).send({
        status: false,
        message: "Request not added successfully",
      });
    });
});

//get only reqest made by the user
router.get("/user/:id", async (req, res) => {
  const user = req.params.id;
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
router.get("/owner/:id", async (req, res) => {
  const user = req.params.id;
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

//update the uuid of the request model
router.put("/uuid/:id", async (req, res) => {
  const id = req.params.id;
  const uuid = req.body.uuid;
  await requestDB
    .findByIdAndUpdate(id, { uuid: uuid })
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
