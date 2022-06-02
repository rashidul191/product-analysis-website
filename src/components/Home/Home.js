import React from "react";
import img from "../../images/laptop.jpg";
import Review from "../Review/Review";
import './Home.css'

const Home = () => {
  return (
    <div className=" container row">
      <div className="col-md-8 mt-md-5 pt-md-5">
        
          <h1 className="display-3 fw-bold">Your Next Laptop </h1>
          <h1 className="text-info display-3 fw-bold">Your Best Laptop </h1>
        
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quis
          perspiciatis eius illo, quasi eum corporis, maiores est doloremque
          obcaecati repellat. Eligendi, consectetur iure? Tenetur ipsa soluta
          natus aspernatur voluptatum.
        </p>
        <button className="btn btn-info btn-lg">Live Demo</button>
      </div>
      <div className="col-md-4 laptop-container">
        <img  src={img} alt="" />
      </div>

      <Review></Review>
    </div>
  );
};

export default Home;
