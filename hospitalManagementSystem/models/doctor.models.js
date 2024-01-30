import mongoose from 'mongoose'

const noOfHoursInHospitals =  mongoose.Schema({
    Hospitals :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Hospitals"
    },
    Hours:{
        type : Number ,
        required : true
    },
    checkIn :{
        type : String,
        required : true
    },
    checkOut :{
        type : String,
        required : true
    }
})

const doctorSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        salary : {
            type : Number ,
            required : true
        },
        qualification : {
            type : String,
            required : true
        },
        experienceInYears :{
            type : Number,
            default : 0
        }, 
        workInHospitals : [
            {
                type : mongoose.Schema.Types.ObjectId ,
                ref : "Hospital"
            }
        ] ,
        noOfHours : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : noOfHoursInHospitals
            }
        ]
    }
    ,{timestamp : true})

export const Doctor = mongoose.model("Doctor" , doctorSchema)