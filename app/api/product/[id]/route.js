import Product from "@/mongoose/Schema/ProductSchema";
import dbConnection from "@/mongoose/dbConnection";
import { NextResponse } from "next/server";


export async function GET(request ,{params}) {

    const{id}=params;
    try {
        await dbConnection();
        const product= await Product.findOne({_id:id});
        return NextResponse.json({product});

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:'find some occured fetch one product.',
            success:false
        },{
            status:500
        })
    }

 }