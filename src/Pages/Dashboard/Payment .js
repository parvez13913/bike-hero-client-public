import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51L4iVDJLqOhV2345B4SeITQWsrIV054FlbUdAdnYxLsAfWs5vcD8DxCDEJhZWPm608WgOUbEluCZNCqoDo4dO3Xq00eIClxU1S');
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/myOrder/${id}`;

    const { data, isLoading } = useQuery(['myOrder', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    const { productName, price, name } = data;
    return (
        <div>
            <div className='w-50 mx-auto shadow-lg p-5 my-3 border border-1 rounded'>
                <h5 className='text-center text-color'>Hellow, {name} </h5>
                <h5 className='text-center text-color'>Please Pay For {productName} </h5>
                <p className='text-center text-color'>Please Pay $ {price}</p>
            </div>
            <div className='w-50 mx-auto shadow-lg p-5 my-3 border border-1 rounded'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        data={data}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;