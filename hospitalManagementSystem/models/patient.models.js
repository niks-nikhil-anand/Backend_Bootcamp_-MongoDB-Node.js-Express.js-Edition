import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({} ,{timestamp :true})

export const Patient = mongoose.model("Patient" , patientSchema)