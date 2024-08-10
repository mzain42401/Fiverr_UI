import { NextResponse } from "next/server";
import user from "../../../../models/user";
import connectToDatabase from "../../../../lib/mongodb"

export async function  POST(res) {
    const {username,email}=await res.json()
    await connectToDatabase();
    await user.create({username,email});
    return NextResponse.json({message:"user Added"},{status:201})
    
}

export async function  GET() {
    await connectToDatabase();
    const myuser =await user.find()
    return NextResponse.json({myuser})
}