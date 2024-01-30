import mongoose from 'mongoose'
import { Product } from './product.models'

const orderItemSchema = new mongoose.Schema({
    productId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product"
    } ,
    quantity : {
        type : Number ,
        required : true
    }
})

const orderSchema = new mongoose.Schema(
    {
        orderPrice:{
            type: String ,
            required: true
        },
        customer:{
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
        },
        orderItems :{
            types : [orderItemSchema]
        },
        address :{
            type : String ,
            required : true
        },
        pinCode:{
            type : Number ,
            required : true
        } ,
        status :{
            type : String,
            enum : ["PENDING" , "CANCELLED" , "DELIVERED"],
            default : "PENDING"
        }
    }
    ,{timestamp})

export const Order = mongoose.model.apply("Order" , orderSchema)