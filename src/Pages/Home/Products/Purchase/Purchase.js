import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../../../../firebase.init';
import './Purchase.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { productsId } = useParams();
    const [user] = useAuthState(auth)

    const [purchaseProduct, setPurchaseProduct] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/products/${productsId}`;
        fetch(url)
            .then(res => res.json())
            .then(result => setPurchaseProduct(result));
    }, [productsId]);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/myOrder', data)
            .then(res => {
                if (res.statusText === "OK") {
                    toast("Your Order Confirmed");
                    reset()
                }
            })
    }

    return (
        <div>
            <h1 className='mt-5 text-center text-color'>Welcome To Order Page</h1>
            <div>
                <div className="card my-3 w-50 container shadow-lg mt-5">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={purchaseProduct?.picture} className="img-fluid" alt="inventoryImg" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">{purchaseProduct?.name}</h2>
                                <h5 className="card-title">Available Quantity: {purchaseProduct?.availableQantity}</h5>
                                <h5 className="card-title">minimum Oder Quantity: {purchaseProduct?.minimumOderQantity}</h5>
                                <h5 className="card-title">Price: {purchaseProduct?.price}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto bg-light my-5 p-3 rounded shadow-lg purchase-container bg-dark'>
                <h1 className='my-3 text-center text-color'>Order Now : {purchaseProduct?.name}</h1>
                <form className='d-flex flex-column my-4' onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className='my-2 py-2'
                        placeholder='Oder Quantity'
                        type='number'
                        {...register("number", {
                            required: {
                                value: true,
                                message: 'Order Quantity is Required',
                            },
                            min: {
                                value: purchaseProduct?.minimumOderQantity,
                                message: 'You Must Order a Minimum of 80 products'
                            },

                            max: {
                                value: purchaseProduct?.availableQantity,
                                message: 'You cannot order more than our stock'
                            }

                        })} />
                    {errors.number?.type === 'required' && <p className='text-danger'>{errors.number?.message}</p>}
                    {errors.number?.type === 'min' && <p className='text-danger'>{errors.number?.message}</p>}
                    {errors.number?.type === 'max' && <p className='text-danger'>{errors.number?.message}</p>}
                    <input
                        className='my-2 py-2'
                        type='text'
                        defaultValue={user?.displayName}
                        readOnly
                        {...register("name")} />
                    <input
                        className='my-2 py-2'
                        readOnly defaultValue={user?.email}
                        type="email"
                        {...register("email")} />
                    <input className='my-2 py-2' id='Price' readOnly defaultValue={purchaseProduct?.price} type="price" {...register("price")} />
                    <input className='my-2 py-2' placeholder='Your Phone Number' type="phoneNumber" {...register("phoneNumber", {
                        required: {
                            value: true,
                            message: 'Phon Number is Required',
                        }
                    })} />
                    {errors.phoneNumber?.type === 'required' && <p className='text-danger'>{errors.phoneNumber?.message}</p>}
                    <input className='my-2 py-2' placeholder='Your Address' type="text" {...register("address")} />

                    <input className='submit-Button h4 mt-3 rounded py-2' value='Purchase' type='submit' />
                </form>
            </div>
        </div>
    );
};

export default Purchase;