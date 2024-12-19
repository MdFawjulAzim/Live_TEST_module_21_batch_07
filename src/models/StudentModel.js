const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    rollNumber: { type: String },
    phoneNumber: { type: String },
    password: { type: String }
  },
  { timestamps: true, versionKey: false }
);

const studentModel= mongoose.model("students", DataSchema);
module.exports = studentModel;