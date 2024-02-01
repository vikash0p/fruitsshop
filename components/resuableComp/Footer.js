'use client'
import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

import Image from 'next/image';
import { card, icon } from '@/utils/data';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='backgroun_image w-full opacity-90 text-white '>
      <div className="max-w-7xl mx-auto pt-12">

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center lg:text-start ">
          <div className="">
            <div className="flex flex-col  gap-5 border-b border-b-white pb-4">
              <h2 className='text-primary font-bold '>About Fruit., cop</h2>
              <p className='text-sm'>Excellence in quality and service is the hallmark of all operations performed at Fruit. Firmly standing by its business values, Fruit is active in manufacture and sale of textile</p>
            </div>
            <div className=" pt-6">
              <h3 className='text-primary text-xl font-bold py-3' >Online Payments by</h3>
              <div className=" flex gap-3 justify-center lg:justify-start  items-center">
                {
                  card.map((value, index, arr) => {
                    return (
                      <Image
                        alt='cardImage'
                        key={index}
                        src={value.img}
                        className='w-11 h-6 object-contain'
                        width={50}
                        height={26}
                        priority
                      />
                    )
                  })
                }
              </div>
            </div>

          </div>
          <div className="">
            <h2 className='text-primary font-bold mb-5'>Location Store</h2>

            <ul className="flex flex-col  gap-4 text-sm">
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <IoLocation size={30} className='text-primary ' />
                <p className='text-wrap max-w-xs'>Gul Ahmed Textile Mills Limited Plot No.82, Main National Highway, Landhi</p>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <IoMdCall size={25} className='text-primary' />
                <p>+72-43-000 485 485 Ext-6595.</p>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <MdEmail className='text-primary' size={20} />
                <p className="">your.email@sitename.com</p>
              </li>
            </ul>
          </div>
          <div className="">

            <div className="flex flex-col gap-6 border-b  border-b-white pb-4 ">
              <h2 className='text-primary font-bold'>Subscribe To Our Newsletter</h2>
              <p className='text-sm'>Stay tune for updates</p>
              <div className=" mx-10 lg:mx-0  h-10 rounded-full flex  bg-white items-center px-3 relative ">
                <MdEmail className='text-primary' />
                <input type="search" name="" className='  outline-none text-black px-2 ' id=""  placeholder='search' />
                <button type="button" className='px-4 bg-primary  h-full rounded-full absolute top-0 right-0 bottom-0'>submit</button>
              </div>
            </div>
            <div className=" pt-6">
              <h3 className='text-primary text-xl font-bold py-3' >Connect With Us</h3>
              <div className=" flex gap-3 justify-center py-5 xl:py-0 lg:justify-start items-center">
                {
                  icon.map((value, index, arr) => {
                    return (
                      <Image
                        alt='cardImage'
                        key={index}
                        src={value.img}
                        className='w-10 h-10 object-contain'
                        width={500}
                        height={500}
                        priority
                      />
                    )
                  })
                }
              </div>
            </div>

          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="flex-1 w-full h-[.5px] bg-white"></div>
          <div className="flex-1 flex items-center justify-center">
            <Image
              src={"/images/logo-footer.png"}
              alt='footerImage'
              className='w-32 h-32 object-contain'
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="flex-1 w-full h-[.5px] bg-white"></div>
        </div>
        <div className="w-full mx-auto text-center  py-8 text-sm">
          <h5><p>&copy; {currentYear} Your Company. All rights reserved.</p> </h5>
          <h3>created by <span className='text-primary'> Vikash pandit </span></h3>
        </div>
      </div>
    </footer>
  )
}
