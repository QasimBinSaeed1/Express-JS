import mongoose, { mongo } from "mongoose";

let emplTemplate= new mongoose.Schema({
    Name: String,
    Role: String,
    Salary: Number,
    City: String
})

const employee = mongoose.model('Employee',emplTemplate)
export default employee