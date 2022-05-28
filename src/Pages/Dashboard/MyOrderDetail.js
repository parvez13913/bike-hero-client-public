import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import deletePhoto from '../../images/delete.png';

const MyOrderDetail = ({ order, setMyOrder, myOrder }) => {

    const { productName, address, email, quantity, phoneNumber, _id } = order;

    const handelDeleteButton = id => {
        const proceed = window.confirm("Do you want to Delete?");
        if (proceed) {
            const url = `http://localhost:5000/myOrder/${_id}`;
            axios.delete(url)
                .then(res => {
                    const remaining = myOrder?.filter(item => item._id !== id);
                    setMyOrder(remaining);
                    if (res.data.statusText) {
                        toast.error('Delete');
                    }
                })
        }
    }
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
                <div className="mt-3">
                    <button onClick={() => handelDeleteButton(_id)} className='border-0 p-2 rounded-pill'>
                        <img className='delete-btn' src={deletePhoto} alt="deletePhoto" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyOrderDetail;