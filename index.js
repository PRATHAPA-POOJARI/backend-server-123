const express = require('express')
const app = express()
const userRouter= require('./router/userRouter')
const database = require('./database'); // Corrected file name here
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
database()
app.use(userRouter)
app.listen(9000, () => {
    console.log('Server is running on port 9000');
});
