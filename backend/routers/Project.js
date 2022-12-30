//router for projects model
const express = require("express");
const router = express.Router();
const projectDB = require("../models/Projects");

//router post request of project model

router.post("/", async (req, res) => {
  const projectData = new projectDB({
    projectname: req.body.projectname,
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
router.put("/interested/:id", async (req, res) => {
  const id = req.params.id;
  const user = req.body.user.uid;
  const project = await projectDB.findById(id);
  let interested = project.interested;
  if (interested.includes(user)) {
    res.status(400).send({
      status: false,
      message: "You have already added this note to your interested list",
    });
  } else {
    interested.push(user);
    await projectDB.findByIdAndUpdate(id, {
      interested: interested,
    });
    res.status(200).send({
      status: true,
      message: "Project is added to your interested list",
    });
  }
});

//get individual note by param id nad comments related to that note

//   router.get("/", async (req, res) => {
//     const error = {
//       message: "Error in retrieving projects",
//       error: "Bad request",
//     };

// projectDB
// .aggregate([
//   {
//     $lookup: {
//       from: "interested",
//       let: { project_id: "$_id" },
//       pipeline: [
//         {
//           $match: {
//             $expr: {
//               $eq: ["$project_id", "$$project_id"],
//             },
//           },
//         },
//         {
//           $project: {
//             _id: 1,
//             // user_id: 1,

//             created_at: 1,
//             // question_id: 1,
//           },
//         },
//       ],
//       as: "interested",
//     },
//   },
//   // {
//   //   $unwind: {
//   //     path: "$answerDetails",
//   //     preserveNullAndEmptyArrays: true,
//   //   },
//   // },
//   {
//     $project: {
//       __v: 0,
//       // _id: "$_id",
//       // answerDetails: { $first: "$answerDetails" },
//     },
//   },
// ])
// .exec()
// .then((projectDetails) => {
//   res.status(200).send(projectDetails);
// })
// .catch((e) => {
//   console.log("Error: ", e);
//   res.status(400).send(error);
// });
// });

// //detailed note info
// router.get("/:id", async (req, res) => {
// try {
//   projectDB
//   .aggregate([
//     {
//       $match: { _id: mongoose.Types.ObjectId(req.params.id) },
//     },
//     {
//       $lookup: {
//         from: "interested",
//         let: { project_id: "$_id" },
//         pipeline: [
//           {
//             $match: {
//               $expr: {
//                 $eq: ["$project_id", "$$project_id"],
//               },
//             },
//           },
//           {
//             $project: {
//               _id: 1,
//               user: 1,

//               project_id: 1,
//               created_at: 1,
//             },
//           },
//         ],
//         as: "interested",
//       },
//     },
//     {
//       $project: {
//         __v: 0,
//       },
//     },
//   ])
//   .exec()
//   .then((projectDetails) => {
//     res.status(200).send(projectDetails);
//   })
//   .catch((e) => {
//     console.log("Error: ", e);
//     res.status(400).send(e);
//   });
// } catch (err) {
// console.log(err);
// res.status(400).send({
//   message: "Note not found",
// });
// }
// });

//get all projects by get request
router.get("/", async (req, res) => {
  try {
    const projects = await projectDB.find({});
    res.send(projects);
  } catch (error) {
    res.status(500).send(error);
  }
});

//get individual project by param id
router.get("/:id", async (req, res) => {
  try {
    const project = await projectDB.findById({ fireuid: req.params.id });
    res.send(project);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;


