// This server create by me
const express= require("express");
const app= express();
const users=require("./MOCK_DATA.json");
const port=8080;

app.get("/users",(req,res)=>{
    return res.json(users);
});

app.listen(port,()=>{
    console.log(`Server start at port ${port}`);
    
});

