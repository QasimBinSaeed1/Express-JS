import express from "express";
const app = express();

// ECMAScript modules (ESM) with the import syntax, where __dirname is not directly available. That's why in the first code snippet, you needed to use import.meta.url and additional functions from the path and url modules to define __dirname.
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//__dirname is automatically available within CommonJS

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('Hello World from Express.js!');
});

//Post Request Using mypage.html in public folder
//URL would be: http://localhost:3000/mypage.html
app.post('/', (req, res) => {
    console.log("Hey its a post request");
    res.send("Post Request");
});

// THis is known as Chaining of request
app.get('/', (req, res) => {
    res.send('Hello World from Express.js!');
}).post('/', (req, res) => {
    console.log("Hey its a post request");
    res.send("Post Request");
}).post('/', (req, res) => {
    console.log("Hey its a post request");
    res.send("Post Request");
})

//Serving HTML files
//Always Specifiy Root
app.get('/index',(req,res)=>{
    console.log("Its a index.html file")
    res.sendFile('/templates/index.html', {root: __dirname})
})

//Route
import blog from './routes/blog.js';
app.use('/blog',blog)


app.listen(3000, () => {
    console.log('Server Listening on port 3000');
});
