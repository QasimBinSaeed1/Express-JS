import express from "express";
import mongoose from "mongoose";
import employee from "./models/employee.js";

let conn = mongoose.connect("mongodb://localhost:27017/Company");
const app = express();

const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1));
    return arr[rno];
};

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('mypage', { foo: 'FOO' });
});

app.get('/generate', async (req, res) => {  // Corrected order of parameters
    // Clear the collection Employee
    await employee.deleteMany({});
    // Generate random data

    let randomNames = ['Qasim', "Osama", "Saeed", "Ali"];
    let randomRole = ["Software Developer", "Data Analyst", "ML Engineer", "Ios Developer"];
    let randomCities = ["Islamabad", "Karachi", "Lahore", "Multan"];
    for (let index = 0; index < 10; index++) {
        let e = await employee.create({
            Name: getRandom(randomNames),
            Salary: Math.floor(Math.random() * 22000),
            Role: getRandom(randomRole),
            City: getRandom(randomCities),
        });
        console.log(e);
    }
});

app.listen(3000, () => {
    console.log("Server Listening on port 3000");
});
