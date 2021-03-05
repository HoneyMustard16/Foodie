import React from "react";
import "../Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="my-footer">
        <div className="container ">
          <div className="row">
            <div className="col-sm-4 text-center">
              <h5>About FoodParadise</h5>
              <ul>
                <li>
                  <a href="/#">About Us</a>
                </li>
                <li>
                  <a href="/#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 text-center">
              <h5>Support</h5>
              <ul>
                <li>
                  <a href="/#">FAQ</a>
                </li>
                <li>
                  <a href="/#">Help desk</a>
                </li>
                <li>
                  <a href="/#">Forums</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 text-center">
              <h5>Download App</h5>
              <ul>
                <li>
                  <a href="/#">Google Play</a>
                </li>
                <li>
                  <a href="/#">App Store</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="social-networks text-center"
            style={{ paddingBottom: 30 }}
          >
            <a href="/#" className="twitter">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="/#" className="facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="/#" className="google">
              <i className="fab fa-google-plus-square"></i>
            </a>
          </div>
        </div>
        <div className="footer-copyright text-center">
          <p>Copyright &copy; 2020 Foodie </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
