import useToolsProduct from '../../../hooks/UseToolsProduct';
import Product from './Product/Product';

const Products = () => {
    const [products] = useToolsProduct();
    const tools = [...products].reverse();
    const homePageTools = tools.slice(0, 6);

    return (
        <div className='container'>
            <div>
                <h1 className='text-center my-5 text-primary'>Our Parts</h1>
            </div>
            <div className='row g-4'>
                {
                    homePageTools.map(products => <Product
                        key={products.key}
                        products={products}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;