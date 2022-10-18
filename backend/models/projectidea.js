const mongoose = require("mongoose");
const ProjectSchema = new mongoose.Schema({
  
  project_name: {
    type: String,
    
  },

  Subject: {
    type: String,
    
  },

  Email: {
    type: String,
    
  },

  project_idea: {
    type: String,
    
  },
  
 
  
  user: Object,
});

module.exports = mongoose.model("projectidea", ProjectSchema);