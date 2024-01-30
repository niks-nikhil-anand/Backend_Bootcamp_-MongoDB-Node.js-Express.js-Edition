import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    } ,
    address :{
        type : String ,
        required : true
    },
    age :{
        type : Number,
        required : true
    },
    bloodGroup:{
        type : String ,
        required : true,
        enum : ["A", "B", "AB" , "O"]
    },
    gender: {
        type : String ,
        enum : ["M" , "F" , "O"],
        required : true
    },
    admittedIn :{
        type : mongoose.Schema.Types.ObjectId ,
        ref : Hospital
    }
} ,{timestamp :true})

export const Patient = mongoose.model("Patient" , patientSchema)




