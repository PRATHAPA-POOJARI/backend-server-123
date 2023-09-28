const express = require('express')
const app = express()
const userRouter= require('./router/userRouter')
app.use(userRouter)
app.listen(9000, () => {
    console.log('Server is running on port 9000');
});
