import React from 'react';
import { toast } from 'react-toastify';
import deletePhoto from '../../images/delete.png';
import './ManageSingleProducts.css';

const ManageSingleProducts = ({ manageSingleProduct, setProducts, products }) => {
    const { name, availableQantity, picture, _id } = manageSingleProduct;
    const handelDeleteButton = id => {
        const proceed = window.confirm("Do you want to Delete?");
        if (proceed) {
            const url = `http://localhost:5000/products/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products?.filter(product => product._id !== id);
                    if (data.acknowledged) {
                        setProducts(remaining);
                        toast.error("DELETE");
                    }

                })
        }
    }
    return (
        <div className='container my-5'>
            <div className='d-flex item-center justify-content-around border my-2 py-2 rounded shadow-lg'>
                <div>
                    <img className='product-img' src={picture} alt="" />
                </div>
                <div className="margin-top">
                    <h5>{name}</h5>
                </div>
                <div className="margin-top">
                    <h5>{availableQantity}</h5>
                </div>
                <div className="mt-3">
                    <button onClick={() => handelDeleteButton(_id)} className='border-0 p-2 rounded-pill'>
                        <img className='delete-btn' src={deletePhoto} alt="deletePhoto" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManageSingleProducts;