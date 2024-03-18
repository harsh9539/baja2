import express from "express";

const app = express();



app.get("/",(req,res)=>{
    res.send("API is healthy!");
})

app.post("/",(req,res)=>{


    
})


app.listen(8080,(req,res)=>{
    console.log("App is started");
})