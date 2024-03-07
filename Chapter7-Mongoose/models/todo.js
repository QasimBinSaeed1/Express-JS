import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
    title: { type: String, required: true, default: "Study Time" },
    desc: String,
    isDone: Boolean,
    days: Number
})
let toDo = mongoose.model('Todo', toDoSchema)
export default toDo