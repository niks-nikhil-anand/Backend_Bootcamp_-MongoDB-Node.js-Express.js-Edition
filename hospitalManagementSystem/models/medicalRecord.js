import mongoose, { mongo } from "mongoose";

const medicalRecordSchema = new mongoose.Schema({},{timestamp :true})

export const MedicalRecord = mongoose.model("MedicalRecord" , medicalRecordSchema)