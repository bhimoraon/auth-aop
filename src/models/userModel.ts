import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requird: [true, "Please provide the username "],
        unique: true
    },
    email: {
        type: String,
        requird: [true, "Please provide the Email "],
        unique: true
    },
    password: {
        type: String,
        requird: [true, "Please provide the Password "],
    },
    isVerified: {
        type: Boolean, 
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date, 

});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;