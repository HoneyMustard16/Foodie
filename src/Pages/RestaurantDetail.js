import React, { Component } from "react";
import axios from "axios";
import { API } from "../Config/api";
import RestaurantProfile from "../Components/RestaurantProfile";
import Review from "../Components/Review";

class RestaurantDetail extends Component {
  constructor() {
    super();
    this.state = {
      restaurant: null,
      reviews: null,
    };
  }

  componentDidMount() {
    let { params } = this.props.match;
    this.getRestaurantData(params.restaurant_id);
    this.getReviewData(params.restaurant_id);
  }

  getRestaurantData = (restaurant_id) => {
    let url = `${API.zomato.baseUrl}/restaurant`;
    axios
      .get(url, {
        headers: {
          "user-key": API.zomato.api_key,
        },
        params: {
          res_id: restaurant_id,
        },
      })
      .then(({ data }) => {
        this.setState({ restaurant: data });
      })
      .catch((err) => console.log(err));
  };

  getReviewData = (restaurant_id) => {
    let url = `${API.zomato.baseUrl}/reviews`;
    axios
      .get(url, {
        headers: {
          "user-key": API.zomato.api_key,
        },
        params: {
          res_id: restaurant_id,
        },
      })
      .then(({ data }) => {
        this.setState({ reviews: data.user_reviews });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
          <div className="row">
            <div className="col">
              {this.state.restaurant ? (
                <>
                  <h4 className="text-success">
                    {`${this.state.restaurant.name}, ${this.state.restaurant.location.address}, ${this.state.restaurant.location.locality}`}
                  </h4>
                </>
              ) : (
                <p>Loading</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{ marginBottom: 20 }}>
              <RestaurantProfile restaurant={this.state.restaurant} />
            </div>
            <div className="col-12" style={{ marginBottom: 20 }}>
              <div className="card">
                <div className="card-body">
                  <div className="col-12">
                    <h4 className="text-success" style={{ fontWeight: 800 }}>
                      Reviews
                    </h4>
                    {this.state.reviews ? (
                      this.state.reviews.map(({ review }) => (
                        <Review key={review.id} review={review} />
                      ))
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RestaurantDetail;
