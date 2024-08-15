import mongoose from "mongoose";

// this file is used to make connection between server and database

import React from 'react'

export async function connect(){ 
 try {
    mongoose.connect(process.env.MONGO_URI!)
    const connection = mongoose.connection;
 } catch (error) {
    
 }

}
