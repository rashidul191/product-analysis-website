import React from "react";

const ReviewDetails = (props) => {
  const { name, review, rating, img } = props.review;
  return (
    <div className="col review-details-container">
      <img
        className="img-fluid w-25 rounded-circle"
        src={require(`../../images/${img}`)}
        alt=""
      />
      <h4>{name}</h4>
      <p>Rating: {rating}</p>
      <p>{review}</p>
    </div>
  );
};

export default ReviewDetails;
