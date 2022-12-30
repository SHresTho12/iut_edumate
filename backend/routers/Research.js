//router for Researchs model
const express = require("express");
const router = express.Router();
const ResearchDB = require("../models/Research");


//router post request of Research model

router.post("/", async (req, res) => {
    const ResearchData = new ResearchDB({
        Researchname: req.body. Researchname,
        fireuid: req.body.fireuid,
        ResearchAuthor:req.body. ResearchAuthor,
        Researchmail: req.body.Researchmail,
        Researchdescription: req.body.Researchdescription,
        Researchlink: req.body.Researchlink,
        
        user: req.body.user,

        

    });
  
    await ResearchData
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
          message: "Research not added successfully",
        });
      });
  });
  
  module.exports = router;