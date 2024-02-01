'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

async function productsData(pageNumber) {
    const res = await axios.get(`http://localhost:3000/api/product`);
    return res.data;
}

export const ProductContext = createContext();

export function FetchData({ children }) {

    const { isPending, isError, isFetching, error, data } = useQuery({
        queryKey: ['products'],
        queryFn:  productsData,
    });

    // console.table(data);
    return (
        <ProductContext.Provider value={{ isPending, isFetching, error, data, isError, }}>
            {children}
        </ProductContext.Provider>
    );
}

export const useProductContext = () => {
    return useContext(ProductContext);
};
