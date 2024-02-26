import ShopOneCard from '@/components/shopComp/ShopOneCard';
import axios from 'axios';
import React from 'react'


export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = params.oneProduct

    // fetch data
    const products = await fetch(`${process.env.NEXTAUTH_URL}/api/product/${id}` ).then((res) => res.json());

    // optionally access and extend (rather than replace) parent metadata

    return {
        title: products.product.name,
        description: products.product.description,
        alternates: {
            canonical: `/shop/${products.product.category}`,
            
        },
    }
}

export default async function ProductOnePage({ params }) {

    const { oneProduct } = params;


    return (

        <>
            <ShopOneCard oneProduct={oneProduct} />
        </>

    )
}
