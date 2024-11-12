const mongoose = require("mongoose");
const employee = new mongoose.Schema(
  {
    EmployeeId: {
      type: String,
      required: true,
      unique: true,
    },
    EmployeeName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Mobile: {
      type: String,
      required: true,
    },
    Designation: {
      type: String,
      required: true,
    },
    Gender: {
      type: String,
      Gender: true,
    },
    EmployCourseeeName: {
      type: String,
      required: true,
    },
    PhotoFileName: {
      type: String,
      required: true,
    },
  },
  { collection: "Employee" }
);
const employedb = mongoose.model("employedb", employee);
module.exports = employedb;
