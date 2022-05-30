import React, { useEffect, useState } from 'react';

const useToolsProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://cryptic-retreat-88156.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return [products, setProducts];
}

export default useToolsProduct;