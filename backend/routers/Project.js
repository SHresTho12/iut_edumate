//router for projects model
const express = require("express");
const router = express.Router();
const projectDB = require("../models/Projects");


//router post request of project model

router.post("/", async (req, res) => {
    const projectData = new projectDB({
        projectname: req.body. projectname,
        fireuid: req.body.fireuid,
        projectdescription: req.body.projectdescription,
        projectlink: req.body.projectlink,
        projectimage: req.body.projectimage,
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
          message: "Project not added successfully",
        });
      });
  });
  
  module.exports = router;