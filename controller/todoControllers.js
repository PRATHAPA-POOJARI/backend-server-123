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

const updateTodo=async(req,res)=>{
    try {
         console.log(req.params.updatedtodo)
         const  success= await Todo.findByIdAndUpdate(req.params.id,{todo:req.params.updatedtodo})
         if(success){
             res.status(200).send({"message":"Todo updated..."})
         }
         res.status(400).send({"message":"Not  not updated..."})
    } catch (err ) {
        console.log(err);
    }
}

const deleteTodo=async(req,res)=>{
    try {
         
         const  success= await Todo.findByIdAndDelete(req.params.id)
         if(success){
             res.status(200).send({"message":"Todo Deleted..."})
         }
         res.status(400).send({"message":"Not  not Delete..."})
    } catch (err ) {
        console.log(err);
    }
}

const getTodo=async(req,res)=>{
    try {
         
         const  success= await Todo.find()
         if(success){
             res.status(200).send({ success,"message":"ok..."})
         }
         res.status(400).send({"message":"Not  not ok..."})
    } catch (err ) {
        console.log(err);
    }
}
module.exports={postTodo, updateTodo,deleteTodo, getTodo}

 