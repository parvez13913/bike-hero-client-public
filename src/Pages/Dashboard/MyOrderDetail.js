import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import deletePhoto from '../../images/delete.png';


const MyOrderDetail = ({ order, setMyOrder, myOrder, index }) => {

    const { address, email, quantity, phoneNumber, _id, price, paid } = order;

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
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{email}</td>
            <td>{address}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{phoneNumber}</td>
            <td>

                {
                    (order.price && !order.paid) && <Link to={`/dashboard/payment/${_id}`}>
                        <button className='border-0 p-2 rounded'>
                            Pay
                        </button>
                    </Link>
                }
                {
                    (order.price && order.paid) &&
                    <p className='border-0 p-2 rounded'>
                        Paid
                    </p>

                }

            </td>
            {
                (!order.paid) && <td>
                    <div>
                        <button onClick={() => handelDeleteButton(_id)} className='border-0 p-2 rounded-pill'>
                            <img className='delete-btn' src={deletePhoto} alt="deletePhoto" />
                        </button>
                    </div>
                </td>
            }
        </tr>


    );
};

export default MyOrderDetail;