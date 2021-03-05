import React from "react";
import RatingLabel from "../Components/RatingLabel";

const Review = (props) => {
  return (
    <>
      <div className="card border-success" style={{ marginBottom: 5 }}>
        <div className="card-body">
          <div className="row" style={{ marginBottom: 20 }}>
            <div className="col-1">
              <img
                className="img-fluid"
                src={props.review.user.profile_image}
              ></img>
            </div>
            <div className="col-11" style={{ border: "0px solid black" }}>
              <h6 className="font-weight-bold">{props.review.user.name}</h6>
              <RatingLabel
                text={`${props.review.user.foodie_level_num} (${props.review.user.foodie_level})`}
                labelColor={`${props.review.user.foodie_color}`}
              />
            </div>
          </div>
          <h6 className="card-text text-muted">
            {props.review.review_time_friendly}
          </h6>
          <RatingLabel
            text={`${props.review.rating} (${props.review.rating_text})`}
            labelColor={`${props.review.rating_color}`}
          />
          <p className="card-text">{props.review.review_text}</p>
        </div>
      </div>
    </>
  );
};

export default Review;
