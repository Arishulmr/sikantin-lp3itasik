import { MenuItem } from "../../models/MenuItems"
import mongoose from "mongoose"

export async function POST(req){
    mongoose.connect(process.env.MONGO_URL)
    const data = await req.json()
    const menuItemDoc = MenuItem.create(data)
    return Response.json(menuItemDoc)
}