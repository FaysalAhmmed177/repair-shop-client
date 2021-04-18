import React, { useEffect, useState } from 'react';
import UsersReviewCard from '../UsersReviewCard/UsersReviewCard';
import './UsersReview.css'

const UsersReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://warm-stream-38271.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="reviewStyle">
             <h2 className="text-center p-5" style={{marginTop: '50px'}}>Testimonials from Our Clients</h2>
            <div className="container">
                <div className="row">
                    {
                        reviews.map(review => <UsersReviewCard review={review}></UsersReviewCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default UsersReviews;