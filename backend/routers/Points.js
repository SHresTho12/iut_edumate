const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const UserDB = require("../models/User");

router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  //find a user by fireuid
  const user = await UserDB.findOne({ fireuid: id });
  //get the points of the user
  let points = user.points;
  //increament the points
  points = points + 1;
  try {
    //update the points
    const updatedUser = await UserDB.findOneAndUpdate(
      { fireuid: id }, //filter
      { points: points }, //update
      { new: true } //options
    );
    res.status(200).send({
      status: true,
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).send({
      status: false,
      message: "Error while updating points",
    });
  }
});

module.exports = router;
