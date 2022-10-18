const express = require("express");
const router = express.Router();
const projectDB = require("../models/projectidea");

router.post("/", async (req, res) => {
  const projectData = new projectDB({
    project_name: req.body.project_name,
    Subject: req.body.Subject,
    Email: req.body.Email,
    project_idea:req.body.project_idea,
    user: req.body.user,
  });

  await projectData
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
        message: "project not added successfully",
      });
    });
});

module.exports = router;