import mongoose from "mongoose";


const projectsSchema = new mongoose.Schema(
  {
    name: {
        type : String,
        required : true,
        trim : true
    },
    manager :{
        type : String,
        required : true,
        trim : true
    },
    client :{ 
          type : String,
          required : true,
    },
    status :{
        type : String,
        required : true,
        enum : ["Active", "Planning", "Completed","In-Progress"]
    },
    priority:{
        type : String,
        enum :["High","Low","Medium"],
        required : true
    },
    progress :{
        type : Number,
        required : true,
        min : 0,
        max : 100   
    }
},{
    timestamps: true, // Adds createdAt and updatedAt
  }
);
const projects = mongoose.model("projects", projectsSchema);
export default projects;