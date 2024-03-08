import express from "express";
import mongoose from "mongoose";

//Start the connection
const con = mongoose.connect('mongodb://localhost:27017/Todo')
const app = express();

//Import todo from Models
import toDo from "./models/todo.js";

app.get('/', (req, res) => {
    const todo = new toDo({  desc: "Description of this todo", isDone: false, days: Math.floor(Math.random() * 45 + 5* Math.random()) })
    todo.save() //Make an Entry in DB
    res.send('Hello World!')
})

app.get('/json', async (req, res) => { 
    let todo = await toDo.findOne({}) //Finds First One
    console.log(typeof(todo))  //Returns an Object
    res.json({title: todo.title, desc: todo.desc})
})

app.listen(3000,()=>{
    console.log("Server Listening on port 3000")
})