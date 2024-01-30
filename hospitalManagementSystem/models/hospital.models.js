import mongoose from "mongoose";

const hospitalSchema = new  mongoose.Schema(
    {
        name : {
            type : String ,
            required : true
        } ,
        addressLine1 : {
            type : String ,
            required : true
        },
        addressLine2 : {
            type : String ,
        },
        pinCode : {
            type : Number ,
            required : true
        },
        city : {
            type : String ,
            required : true
        },
        specialization : [
            {
                type : String
            }
        ]
   }
 , {timestamp : true})

export const Hospital = mongoose.model("Hospital" , hospitalSchema)
