import React, { useEffect, useState } from 'react';
import HomeReview from './HomeReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const review = [...reviews].reverse();
    const homeReviews = review.slice(0, 6);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div className='container'>
            <h3 className='my-5 text-color text-center'>TESTIMONIALS</h3>
            <div className='row g-4'>
                {
                    homeReviews.map(homeReview => <HomeReview
                        key={homeReview._id}
                        homeReview={homeReview}
                    />)
                }
            </div>
        </div>
    );
};

export default Reviews;