import React from "react";
import useReview from "../../hook/useReview";
import ReviewDetails from "../ReviewDetails/ReviewDetails";

const Review = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div className="container">
      <h1 className="text-center">All Customer Review</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">{
          reviews.map((review) => <ReviewDetails key = {review.id} review={review}></ReviewDetails>)
      }</div>
    </div>
  );
};

export default Review;
