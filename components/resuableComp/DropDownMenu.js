'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdKeyboardArrowDown } from "react-icons/md";

export const DropdownMenu = ({title,name1,name2,name3,}) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className=" p-2  focus:outline-none flex gap-1 items-center" >
            {title}<MdKeyboardArrowDown /> 
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-12 -right-10 bg-gray-200 p-4 w-32 z-50"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ul className=''>
                            
                            <li className="cursor-pointer">{name1} </li>
                            <li className="cursor-pointer">{name2}</li>
                            <li className="cursor-pointer">{name3} </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


