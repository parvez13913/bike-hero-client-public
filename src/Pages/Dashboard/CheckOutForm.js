import React, { useEffect, useState } from 'react';
import { CardElement, stripe, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';

const CheckOutForm = ({ data }) => {

    const stripe = useStripe({});
    const elements = useElements();
    const [cardError, setCardErroe] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [prossing, setProssing] = useState(false);
    const [success, setSuccess] = useState('');
    const { price, name, _id } = data;

    useEffect(() => {
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(result => {
                if (result?.clientSecret) {
                    setClientSecret(result.clientSecret);
                }
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardErroe(error.message);
            setProssing(true);
        }
        else {
            setCardErroe('');
        }

        setSuccess('');

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                    },
                },
            },
        );
        if (intentError) {
            setCardErroe(intentError?.message);
            setProssing(false);
        }
        else {
            setSuccess('Your payment Confirm');
            setTransactionId(paymentIntent?.id)
            setCardErroe('');
            const payment = {
                order: _id,
                transactionId: paymentIntent?.id,
            }
            fetch(`http://localhost:5000/myOrder/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    setProssing(false);
                })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-3 border-0 bg-dark text-white rounded' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>

            {
                cardError && <p className='text-danger'>{cardError}</p>
            }
            {
                success && <p>Your Transaction Id : {transactionId}</p>
            }
        </>
    );
};

export default CheckOutForm;