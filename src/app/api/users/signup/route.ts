import { connect } from "@/dbConfig/dbConfig"; // Ensure this connects to your DB properly
import User from "@/models/userModel"; // Verify this model is correctly defined
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"; // Ensure bcryptjs is installed and imported correctly

// Establish database connection
connect().catch(err => {
    console.error("Database connection error:", err);
    throw new Error("Failed to connect to the database");
});

// Handle POST requests
export async function POST(request: NextRequest) {
    try {
        // Parse the incoming request body
        const reqBody = await request.json();
        const { username,email, password } = reqBody;

        
        // Check if user already exists
        const user = await User.findOne({email});
        if (user) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        // Hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create and save new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            newUser: savedUser,
        });

    } catch (error: any) {
        console.log("Error in POST request:", error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
