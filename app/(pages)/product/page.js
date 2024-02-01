import ProductForm from '@/components/productComp/ProductForm'
import React from 'react'

export const metadata = {

  title: "Products",
  description: "Fruits are not just a delight for the taste buds; they are a gift from nature that promotes health and vitality. Whether you're seeking a quick snack, a refreshing beverage, or a nutritious addition to your meals, our fruits embody the essence of wholesome goodness.",
};

export default function Product() {
  return (
    <div>
      <ProductForm />
    </div>
  )
}
