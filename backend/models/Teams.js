import mongoose from "mongoose";

const teamsSchema = new mongoose.Schema(
  {
    "Team": {
      type: String,
      required: true
    },
    "TeamLead": {
      type: String,
      required: true
    },
    "Department": {
      type: String,
      required: true
    }, 
    "Members": {
      type: Number,
      required: true
    },
    "Projects": {
      type: Number,
      required: true
    },
    "Status": {
      type: String,
      required: true,
      enum : ["Active", "Planning", "Maintenance", "In-Progress"]
    },
  },
    {
      timestamps:true,
    }
  

);

const teams = mongoose.model("Team", teamsSchema);
export default teams;