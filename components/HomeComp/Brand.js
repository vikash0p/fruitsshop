import { brand } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

export default function Brand() {
    return (
        <div>
            <div className="max-w-7xl mx-auto min-h-96 py-10 ">
                <h1 className='text-3xl uppercase bg-orange-600 w-1/4 p-3 text-center mx-auto text-white underline ' >Brand</h1>

                <div className="w-full flex flex-wrap gap-10 justify-center py-8 items-center">
                    {
                        brand.map((value, indx, arr) => {
                            return (
                                <Image
                                    key={indx}
                                    alt='images'
                                    src={value.img}
                                    className='w-52 h-28 border border-orange-600 border-opacity-75 object-contain'
                                    width={200}
                                    height={200}
                                    priority
                                />
                            )
                        })
                    }
                </div>
                <div className="py-5 lg:12">
                    <Image 
                    alt='banner_Image'
                    src={'/images/vege-banner.png'}
                    width={900}
                    height={500}
                    className='object-contain w-full h-52 lg:h-96 '
                    priority
                    />
                </div>
               
            </div>
        </div>
    )
}
