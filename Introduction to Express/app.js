import express from "express"

let app = express()
app.get('/', (req,res) =>{
    res.send('Hello World from Express.js!')
})

//Parameters
//Input URL http://localhost:3000/Qasim?server=India&mode=dark
app.get('/:slug',(req,res)=>{
    console.log(req.params) //{ slug: 'Qasim' }
    console.log(req.query) //{ server: 'India', mode: 'dark' }
    res.send(`You are on the ${req.params.slug} page with ${req.query} queries.`)
})

app.listen(3000,()=>{
    console.log('Server Listening on port 3000')
})