'use client'
import axios from 'axios'; // Import Axios
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { add } from '@/Redux/CartSlice';

const fetchProductOne = async (oneProduct) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/product/${oneProduct}` );
  return response.data;
};

export default function ShopOneCard({ oneProduct }) {

  const dispatch = useDispatch();

  const CartHandler = (pro) => {
    dispatch(add(pro))
  }
  const { isPending, isError, isFetching, error, data } = useQuery({
    queryKey: ['singleData'],
    queryFn: () => fetchProductOne(oneProduct)
  });
  // console.table('The single product data', data?.product);

  if (isPending) {
    return <div className='w-full h-screen flex justify-center items-center'>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
    </div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className=" max-w-6xl min-h-96  flex flex-col xl:flex-row items-start  ">
          <Image
            alt={data.product.name}
            src={data.product.image}
            width={500}
            height={500}
            className="object-cover max-w-sm  md:rounded-none md:rounded-s-lg"
            priority
             />
          <div className="flex flex-col justify-between p-4 gap-3 leading-normal">
            <h5 className=" text-3xl font-bold uppercase ">{data.product.name} </h5>
            <p className=" font-normal text-xl">{data.product.description} </p>
            <h1 className='text-2xl'>Price:{data.product.price} </h1>
            <h1 className='text-2xl'>Stock:{data.product.stock} </h1>
            <button type="button " className='px-5 py-2 rounded-sm bg-green-400' onClick={() => CartHandler(data?.product)} >Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
