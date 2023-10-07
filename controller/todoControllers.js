const Todo = require("../models/TodoSchema")

const postTodo=async(req,res)=>{
    try {
         const  success= await Todo.create({todo:"this is the todo"})
    } catch (err ) {
        console.log(err);
    }
}
modul.exports={postTodo}

 