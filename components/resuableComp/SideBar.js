import { navlink } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FiMenu } from 'react-icons/fi'; // Example icon from react-icons
import { IoMdCloseCircle } from 'react-icons/io';
import { usePathname } from 'next/navigation'
export default function SideBar({ toggleSidebar }) {
  const pathname = usePathname()

  return (
    <div>
          <div className="flex justify-between items-center py-2 px-1">
              <div className="text-2xl uppercase">FruitOrganic</div>
              <button
                  className="text-white focus:outline-none"
                  onClick={toggleSidebar}
              >
                  <IoMdCloseCircle size={24} />
              </button>
          </div>

          <div className="flex flex-col gap-3 px-1 ">
            {
              navlink.map((link,index,arr)=>{
                return(
                  <Link key={index} className={`${pathname === link.link ? "text-purple-500 " :" "}`} href={link.link}>
                      {link.name}
                  </Link>
                )
              })
            }
          </div>
           
    </div>
  )
}
