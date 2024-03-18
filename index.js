import express from "express";

const app = express();
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("API is healthy!");
})

app.post("/bfhl",(req,res)=>{

    const reqBody = req.body;
    if(!reqBody.data){
        res.json({
            "is_success": false,
            "user_id": "john_doe_17091999", "email" : "john@xyz.com",
            "roll_number":"ABCD123",
    })
    }

    const oddNumbers = [];
    const evenNumber = [];
    const alphabets = [];
    reqBody.data.forEach((ele)=>{
        const i = parseInt(ele);
        if(isNaN(i)){
            let c = ele.toUpperCase();
            alphabets.push(c);
        }
        else if(i >= 2 && i % 2 == 0){
                evenNumber.push(i);
            }
        else{
                evenNumber.push(i);
            }
    
    })

    // res.send(reqBody.data);

    res.json({
            "is_success": true,
            "user_id": "john_doe_17091999", "email" : "john@xyz.com",
            "roll_number":"ABCD123",
            "odd_numbers": oddNumbers,
            "even_numbers": evenNumber,
            "alphabets": alphabets
    })
    
})


app.listen(8080,(req,res)=>{
    console.log("App is started");
})