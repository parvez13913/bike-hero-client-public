import React, { useEffect, useState } from 'react';
import MyOrderDetail from './MyOrderDetail';

const MyOrder = () => {
    const [myOrder, setMyOrder] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/myOrder")
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, []);
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