import React, { Component } from "react";
import ImageAndWelcome from "../Components/ImageAndWelcome";
import CityList from "../Components/CityList";
import Search from "../Components/Search";
import axios from "axios";
import { API } from "../Config/api";

const citiesDummy = [
  { id: 72, name: "jakarta", country_name: "Indonesia" },
  { id: 11052, name: "Bandung", country_name: "Indonesia" },
  { id: 170, name: "Bali", country_name: "Indonesia" },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      featuredCities: null,
      citiesSearchResult: null,
      citySearchkeyword: "",
    };
  }

  componentDidMount() {
    this.getFeaturedCities();
    //this.searchHandler();
  }

  onChangeKeywordHandler = (event) => {
    this.setState({ keyword: event.target.value });
  };

  searchHandler = () => {
    let keyword = this.state.keyword;
    var url = `${API.zomato.baseUrl}/cities`;
    axios
      .get(url, {
        headers: {
          "user-key": API.zomato.api_key,
        },
        params: {
          q: keyword,
        },
      })
      .then(({ data }) => {
        if (data.status === "success") {
          this.setState({
            citiesSearchResult: data.location_suggestions,
            keyword: "",
            citySearchkeyword: keyword,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  getFeaturedCities = () => {
    var url = `${API.zomato.baseUrl}/cities`;
    axios
      .get(url, {
        headers: {
          "user-key": API.zomato.api_key,
        },
        params: {
          city_ids: "74,11052,170",
        },
      })
      .then(({ data }) => {
        if (data.status === "success") {
          this.setState({ featuredCities: data.location_suggestions });
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <ImageAndWelcome />
        <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
          <CityList
            title={"Featured Cities"}
            cities={this.state.featuredCities}
          />
          <Search
            value={this.state.keyword}
            onClickSearch={this.searchHandler}
            onChangeKeyword={this.onChangeKeywordHandler}
          />
          {this.state.citySearchkeyword !== "" && (
            <CityList
              showSubtitle={true}
              title={"Search Result"}
              cities={this.state.citiesSearchResult}
              subtitle={this.state.citySearchkeyword}
            />
          )}
        </div>
      </>
    );
  }
}

export default Home;
