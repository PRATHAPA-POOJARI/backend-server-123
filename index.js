const express = require('express')
const app = express()

app.get("/home",(req,res)=>{
    res.send("this is home page")

});
app.listen(3000,()=>{
    
})