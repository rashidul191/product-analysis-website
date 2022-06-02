import React from "react";
import img from "../../images/laptop.jpg";
import CustomerReview from "../CustomerReview/CustomerReview";
import "./Home.css";

const Home = () => {
  return (
    <div className=" container row">
      <div className="col-md-8 mt-md-5 pt-md-5">
        <h1 className="display-3 fw-bold">Your Next Laptop </h1>
        <h1 className="text-info display-3 fw-bold">Your Best Laptop </h1>
        <p>
        It's all about the innovation. Acer products are designed for your needs and accessibility with powerful features fit for your lifestyle. The Aspire 5 packs a lot of power into the portable design to suit the multi-tasking needs of you and your family. The desktop-class performance of this Acer Aspire 5 laptop with an AMD Ryzen 3 processor boosting performance while giving you amazing battery life.
        </p>
        <button className="btn btn-info btn-lg">Live Demo</button>
      </div>
      <div className="col-md-4 laptop-container">
        <img src={img} alt="" />
      </div>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
