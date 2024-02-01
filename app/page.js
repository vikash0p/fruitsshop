import Brand from '@/components/HomeComp/Brand'
import FeatureProduct from '@/components/HomeComp/FeatureProduct'
import { HomeCarousal } from '@/components/HomeComp/HomeCarousal'
import React from 'react'

export default function Home() {
  return (
    <div>
      <HomeCarousal />
      <FeatureProduct/>
      <Brand />
    </div>
  )
}
