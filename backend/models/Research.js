//Research model moongoose model
const mongoose = require("mongoose");
const ResearchSchema = new mongoose.Schema({
  
    Researchname: String,
    fireuid: String,
    ResearchAuthor: String,
    Researchmail: String,
    ResearchAbsrtract: String,
    Researchlink: String,
    
    
    created_at: {
        type: Date,
        default: Date.now(),
    },
    //array of stringd
 
    user: Object,
});
module.exports = mongoose.model("Research", ResearchSchema);

