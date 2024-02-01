'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import SideBar from './SideBar';
import { DropdownCart } from './DropDownCart';

export default function MiddleBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='max-w-7xl mx-auto py-4  md:flex items-center'>
            <div className=" w-full  flex justify-center md:justify-start">
                <Image
                    alt='images '
                    src={'https://demo.7uptheme.net/html/fruitshop/images/home/home2/logo.png'}
                    className='w-56 h-14 object-contain'
                    width={500}
                    height={500}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                    priority

                />
            </div>
            <div className=" w-full flex justify-between items-center  py-2 px-3  ">
                <div className=" border-gray-200 border-2 flex items-center py-1 rounded-full  hover:border hover:border-primary ">
                    <input type="search" name="" id="" className=' rounded-full px-3 outline-none  ' placeholder='Search.' />
                    <button type="button" className='px-2'><IoSearchOutline size={20} className='text-primary font-extrabold ' /> </button>
                </div>
                <div className=' md:hidden'>
                    <button className=" focus:outline-none" onClick={toggleSidebar}  >
                        <IoMdMenu size={30} className='text-primary font-extrabold hover:text-orange-500 transition-colors duration-75' />
                    </button>
                </div>
                <div className=' hidden md:block'>
                    <DropdownCart />
                </div>
                
            </div>
            <aside
                className={`bg-gray-800 text-white w-72 fixed top-0 right-0 bottom-0 h-screen z-50 ${isSidebarOpen ? '-translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out`} >
                <SideBar toggleSidebar={toggleSidebar} />

            </aside>
        </div>
    )
}
