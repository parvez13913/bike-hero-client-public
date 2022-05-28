import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyOrderDetail from './MyOrderDetail';

const MyOrder = () => {
    const [myOrder, setMyOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const email = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder?email=${email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate('/');
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            })
            .then(data => setMyOrder(data));
    }, [user]);
    return (
        <div>
            <h1 className='text-center text-color mb-3'>My Order</h1>
            <div>
                {
                    myOrder.map(order => <MyOrderDetail
                        key={order._id}
                        order={order}
                        setMyOrder={setMyOrder}
                        myOrder={myOrder}
                    />)
                }
            </div>
        </div>
    );
};

export default MyOrder;