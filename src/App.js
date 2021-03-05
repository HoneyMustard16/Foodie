import React, { Component } from "react";
import "bootswatch/dist/minty/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import City from "./Pages/City";
import Footer from "./Components/Footer";
import RestaurantDetail from "./Pages/RestaurantDetail";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/city/:city_id" component={City} />
        <Route path="/restaurant/:restaurant_id" component={RestaurantDetail} />
        <Footer />
      </Router>
    );
  }
}

export default App;
