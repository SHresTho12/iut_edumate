

const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const UserDB = require('../models/User');





router.post('/', async (req, res) => {
    const userData = new UserDB({
      fireuid: req.body.fireuid,
      name: req.body.name,
      email: req.body.email,
      studentid: req.body.studentid,
      department: req.body.department,
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
  




  module.exports = router;