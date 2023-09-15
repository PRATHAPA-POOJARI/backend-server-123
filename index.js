const express = require('express')
const app = express()

app.get("/home",(req,res)=>{
    res.send("this is home pamnne")

});
app.listen(9000
    , () => {
    console.log('Server is running on port 9000');
});
