import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        axios.post(`http://localhost:5000/products`, data).then(res => {
            if (res.statusText) {
                toast.success('Product Added');
                reset()
            }
        });
    }
    return (
        <div className='container mx-auto bg-light my-5 p-3 rounded shadow-lg purchase-container bg-dark'>
            <form className='d-flex flex-column my-4' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        className='my-2 py-2 w-40'
                        placeholder='Minimum Quantity'
                        type='number'
                        {...register("minimumOderQantity", {
                            required: {
                                value: true,
                                message: 'Minimum Quantity is Required',
                            },
                            min: {
                                value: 1,
                                message: 'You Must add a Minimum products'
                            },

                        })} />
                    {errors.minimumOderQantity?.type === 'required' && <p className='text-danger'>{errors.minimumOderQantity?.message}</p>}
                    {errors.minimumOderQantity?.type === 'min' && <p className='text-danger'>{errors.minimumOderQantity?.message}</p>}
                    <input
                        className='my-2 py-2 w-40 mx-5'
                        placeholder='avaiable Quantity'
                        type='number'
                        {...register("availableQantity", {
                            required: {
                                value: true,
                                message: 'Available Qantity is Required',
                            },
                            min: {
                                value: 1,
                                message: 'You Must add a Minimum products'
                            },

                        })} />
                    {errors.availableQantity?.type === 'required' && <p className='text-danger'>{errors.availableQantity?.message}</p>}
                    {errors.availableQantity?.type === 'min' && <p className='text-danger'>{errors.availableQantity?.message}</p>}
                </div>
                <input
                    className='my-2 py-2'
                    placeholder='Product Name'
                    type='tex'
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is Required',
                        },

                    })} />
                {errors.name?.type === 'required' && <p className='text-danger'>{errors.name?.message}</p>}
                <input
                    className='my-2 py-2'
                    placeholder='Price'
                    type='price'
                    {...register("price", {
                        required: {
                            value: true,
                            message: 'Price is Required',
                        },
                        min: {
                            value: 1,
                            message: 'The price of the product cannot be less than 1 ray'
                        },

                    })} />

                <input
                    placeholder='Img Url'
                    defaultValue='https://i.ibb.co/YpztPmC/head-Light.png'
                    type="text"
                    {...register("picture", {
                        required: {
                            value: true,
                            message: 'picture is Required',
                        },

                    })} />
                {errors.picture?.type === 'required' && <p className='text-danger'>{errors.picture?.message}</p>}

                <textarea className='my-2 py-2' placeholder='Product Description' type="description" {...register("description")} />

                <input className='submit-Button h4 mt-3 rounded py-2' value='Add New' type='submit' />
            </form>
        </div>
    );
};

export default AddProduct;