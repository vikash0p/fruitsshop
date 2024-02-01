'use client'
import React from 'react'
import ShopLoadingSkeleton from './ShopLoadingSkeleten'

export default function ShopLoading() {
  return (
      <div className='w-full h-full -z-30 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 place-items-center'> 
      <ShopLoadingSkeleton />
      <ShopLoadingSkeleton />
      <ShopLoadingSkeleton />
      <ShopLoadingSkeleton />
      <ShopLoadingSkeleton />
      <ShopLoadingSkeleton />
      <ShopLoadingSkeleton />
      <ShopLoadingSkeleton />
      <ShopLoadingSkeleton />
      <ShopLoadingSkeleton />
      <ShopLoadingSkeleton />
      <ShopLoadingSkeleton />
      <ShopLoadingSkeleton />
      <ShopLoadingSkeleton />
      <ShopLoadingSkeleton />
      <ShopLoadingSkeleton />
    </div>
  )
}
