import express from "express";
import blog from "./routes/blog.js"

let app = express();
//Defualt Middleware
app.use(express.static("public"))

//Customize Middleware
app.use((req,res,next)=>{
    console.log('Middleware 1 run.')
    next()
})
app.use((req,res,next)=>{
    console.log('Middleware 2 run.')
    next()
})
//Routers as middlewares
app.use('/blog',blog)


app.get('/', (req, res) => {
    res.send('Hello World from Qasim!')
})

app.listen(3000, () => {
    console.log('Server Listening on port 3000')
})