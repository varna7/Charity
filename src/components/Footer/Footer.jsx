import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import footer from "../../assets/footer.jpg";
import logo from "../../assets/logo.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-main w-100 p-4">
      <div className="footer-content">
        <Row >
          <Col xs={12} md={4}>
            <h6>ABOUT</h6>
            <p>
              The 'Mar Eusebius Palliative Care and Rehabilitation Centre' is a
              compassionate initiative by the Diocese of Thumpamon, providing
              holistic care and support to the vulnerable, including the
              mentally challenged and terminally ill, without discrimination
              based on religion or caste.
            </p>
          </Col>
          <Col xs={12} md={3}>
            <h6>LATEST POST</h6>
            <img src={footer} alt="" className="post-img" />
          </Col>
          <Col xs={12} md={3}>
            <h6>CONTACT INFO</h6>
            <div className=" d-flex  flex-column gap-2">
              <div className="item">
                <CallIcon fontSize="small" />
                <span>+91 9765123456</span>
              </div>
              <div className="item">
                <EmailIcon fontSize="small" />
                <span>youremail@gmail.com</span>
              </div>
              <div className="item">
                <LocationOnIcon fontSize="small" />
                <span>Pathanamthitta, Kerala, India</span>
              </div>
            </div>
          </Col>

          <Col xs={12} md={2}>
            <h6>QUICK LINKS</h6>
            <ul className="d-flex flex-lg-column gap-2 align-items-start">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Home</li>

            </ul>
          </Col>
        </Row>
      </div>
      <hr />
      <div className="footer-info d-flex flex-column flex-md-row justify-content-md-between align-items-center">
        <div className="social d-flex gap-2">
          <FacebookIcon fontSize="small" />
          <InstagramIcon fontSize="small" />
          <XIcon fontSize="small" />
          <GoogleIcon fontSize="small" />
        </div>
        <div className="copyright d-flex flex-column align-items-center ">
          <div className="d-flex">
            <span>Privacy Policy</span>
            <div className="vl"></div>
            <span>Terms & Conditions</span>
          </div>
          <p>
            Copyright © 2024 Mar Eusebius Palliative Care and Rehabilitation
            Centre
          </p>
        </div>
        <img src={logo} alt="" className="logo"/>
      </div>
    </div>
  );
};

export default Footer;
