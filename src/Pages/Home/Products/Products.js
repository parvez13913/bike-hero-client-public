import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='container'>
            <div>
                <h1 className='text-center my-5 text-primary'>Our Parts</h1>
            </div>
            <div className='row g-4'>
                {
                    products.map(products => <Product
                        key={products.key}
                        products={products}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;