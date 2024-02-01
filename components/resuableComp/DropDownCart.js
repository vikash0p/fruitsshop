'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiShoppingBasketFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { MdDelete } from "react-icons/md";
import { IoAddOutline, } from "react-icons/io5";
import { IoIosRemove } from "react-icons/io";
import { remove } from '@/Redux/CartSlice';
import Link from 'next/link';

export const DropdownCart = () => {
    
    
    const dispatch = useDispatch();
    const item = useSelector((state) => state.cart);
    // console.log(item)

    const [isOpen, setIsOpen] = useState(false);


    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const DeleteHandler = (id) => {
        dispatch(remove(id))
    }

    const calculateTotalPrice = () => {
        const totalPrice = item.reduce((acc, product) => {
            const productPrice = parseFloat(product.price);
            return acc + (isNaN(productPrice) ? 0 : productPrice);
        }, 0);

        return totalPrice.toFixed(2); 
    };

    return (
            <div className="relative">
                <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className=" p-2  focus:outline-none flex gap-1 items-center" >
                    <div className="flex justify-center items-center gap-2 border border-primary px-4 py-2 rounded-full cursor-pointer">
                        <RiShoppingBasketFill className='text-primary ' size={20} />
                        <h5>{item.length} items-<span className='text-primary'>${calculateTotalPrice() } </span> </h5>
                    </div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-12 -right-24 mt-5 rounded-md bg-gray-200 p-4 w-96 h-96 z-50 overflow-x-hidden overflow-y-scroll "
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <ul className=''>
                                {
                                    item.map((value, indx, arr) => {
                                        return (
                                            <li className=" w-full flex justify-between items-center shadow-md  border-b border-b-black gap-y-2 " key={indx}>
                                                <Image
                                                    alt={value.name}
                                                    src={value.image}
                                                    width={500}
                                                    height={500}
                                                    className='w-20 h-20 object-contain'
                                                    priority
                                                />
                                                <h4>{value.price} </h4>
                                                <button type='button' onClick={() => DeleteHandler(value._id)} >
                                                    <MdDelete size={25} className='text-red-600 hover:text-red-800' />
                                                </button>
                                            </li>


                                        )
                                    })
                                }

                            </ul>
                            <div className='mt-3  mx-auto'>

                                <Link href='/cart' className='px-5 py-1 text-white   bg-green-700' >Cart</Link>
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
    );
};


