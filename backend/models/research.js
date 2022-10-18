const mongoose = require("mongoose");
const researchSchema = new mongoose.Schema({
  
  paper_title: {
    type: String,
    
  },

  Author: {
    type: String,
    
  },

  Email: {
    type: String,
    
  },

  Abstract: {
    type: String,
    
  },
  
 
  
  user: Object,
});

module.exports = mongoose.model("research", researchSchema);