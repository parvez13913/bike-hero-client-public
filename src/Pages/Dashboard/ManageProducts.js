import React from 'react';
import useToolsProduct from '../../hooks/UseToolsProduct';
import ManageSingleProducts from './ManageSingleProducts';

const ManageProducts = () => {
    const [products, setProducts] = useToolsProduct();
    return (
        <div>
            <h3 className='text-center text-color my-2'>Manage Products</h3>
            <div>
                {
                    products.map(manageSingleProduct => <ManageSingleProducts
                        key={manageSingleProduct._id}
                        manageSingleProduct={manageSingleProduct}
                        setProducts={setProducts}
                        products={products}
                    />)
                }
            </div>
        </div>
    );
};

export default ManageProducts;