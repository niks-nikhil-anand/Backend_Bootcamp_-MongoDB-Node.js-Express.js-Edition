import mongoose from 'mongoose'

const todoSchema = mongoose.Schema(
    {
        content : {
            type : String ,
            required : true
        } ,
        complete :{
            type : Boolean ,
            default : false
        },
        createdBy :{
            type: mongoose.Schema.Types.ObjectId,
            ref : User
        }, 
        subTodos: [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : SubTodo
            }
        ]
},
{timestamps : true})


export const todo = mongoose.model("todo" , todoSchema) 