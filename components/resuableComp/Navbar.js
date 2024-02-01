'use client'
import { icon, navlink } from '@/utils/data'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'


export default function Navbar() {
  const pathName= usePathname();
  return (
    <nav className='hidden md:block w-full bg-primary py-3 sticky top-0 left-0 right-0 z-20'>
      <div className='max-w-7xl m-auto flex justify-between items-center '>
      <div className="">
          {
            navlink.map((value, index, array) => {
              return (
                <Link className={`uppercase hover:text-black text-lg px-2 ${pathName == value.link ? "text-black   " : "text-white"}`} key={index} href={value.link} >{value.name} </Link>
              )
            })
          }
      </div>
      <div>
          <div className=" flex gap-3 justify-start items-center ">
            {
              icon.map((value, index, arr) => {
                return (
                  <Image
                    alt='cardImage'
                    key={index}
                    src={value.img}
                    className='w-10 h-10 object-contain'
                    width={1000}
                    height={1000}
                    priority
                  />
                )
              })
            }
          </div>
      </div>
      </div>
     
    </nav>
  )
}
