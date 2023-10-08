const Todo = require("../models/TodoSchema")

const postTodo=async(req,res)=>{
    try {
         console.log(req.params.todo)
         const  success= await Todo.create({todo:req.params.todo})
         if(success){
             res.status(200).send({"message":"Todo created..."})
         }
         res.status(400).send({"message":"Not  created..."})
    } catch (err ) {
        console.log(err);
    }
}
module.exports={postTodo}

 