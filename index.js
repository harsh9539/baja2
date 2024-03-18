import express from "express";

const app = express();



app.get("/",(req,res)=>{
    res.send("API is healthy!");
})

app.post("/bfhl",(req,res)=>{

    const reqBody = req.body;


    res.json({
            "is_success": true,
            "user_id": "john_doe_17091999", "email" : "john@xyz.com",
            "roll_number":"ABCD123",
            "odd_numbers": ["1"],
            "even_numbers": ["334","4"],
            "alphabets": ["A","R"]
    })
    
})


app.listen(8080,(req,res)=>{
    console.log("App is started");
})