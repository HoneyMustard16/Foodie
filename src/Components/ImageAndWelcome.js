import React from "react";
import mainImage from "../assets/images/slider-image1.jpg";

const ImageAndWelcome = () => {
  return (
    <>
      <div className="row" style={{ marginBottom: 30 }}>
        <img src={mainImage} width="100%" />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="card text-white bg-success text-center mb-3">
              <div className="card-header">
                <h1>Welcome to Foodie</h1>
              </div>
              <div className="card-body">
                <h4 className="card-title">
                  The Easiest Way to Find Restaurants and Food You can grab
                </h4>
                <p className="card-text">
                  information about restaurants, cafees, cuisines with just a
                  few clicks.
                </p>
                <p className="card-text">
                  Start by choosing the featured cities below, or search the
                  city name.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageAndWelcome;
