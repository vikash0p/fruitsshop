'use client'
import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext();

export default function CartCount({ children }) {
    const [count, setCount] = useState(1);

    const AddCount =()=>{
        setCount((prev)=>prev + 1)
    }
    const SubtractCount = () => {
        setCount((prev) => prev - 1)
    }

    return (
        <CartContext.Provider value={
            {
                count,
                AddCount,
                SubtractCount,   
            }
        } >
            {children}
        </CartContext.Provider>

    )
}

export const useCartContext = () => {
    return useContext(CartContext);
};

