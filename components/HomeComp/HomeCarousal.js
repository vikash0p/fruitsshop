'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { slider } from '@/utils/data';

export  function HomeCarousal() {
 
    


  return (
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full h-96 lg:h-[600px] bg-gray-200 ">
        {
           slider.map((value,index,array)=>{
            return(

                <SwiperSlide key={index} className='w-full h-full ' >
                       <div className="w-full h-full flex flex-col gap-3 justify-center items-center">
                        <Image
                            src={value.image}
                            alt={value.title}
                            width={800}
                            height={500}
                            className='object-contain h-[75%] w-[75%]  mx-auto'
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                        />
                        <h1 className='font-serif text-primary text-3xl uppercase '>{value.title} </h1>
                        <h2 className='text-orange text-2xl uppercase'>{value.description} </h2> 
                       </div>
                </SwiperSlide>
            )
           }) 
        }
          
      </Swiper>
  )
}
