import mongoose from "mongoose";
const Schema = new mongoose.Schema(
    {
        "ReportName": {
            type: String,
            required: true
        },
        "Category": {
            type: String,
            required: true
        },
        "GeneratedBy": {
            type: String,
            required: true
        },
        "Date" : {
            type: Date,
            required: true
        },
        "Status": {
            type: String,
            required: true,
            enum : ["Generated", "Pending"]
        }
},{timestamps: true}
);
const Reports = mongoose.model("Reports", Schema);
export default Reports;