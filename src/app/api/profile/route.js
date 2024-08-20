import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import {User} from "../../models/User.js";

export async function PUT(req){
    mongoose.connect(process.env.MONGO_URL);
    const data = await req.json();
    const session = await getServerSession(authOptions);
    console.log(session, data)
    const email = session.user.email;
    
    const update = {};
    if ('name' in data) {
        update.name = data.name;
    }
    if ( 'image' in data) {
        update.image = data.image;
    }

    if (Object.keys(update).length > 0) {

await User.updateOne({email}, update);
    }
    
    return Response.json(true);
}

export async function GET(){
    mongoose.connect(process.env.MONGO_URL);
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (!email) {
        return Response.json({})
    }
    return Response.json(
        await User.findOne({email})
    )
}