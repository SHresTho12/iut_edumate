//project model moongoose model
const mongoose = require("mongoose");
const ProjectSchema = new mongoose.Schema({
  
    projectname: String,
    fireuid: String,
    projectdescription: String,
    projectlink: String,
    projectimage: String,
    created_at: {
        type: Date,
        default: Date.now(),
    },
    //array of stringd
    interested: {
        type: Array,
        default: [],
    },
    user: Object,
});
module.exports = mongoose.model("Projects", ProjectSchema);

