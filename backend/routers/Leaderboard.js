const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const UserDB = require("../models/User");

//create a get request to get all the users sorting by points
router.get("/", async (req, res) => {
  try {
    const users = await UserDB.find().sort({ points: -1 });
    res.status(200).send({
      status: true,
      data: users,
    });
  } catch (error) {
    res.status(400).send({
      status: false,
      message: "Error while getting users",
    });
  }
});

module.exports = router;
