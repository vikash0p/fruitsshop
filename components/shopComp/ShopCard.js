'use client'
import React from 'react'
import { useProductContext } from '@/utils/FetchData'
import ShopLoading from './ShopLoading';
import Card from './Card';

export default function ShopCard() {
    const { isPending, isFetching, error, data, isError, } = useProductContext();

    const products = data?.product;





    if (error) return 'An error has occurred: ' + error.message;
    return (
        <div className="">
            {isPending ?
                <ShopLoading /> : (
                    <div className="w-full h-full py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 place-items-center">
                        {
                            products?.map((pro, index, arr) => {
                                return (

                                        <Card pro={pro} key={index} />
                                )
                            })
                        }
                    </div>
                )


            }


        </div>
    )
}
