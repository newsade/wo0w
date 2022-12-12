const express=require("express");
const app=express();
const dotenv=require('dotenv');

dotenv.config();

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});


app.listen(process.env.PORT ,console.log('Serve is ready'));


