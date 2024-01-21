import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from "../../assets/slider1.png";
import slide2 from "../../assets/slider2.png";
import slide3 from "../../assets/slider3.png";
import slide4 from "../../assets/slider4.png";
import slide5 from "../../assets/slider5.png";
import about from "../../assets/about.jpg";
import CountUp from 'react-countup';
import CheckIcon from '@mui/icons-material/Check';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PaidIcon from '@mui/icons-material/Paid';
import HandshakeIcon from '@mui/icons-material/Handshake';

import Header from "../../components/Header/Header";
import "./Home.scss";

const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: "0",
   
  };

  return (
    <div className="home">
      <Header />
      <Slider {...settings}>
        <div className="slide-item py-5"><img src={slide1} alt="" /></div>
        <div className="slide-item py-5"><img src={slide2} alt="" /></div>
        <div className="slide-item py-5"><img src={slide3} alt="" /></div>
        <div className="slide-item py-5"><img src={slide4} alt="" /></div>
        <div className="slide-item py-5"><img src={slide5} alt="" /></div>

    </Slider>
    <section>
      <div className="d-flex flex-column  align-items-center gap-3">
        <h6>GET INVOLVED</h6>
        <h1>Let's Make A difference Today</h1>
        <div className="d-flex flex-column flex-md-row px-5">
          <div className="item-container">
            <div className="item">
              <VolunteerActivismIcon color="primary" fontSize="inherit"/>
              <h4>Become A Volunteer</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. tenetur maxime  commodo teneture</p>
              <button className="highlight">Join Us</button>


            </div>
          </div>
          <div className="item-container">
            <div className="item">
              <HandshakeIcon color="primary" fontSize="inherit"/>
              <h4>Become A Partner</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. tenetur maxime  commodo teneture</p>
              <button className="highlight">Learn More</button>


            </div>
          </div>
          <div className="item-container">
            <div className="item ">
              <PaidIcon color="primary" fontSize="inherit"/>
              <h4>Donate To support</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. tenetur maxime  commodo teneture</p>
              <button className="highlight">Donate Now</button>


            </div>
          </div>
        </div>
      </div>
    </section>
      <section>
        <div className="d-flex flex-column flex-lg-row w-100 p-2 p-md-5">
          <div className="img-container w-50 ps-5">
            <img src={about} alt="" />
            <div className="stats d-flex gap-3 justify-content-center align-items-center ">
              <div className="stat-item ">
                <h1><CountUp duration={5} end={15}/>k+</h1>
                <h5>VOLUNTEER</h5>
              </div>
              <hr />
              <div className="stat-item">
              <h1><CountUp duration={5} end={380}/>+</h1>
                <h5>SPONSERS</h5>
              </div>
              <hr />
              <div className="stat-item">
              <h1><CountUp duration={5} end={125}/></h1>
                <h5>BRANCHES</h5>
              </div>
              <hr />
              <div className="stat-item">
              <h1><CountUp duration={5} end={75}/>+</h1>
                <h5>AWARDS</h5>
              </div>
            </div>

          </div>
          <div className="content w-50 px-5 px-md-5">
            <h6>ABOUT US</h6>
            <h1>Our Work Promise To Uphold The Trust Placed</h1>
            <p>Repellendus litora velit irure ea nostrud cum autem, quam. Gravida harum incidunt varius volutpat facilisi purus, eum rerum, hymenaeos sit quaerat dictumst doloremque ultrices impedit, iaculis!</p>
            <div className="inner-content d-flex gap-4">
              <ul>
                <li className="p-1">
                  <CheckIcon color="primary"/>
                  <span className="mx-2">Porta tempora facilisi, hac</span>
                </li>
                <li className="p-1">
                  <CheckIcon color="primary"/>
                  <span className="mx-2">Beatae hac ultrices, nisi.</span>
                </li><li className="p-1">
                  <CheckIcon color="primary"/>
                  <span className="mx-2">Incididunt vel inci dunt</span>
                </li><li className="p-1">
                  <CheckIcon color="primary"/>
                  <span className="mx-2">Porta tempora facilisi, hac</span>
                </li>
              </ul>
              <div className="exp px-4 d-flex flex-column justify-content-center align-items-center">
                <h1>28</h1>
                <h4 >YEARS</h4>
                <h5> OF EXPERIENCE</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
