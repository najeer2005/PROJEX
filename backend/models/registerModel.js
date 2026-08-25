import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    employeeID :{
        type: String,
        required: true,
        unique: true
    },
    officialEmail:{
     type :String,
     required : true,
     unique : true
    },
    phoneNumber :{
        type : String,
        required : true,
        unique : true,
        min : 10,
        max :10
    },
    password : {
        type : String,
        required : true,
        min : 10
    }
},
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

const user = mongoose.model("User", userSchema);
export default user;
