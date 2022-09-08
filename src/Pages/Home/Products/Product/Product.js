import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({ products }) => {
    const navigate = useNavigate();
    const { name, picture, availableQantity, price, minimumOderQantity, _id } = products;

    const handelBuyNowButton = id => {
        navigate(`/products/${id}`);
    }

    return (
        <div className='d-grid col-sm-12 col-md-6 col-lg-4 mb-5'>
            <Card className='card-container shadow-lg rounded'>
                <Card.Img className='card-img' src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price : {price}
                    </Card.Text>
                    <Card.Text>
                        Available Qantity : {availableQantity}
                    </Card.Text>
                    <Card.Text>
                        Minimum Oder Qantity : {minimumOderQantity}
                    </Card.Text>
                    {/* <Card.Text>
                        {description}
                    </Card.Text> */}
                    <Button onClick={() => handelBuyNowButton(_id)} className='w-100' variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;