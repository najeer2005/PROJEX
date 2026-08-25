import mongoose from "mongoose";


const Schema = new mongoose.Schema(
    {
        "Bug": {
            "type": String,
            "required": true
        },
        "Project": {
            "type": String,
            "required": true
        },
        "AssignedTo": {
            "type": String,
            "required": true
        },
        "Priority": {
            "type": String,
            "required": true,
            "enum" : ["High", "Medium", "Low"]
        },
        "Status": {
            "type": String,
            "required" : true,
            "enum": ["Open", "In Progress", "Resolved"]
        },
        "ReportedBy": {
            "type": String,
            "required": true
        },
    },
    {
        timestamps: true
    }
);
const BugReports = mongoose.model("Bug", Schema);
export default BugReports;
