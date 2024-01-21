import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import smile from "../../assets/smile.jpg";
import study from "../../assets/study.jpg";
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <Carousel>
        <Carousel.Item interval={4000}>
          <img
            className="overlay d-block w-100 h-100"
            src={study}
            alt="First slide"
          />
          <Carousel.Caption>
            <h6 className="">DONATE TO CONTRIBUTE</h6>
            <h1>Let's Build The <br/> Better World <br/>Together</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <p><button className="highlight">Donate fund</button> <button>Read More</button></p>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="overlay d-block w-100 h-100"
            src={smile}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h6>CONTRIBUTE TO EDUCATION</h6>
            <h1>Your Small Help Can <br/> Make a Difference</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <p><button className="highlight">Donate fund</button> <button>Read More</button></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
