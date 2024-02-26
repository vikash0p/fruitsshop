'use client'

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux"
import { MdDelete } from "react-icons/md";
import { IoAddOutline, } from "react-icons/io5";
import { IoIosRemove } from "react-icons/io";
import { remove } from "@/Redux/CartSlice";
import { useState } from "react";

export default function Cart() {

  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart);
  const [coupon, setCoupon] = useState('');
  const handleNameChange = (e) => {
    setCoupon(e.target.value);
  };

  const DeleteHandler = (id) => {
    dispatch(remove(id))
  }
  const calculateTotalPrice = () => {
    const totalPrice = product.reduce((acc, product) => {
      const productPrice = parseFloat(product.price);
      return acc + (isNaN(productPrice) ? 0 : productPrice );
    }, 0);

    return totalPrice.toFixed(2);
  };

  return (
    <div className='w-full min-h-screen bg-slate-950 text-white flex flex-col lg:flex-row '>
      <div className=" lg:basis-3/4">
        <ul className=''>
          {
            product.map((value, indx, arr) => {
              return (
                <li className=" w-full flex justify-between items-center shadow-md  border-b border-b-black gap-y-2 px-10 py-5 " key={indx}>
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
      </div>
      <div className=" lg:basis-1/4 h-screen bg-slate-700 shadow-inner pt-4  ">
        <div className="px-3">
          <div >
            <label htmlFor="" className="">Enter coupon code</label>
            <div className="flex items-center bg-slate-950 h-8  ">
              <input
                type="text"
                className="w-full h-full    px-4 text-black focus:outline-none "
                placeholder="Enter coupon code."
                value={coupon}
                onChange={handleNameChange}
              />
              <button type="button" className="px-3  bg-slate-950">Submit</button>
            </div>

          </div>

        </div>
        <div className="flex flex-col gap-4 py-4 ">
          <div className="flex justify-between items-center px-3 ">
            <p>Shoping cart</p>
            <p>{calculateTotalPrice()  }</p>
          </div>
          <div className="flex justify-between items-center px-3">
            <p>Discount</p>
            <p>$00</p>
          </div>
          <div className="flex justify-between items-center px-3">
            <p>Discount</p>
            <p>$00</p>
          </div>
          <div className="flex justify-between items-center text-xl w-full bg-slate-950 px-3 py-2  ">
            <p className="">Total Price</p>
            <p className="">${calculateTotalPrice() } </p>
          </div>
        </div>
      </div>

    </div>
  )
}
