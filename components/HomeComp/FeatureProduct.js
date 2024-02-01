'use client'
import { useProductContext } from '@/utils/FetchData'
import React from 'react'
import Card from '../shopComp/Card';

export default function FeatureProduct() {

  const { isPending, isError, isFetching, error, data } = useProductContext();
  const products = data?.product;

  const uniqueCategeries = [...new Set(products?.map((value, indx, arr) => value.category))];
  // console.log(uniqueCategeries);
  return (
    <div>
      {
        products && uniqueCategeries?.map((uniqueCat, indx, arr) => {
          return (
            <div className="w-full mt-3 bg-slate-200 py-5 " key={indx}>
              <div className="w-1/3 mx-auto py-3 bg-primary ">
                <h2 className='uppercase text-2xl text-center mt-4 text-white underline  underline-offset-4'>{uniqueCat}</h2>
              </div>
              <div className="w-full h-full py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 place-items-center">
                {
                  products?.filter((value, indx, arr) => value.category === uniqueCat).slice(0,4).map((pro, proindx, proArr) => {
                    return (
                     <Card pro={pro} key={proindx} />
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
