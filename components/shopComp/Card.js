'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { BsCartPlusFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { add } from '@/Redux/CartSlice';
export default function Card({ pro }) {
    const dispatch = useDispatch();

    const CartHandler = (pro) => {
        dispatch(add(pro))
    }

    return (


        <div key={pro._id} className="max-w-sm flex flex-col justify-center items-center gap-1 bg-gray-300 prounded-md px-2 md:px-0 ">
            <Image
                alt={pro.name}
                src={pro.image}
                className=' h-48 object-cover'
                width={500}
                height={500}
                priority
            />
            <div className='w-full py-7 min-h-40 text-center'>
                <div className="">
                    <h3 className='text-lg uppercase'>{pro.name.substring(0, 30)} </h3>
                    <p>{pro.description.substring(0, 80)} </p>
                </div>
                <div className="w-full flex justify-between items-center px-4 mt-4">
                    <Link href={`/shop/${pro._id}`} className='bg-orange-600 text-white px-3 py-1 rounded-sm flex items-center gap-1 ' >
                        <IoEyeOutline size={18} />
                        <span>view</span></Link>
                    <button type="button" className='px-3 py-1 bg-green-600 rounded-sm text-white flex items-center gap-1' onClick={() => CartHandler(pro)} >
                        <BsCartPlusFill />
                        <span>
                            Cart
                        </span>
                    </button>
                </div>
            </div>

        </div>

    )
}
