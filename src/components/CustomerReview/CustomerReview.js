import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hook/useReview';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const CustomerReview = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
           <h1 className="text-center">Customer Review</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">{
          reviews.map((review) => <ReviewDetails key = {review.id} review={review}></ReviewDetails>)
      }</div>
      <div className="text-center my-4">
        <button className="btn btn-warning">
            <Link to="/review">See all Review</Link>
        </button>
      </div>

        </div>
    );
};

export default CustomerReview;