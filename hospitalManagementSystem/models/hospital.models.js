import mongoose from "mongoose";

const hospitalSchema = new  mongoose.Schema({}, {timestamp : true})

export const Hospital = mongoose.model("Hospital" , hospitalSchema)
