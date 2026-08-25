import mongoose from "mongoose";
const tasksSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
    },

    Project: {
      type: String,
      required: true,
      unique: true,
    },

    AssignedTo: {
      type: String,
      required: true,
    },

    Priority: {
      type: String,
      required: true,
    },

    Status: {
      type: String,
      enum: ["In Progress","Completed","Pending"],
      default: "Pending",
    },

    DueDate: {
      type: Date,
      required: true,
    }
},
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

const Task = mongoose.model("Task", tasksSchema);
export default Task;
