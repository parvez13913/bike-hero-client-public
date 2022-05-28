import React from 'react';

const MyOrderDetail = ({ order }) => {

    const { productName, address, email, quantity, phoneNumber, _id } = order;
    return (
        <div>
            <div className='d-flex align-items-center justify-content-around border my-2 py-2 rounded shadow-lg manage-inventory'>
                <p>
                    <small>
                        {productName}
                    </small>
                </p>
                <p>
                    <small>
                        {address}
                    </small>
                </p>
                <p>
                    <small>
                        {email}
                    </small>
                </p>
                <p>
                    <small>
                        {quantity}
                    </small>
                </p>
                <p>
                    <small>
                        {phoneNumber}
                    </small>
                </p>
            </div>
        </div>
    );
};

export default MyOrderDetail;