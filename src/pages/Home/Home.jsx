import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import about from "../../assets/about.jpg";
import CountUp from "react-countup";
import CheckIcon from "@mui/icons-material/Check";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PaidIcon from "@mui/icons-material/Paid";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ProgressBar from "react-bootstrap/ProgressBar";
import Header from "../../components/Header/Header";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <section>
        <div className="d-flex flex-column  align-items-center p-3 p-md-5  gap-3">
          <h6>GET INVOLVED</h6>
          <h1>Let's Make A difference Today</h1>
          <div className="d-flex flex-column flex-md-row  ">
            <div className="item-container">
              <div className="item">
                <VolunteerActivismIcon color="primary" fontSize="inherit" />
                <h4>Become A Volunteer</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  tenetur maxime commodo teneture
                </p>
                <button className="highlight">Join Us</button>
              </div>
            </div>
            <div className="item-container">
              <div className="item">
                <HandshakeIcon color="primary" fontSize="inherit" />
                <h4>Become A Partner</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  tenetur maxime commodo teneture
                </p>
                <button className="highlight">Learn More</button>
              </div>
            </div>
            <div className="item-container">
              <div className="item ">
                <PaidIcon color="primary" fontSize="inherit" />
                <h4>Donate To support</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  tenetur maxime commodo teneture
                </p>
                <button className="highlight">Donate Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="d-flex flex-column bg-white flex-lg-row w-100 p-3 p-md-5 gap-5">
          <div className="img-container w-100 w-lg-50 ps-lg-5 mb-5">
            <img src={about} alt="" />
            <div className="stats d-flex gap-3 justify-content-center align-items-center ">
              <div className="stat-item ">
                <h1>
                  <CountUp duration={5} end={15} />
                  k+
                </h1>
                <h5>VOLUNTEER</h5>
              </div>
              <div class="vl"></div>
              <div className="stat-item">
                <h1>
                  <CountUp duration={5} end={380} />+
                </h1>
                <h5>SPONSERS</h5>
              </div>
              <div class="vl "></div>
              <div className="stat-item">
                <h1>
                  <CountUp duration={5} end={125} />
                </h1>
                <h5>BRANCHES</h5>
              </div>
              <div class="vl"></div>
              <div className="stat-item">
                <h1>
                  <CountUp duration={5} end={75} />+
                </h1>
                <h5>AWARDS</h5>
              </div>
            </div>
          </div>
          <div className="content w-100 w-lg-50 px-3 px-md-5">
            <h6>ABOUT US</h6>
            <h1>Transformative Care Beyond Boundaries</h1>
            <p>
              Embark on a compassionate journey with our Rehabilitation and
              Palliative Care Centre, intricately woven around Prakashadhara—a
              sanctuary for the mentally challenged and differently-abled in the
              vast Pathanamthitta District, Kerala. Our mission is to redefine
              family support during terminal illnesses, offering solace and
              guidance.
            </p>
            <div className="inner-content d-flex flex-column-reverse flex-md-row gap-4">
              <ul>
                <li className="p-1">
                  <CheckIcon color="primary" />
                  <span className="mx-2">Skillful Transition</span>
                </li>
                <li className="p-1">
                  <CheckIcon color="primary" />
                  <span className="mx-2">Versatile Accommodation</span>
                </li>
                <li className="p-1">
                  <CheckIcon color="primary" />
                  <span className="mx-2">Holistic Medical Support</span>
                </li>
                <li className="p-1">
                  <CheckIcon color="primary" />
                  <span className="mx-2">Specialized Bedside Care</span>
                </li>
              </ul>
              <div className="exp px-4 d-flex flex-column justify-content-center align-items-center">
                <h1>28</h1>
                <h4>YEARS</h4>
                <h5> OF EXPERIENCE</h5>
              </div>
            </div>
            <button className="highlight"><Link to="/about">Learn More</Link></button>
          </div>
        </div>
      </section>
      <section>
        <div className="d-flex flex-column w-100  p-3 p-md-5 gap-4">
          <h6 className="px-md-5">RECENT CAMPAIGN</h6>
          <div className="head d-flex flex-column flex-md-row w-100  align-items-end px-md-5">
            <h1 className="w-md-50">
              Donate To Charity Campaign Around The World!
            </h1>
            <div className=" w-md-50 d-flex  justify-content-md-end">
              <button className="highlight">View All Campaigns</button>
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row gap-5 px-md-5">
            <div className="campaign  ">
              <img src={about} alt="" />
              <h2>Financial Help for Poor Families</h2>
              <div className="d-flex justify-content-between px-3 ">
                <div className="d-flex flex-column align-items-center justify-content-center ">
                  <p>RAISED</p>
                  <h4>$7000</h4>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <p>REMAINING</p>
                  <h4>$3000</h4>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <p>EXPIRE DATE</p>
                  <h4>19 March, 2024</h4>
                </div>
              </div>
              <ProgressBar
                now={70}
                label={`Raised Amount : ${70}%`}
                variant="warning"
              />
              <div className="btn-group d-flex gap-4">
                <button className="highlight">Donate Now</button>
                <button className="detail">Program Details</button>
              </div>
            </div>
            <div className="campaign ">
              <img src={about} alt="" />
              <h2>Send child To School For Education</h2>
              <div className="d-flex justify-content-between px-3">
                <div className="d-flex flex-column align-items-center justify-content-center ">
                  <p>RAISED</p>
                  <h4>$6000</h4>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <p>REMAINING</p>
                  <h4>$4000</h4>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <p>EXPIRE DATE</p>
                  <h4>19 March, 2024</h4>
                </div>
              </div>
              <ProgressBar
                now={60}
                label={`Raised Amount : ${60}%`}
                variant="warning"
              />
              <div className="btn-group d-flex gap-4">
                <button className="highlight">Donate Now</button>
                <button className="detail">Program Details</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="action d-flex flex-column justify-content-between flex-lg-row w-100 gap-5 p-3 p-lg-5">
          <div className="content w-100 w-lg-50 d-flex flex-column gap-4 p-2 p-lg-5">
            <h6>CALL TO ACTION</h6>
            <h1>Fundraising For The People And Causes You Care About</h1>
            <p>
              Senectus elementum fugiat non exercitationem ullamco, asperiores
              occaecat placerat maxime laboriosam tortor voluptates, aenean
              torquent voluptas pharetra diam.
            </p>
          </div>
          <div className="action-form w-100 w-lg-50 p-5 mx-lg-5 ">
            <form action="" method="post" className="d-flex flex-column gap-4 ">
              <input type="text" name="" id="" placeholder="Name" />
              <input type="email" name="" id="" />
              <div className="d-flex gap-3">
                <input type="text" name="" id="" className="w-75" />
                <input type="text" name="" id="" className="w-25" />
              </div>
              <button className="highlight">Get Involve Today</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
