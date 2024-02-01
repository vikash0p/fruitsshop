'use client'
import React from 'react'
import { DropdownMenu } from './DropDownMenu'
import { country } from '@/utils/data'
import Link from 'next/link'

export default function Header() {

    
  return (
      <header className='w-full bg-gray-100 px-3 lg:px-0  hidden md:block '>
          <div className="max-w-7xl mx-auto h-10  flex justify-between items-center ">
              <div className="md:flex gap-2 items-center hidden ">
                  <DropdownMenu title="Language" name1='Hindi' name2='Punjabi' name3='Bhojpuri' />
                  <div className='w-[.8px] h-4 opacity-60 bg-black' ></div>
                  <DropdownMenu title="Currency" name1='Rupees' name2='US Dollor' name3='Dinnar'  />
              </div>
              <div className="flex gap-3 items-center justify-center w-full md:justify-end">
                  <Link href='/signup' className="hover:text-orange-600 hover:-translate-y-1 ">SignUp</Link>

                  <div className='w-[.8px] h-4 opacity-60 bg-black' ></div>

                  <Link href='/login' className="hover:text-orange-600 hover:-translate-y-1 transition-all duration-100 ">Login</Link>
                  {/* <div className='w-[.8px] h-4 opacity-60 bg-black' ></div> */}

              </div>
        </div>
      
    </header>
  )
}
