'use client'

import { ToastError, ToastSuccess } from '@/utils/Toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { ToastContainer } from 'react-toastify';

export default function ProductForm() {
    
    const [product, setProduct] = useState({
        name: '',
        description: '',
        image: '',
        price: '',
        category: '',
        stock: 0,
        availability: false,
    });
    const router = useRouter();

    const categories = [
        { id: 'fruits', name: 'Fruits' },
        { id: 'vegetables', name: 'Vegetables' },
        { id: 'snacks', name: 'Snacks' },
        // Add more categories as needed
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can handle the form submission logic here
        // console.log('Form submitted:', product);

        if (!product.name || !product.description || !product.image || !product.price || !product.category || !product.stock || !product.availability) {
            ToastError('Please fill all required field.');
        }

        try {

            const response = await axios.post("/api/product", {
                name: product.name,
                description: product.description,
                image: product.image,
                price: product.price,
                category: product.category,
                stock: product.stock,
                availability: product.availability
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
           

        } catch (error) {
            console.error('error ', error);

        }

        router.refresh();
        router.push('/shop');
        ToastSuccess('Product data is successfully submited ! ');

    };

    return (
        <div className="container mx-auto p-4 min-h-screen ">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Image URL
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="image"
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Category
                    </label>
                    <select
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select a category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
                        Stock
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        id="stock"
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="availability">
                        Availability
                    </label>
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        id="availability"
                        name="availability"
                        checked={product.availability}
                        onChange={handleChange}
                    />
                    <span className="text-sm">Available</span>
                </div>
                <div className="mt-6">
                    <button
                        className=" hover:bg-green-800  text-white bg-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Save Product
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}
