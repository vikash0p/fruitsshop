'use client'
import { useProductContext } from '@/utils/FetchData'
import React, { useState } from 'react'
import Card from '../shopComp/Card';
import ShopLoadingSkeleton from '../shopComp/ShopLoadingSkeleten';
export default function CategoryComp() {
    let [alldata, setAllData] = useState("All");
    const [sortOrder, setSortOrder] = useState(null);
    const [selected, setSelect] = useState(0);
    const { isPending, isFetching, error, data, isError } = useProductContext();
    const products = data?.product;
    // console.log(products);

    const uniqeData = (data, cat) => {
        let newData = data?.map((value, index) => {
            return value[cat];
        });

        return (newData = ["All", ...new Set(newData)]);
    }


    const categroydata = uniqeData(products, "category");
    (categroydata);

    const clickHander = (value, index) => {
        setAllData(value);
        setSelect(index)
    }
    // console.log(alldata);

    const handleSort = (order) => {
        setSortOrder(order);
    };

    return (
        <div className='w-full min-h-screen flex flex-col lg:flex-row bg-gray-200 '>
            <div className=" lg:basis-[20%] lg:h-screen   ">
                <div className="flex  lg:flex-col items-center gap-2  text-left py-2">
                    <h2>Category</h2>
                    {
                        categroydata.map((cat, index) => {
                            return (
                                <button
                                    type="button"
                                    className={` py-2 text-left ps-3 w-3/4 hover:bg-slate- text-white hover:text-white ${selected === index ? 'bg-slate-600 text-white' : " bg-slate-400"} `}
                                    key={index}
                                    onClick={() => clickHander(cat, index)}

                                >{cat} </button>
                            )
                        })
                    }
                    
                </div>
                <div className='flex lg:flex-col items-center gap-2  text-left py-2'>
                    <h2>Price</h2>
                    <button className={`py-2 text-left ps-3 w-3/4 hover:bg-slate- text-white hover:text-white ${sortOrder === 'lowToHigh' ? 'bg-slate-600 text-white' : 'bg-slate-400'}`}
                        onClick={() => handleSort('lowToHigh')} >
                        Price: Low to High
                    </button>
                    <button className={`py-2 text-left ps-3 w-3/4 hover:bg-slate- text-white hover:text-white  ${sortOrder === 'highToLow' ? 'bg-slate-600 text-white' : 'bg-slate-400'}`}
                        onClick={() => handleSort('highToLow')} >
                        Price: High to Low
                    </button>
                </div>
            </div>
            <div className="lg:basis-[80%] min-h-screen ">
                {
                    isPending ? (
                        <div className="grid grid-cols-1 py-2 gap-x-2 gap-y-4 lg:grid-cols-2 xl:grid-cols-3" >
                            <ShopLoadingSkeleton />
                            <ShopLoadingSkeleton />
                            <ShopLoadingSkeleton />
                            <ShopLoadingSkeleton />
                            <ShopLoadingSkeleton />
                            <ShopLoadingSkeleton />
                            <ShopLoadingSkeleton />
                            <ShopLoadingSkeleton />
                        </div>
                    ) :
                        (

                            <div className="w-full grid grid-cols-1 py-10 gap-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center">
                                {
                                    products?.filter((value, index, arr) => {
                                        const mydata = alldata === "All" || value.category === alldata;
                                        return mydata;
                                    })?.sort((a, b) => {
                                        if (sortOrder === 'lowToHigh') {
                                            return a.price - b.price;
                                        } else if (sortOrder === 'highToLow') {
                                            return b.price - a.price;
                                        } else {
                                            return 0;
                                        }
                                    })?.map((value, index) => {
                                        return (
                                            <Card pro={value} key={index} />
                                        )
                                    })
                                }

                            </div>

                        )
                }
            </div>
        </div>
    )
}
