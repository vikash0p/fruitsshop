import Product from "@/mongoose/Schema/ProductSchema";
import dbConnection from "@/mongoose/dbConnection";
import { NextResponse } from "next/server";



export async function GET(request) {
    try {
        await dbConnection();
        const product= await Product.find();
        return NextResponse.json({product});
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message : 'Internal server error.',
            success:false
        },{
            status:500
        })
    }
 }
export async function POST(request) {

    try {
        const {name,description,image,price,category,stock,availability}= await request.json();
        await dbConnection();

        const product=await Product.create({
            name,
            description,
            image,
            price,
            category,
            stock,
            availability
        });

        return NextResponse.json({
            message:'product created successfully !',
            success:true,
        },{
            status:200
        })  
    } catch (error) {

        console.error(error);

        return NextResponse.json({
            message: 'product created unsuccessfully !',
            success: false,
        }, {
            status: 500
        })  
    }

 }