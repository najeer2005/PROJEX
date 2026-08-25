import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    Employee: {
    type: String,
    required: true
  },
  EmployeeID: {
    type: String,
    required: true,
    unique: true
  },
  Department: {
    type: String,
    required: true
  },
  Role : {
    type: String,
    required: true
  },
  Status : {
    type: String,
    required: true,
    enum : ['Active', 'Available', 'On Leave']
  },
  Projects : {
    type: Number,
    default: 0
  },
  
}
, { timestamps: true });
const EMP = mongoose.model('Employee', employeeSchema);
export default EMP;