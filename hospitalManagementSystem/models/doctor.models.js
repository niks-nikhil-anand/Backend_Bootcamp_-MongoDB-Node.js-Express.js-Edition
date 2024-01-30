import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({},{timestamp : true})

export const Doctor = mongoose.model("Doctor" , doctorSchema)