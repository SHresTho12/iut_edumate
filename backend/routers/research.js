const express = require("express");
const router = express.Router();
const researchDB = require("../models/research");

router.post("/", async (req, res) => {
  const researchData = new esearchDB({
    paper_title: req.body.paper_title,
    Author: req.body.Author,
    Email: req.body.Email,
    Abstract:req.body.Abstract,
    user: req.body.user,
  });

  await researchData
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
        message: "research not added successfully",
      });
    });
});

module.exports = router;