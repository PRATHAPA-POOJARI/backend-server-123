const express= require('express');
const{postTodo, updateTodo, getTodo}=require('../controller/todoControllers');
const router= express.Router();


// const getUser=require("../controller/useConroller")
// router.get("/home",getUser) 

router.post('/posttodo/:todo',postTodo)
router.put('/updatetodo/:id/:updatedtodo',updateTodo)
// router.delete('/tododeleted/:id', deleteTodo)
router.get('/gettodo',getTodo)

module.exports=router 