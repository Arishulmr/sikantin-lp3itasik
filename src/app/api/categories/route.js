import mongoose from "mongoose"
import {Category} from "../../models/Category";

export async function POST(req){
    mongoose.connect(process.env.MONGO_URL);
    const {name} = await req.json();
    const categoryDoc = await Category.create({name})
    return Response.json(categoryDoc);
}

export async function PUT(req){
    mongoose.connect(process.env.MONGO_URL);
    const {_id, name} = await req.json();
    await Category.updateOne({_id}, {name});
    return Response.json(true);
}

// export async function PUT(req){
//     mongoose.connect(process.env.MONGO_URL);
//     const data = await req.json();
//     const session = await getServerSession(authOptions);
//     console.log(session, data)
//     const email = session.user.email;
    
//     const update = {};
//     if ('name' in data) {
//         update.name = data.name;
//     }
//     if ( 'image' in data) {
//         update.image = data.image;
//     }

//     if (Object.keys(update).length > 0) {

// await User.updateOne({email}, update);
//     }
    
//     return Response.json(true);
// }

export async function GET(){
    mongoose.connect(process.env.MONGO_URL);
    return Response.json(
        await Category.find()
    );
}