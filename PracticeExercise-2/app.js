import express from "express";

const app = express();

app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.render('mypage', { foo: 'FOO' });
})

app.listen(3000,()=>{
    console.log("Server Listening on port 3000")
})