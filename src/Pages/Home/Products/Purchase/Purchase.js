import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../../../../firebase.init';
import './Purchase.css';
import axios from 'axios';
import shoppingCart from '../../../../images/shop.png';
import { toast } from 'react-toastify';
import Loading from '../../../Shared/Loading/Loading';

const Purchase = () => {
    const { productsId } = useParams();
    const [user] = useAuthState(auth)

    const [purchaseProduct, setPurchaseProduct] = useState([]);
    const [isLoding, setIsLoading] = useState(false);
    const { price } = purchaseProduct;

    useEffect(() => {
        setIsLoading(true);
        const url = `https://cryptic-retreat-88156.herokuapp.com/products/${productsId}`;
        fetch(url)
            .then(res => res.json())
            .then(result => setPurchaseProduct(result));
        setIsLoading(false);
    }, [productsId]);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const { price, name, ...rest } = purchaseProduct;
        const { phoneNumber, address, quantity, ...restData } = data;
        const orderData = { price, name, phoneNumber, address, quantity };
        axios.post('https://cryptic-retreat-88156.herokuapp.com/myOrder', orderData)
            .then(res => {
                if (res.statusText === "OK") {
                    toast("Your Order Confirmed");
                    reset();
                }
            })
    }
    if (isLoding) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='text-center'>
                <h1 className='mt-5 text-color'>Welcome To Order Page</h1>
            </div>
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
                                <h5 className="card-title">Price: {price}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' border rounded border-1 p-5 shadow-lg m-5'>
                    {purchaseProduct?.description}
                </div>
            </div>
            <div className='container mx-auto bg-light my-5 p-3 rounded shadow-lg purchase-container bg-dark'>
                <div className='text-center '>
                    <h1 className='my-3 text-color'>Order Now : {purchaseProduct?.name}</h1>
                    <img className='order-page-icon' src={shoppingCart} alt="shopping_photo" />
                </div>
                <form className='d-flex flex-column my-4' onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className='my-2 py-2'
                        placeholder='Oder Quantity'
                        type='quantity'
                        {...register("quantity", {
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
                    {errors.quantity?.type === 'required' && <p className='text-danger'>{errors.quantity?.message}</p>}
                    {errors.quantity?.type === 'min' && <p className='text-danger'>{errors.quantity?.message}</p>}
                    {errors.quantity?.type === 'max' && <p className='text-danger'>{errors.number?.message}</p>}
                    <input
                        className='my-2 py-2'
                        type='name'
                        defaultValue={user?.displayName}
                        readOnly
                        {...register("name")} />
                    <input className='my-2 py-2' readOnly defaultValue={user?.email} type="email" {...register("email")} />
                    <input className='my-2 py-2' readOnly defaultValue={purchaseProduct?.price} type="price" {...register("price")} />
                    <input className='my-2 py-2' readOnly defaultValue={purchaseProduct?.name} type="productName" {...register("productName")} />
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