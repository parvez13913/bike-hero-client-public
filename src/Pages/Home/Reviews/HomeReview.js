import React from 'react';
import { Card } from 'react-bootstrap';
import './HomeReview.css';


const HomeReview = ({ homeReview }) => {
    console.log(homeReview)
    const { fidback, name, ratting, photoUrl, email } = homeReview;
    return (
        <div className='d-grid col-sm-12 col-md-6 col-lg-4 mb-5'>
            <Card className='card-container shadow-lg rounded'>
                <Card.Img className='reviwe-img mx-auto rounded-circle mt-3' src={photoUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {email}
                    </Card.Text>
                    <Card.Text>
                        Rattings : {ratting} star
                    </Card.Text>
                    <Card.Text>
                        {fidback}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeReview;