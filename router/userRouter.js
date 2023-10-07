const express= require('express');
const{postTodo}=require('../controller/todoControllers');
const router= express.Router();


// const getUser=require("../controller/useConroller")
// router.get("/home",getUser) 

router.post('/postTodo/:todo',postTodo)

module.exports=router 