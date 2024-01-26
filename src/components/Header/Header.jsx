import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import smile from "../../assets/smile.jpg";
import study from "../../assets/study.jpg";
import palliative2 from "../../assets/palliative2.jpg"
import './Header.scss'

const carousel_data = [
  {
    img : palliative2,
    title:"DONATE TO CONTRIBUTE",
    header:"Let's Build The  Better World Together",
    desc:"Nulla vitae elit libero, a pharetra augue mollis interdum.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    img : study,
    title:"DONATE TO CONTRIBUTE",
    header:"Let's Build The  Better World Together",
    desc:"Nulla vitae elit libero, a pharetra augue mollis interdum.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
]

const Header = () => {
  return (
    <div className="header mb-3">
      <Carousel>
        {carousel_data.map((item,index)=>
        (
          <Carousel.Item interval={4000} key={index}>
          <img
            className=" d-block w-100 h-100 "
            src={item.img}
            alt="First slide"
          />
           <div className="overlay"></div>
          <Carousel.Caption>
            <h6 className="">{item.title}</h6>
            <h1>{item.header}</h1>
            <p>{item.desc} </p>
            <p><button className="highlight">Donate fund</button> <button>Read More</button></p>

          </Carousel.Caption>
        </Carousel.Item>
        )
          
        )}
        
        
      </Carousel>
    </div>
  );
};

export default Header;
