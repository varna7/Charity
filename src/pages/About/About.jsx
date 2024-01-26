import React from "react";
import church from "../../assets/church.jpg";
import "./About.scss";

const About = () => {
  return (
    <div className="about-main">
      <div className="head">
        <h2>About Us</h2>
      </div>
      <div className="about-intro d-flex p-5 gap-5">
        <div className="content  d-flex flex-column w-50">
          <h4>INTRODUCTION</h4>
          <p>
            ‘Mar Eusebius Palliative Care and Rehabilitation Centre’ is the
            fulfilment of the dream of His Grace Philipose Mar Eusebius
            Metropolitan (1931-2009) of blessed memory who had believed and
            visualized in the greater care offered to the vulnerable and needy
            in the society as the basic responsibility of the Church. His Grace
            Kuriakose Mar Clemis Metropolitan, the right heir and successor of
            Mar Eusebius would like to take up this dream project of his
            predecessor with prime significance, and being a philanthropist
            himself, His Grace would like to see this being commissioned.
          </p>
          <p>
            Primarily this is a modest endeavour of the Church to visibly
            participate in the compassionate and healing ministry of our Lord.
          </p>
          <span><i>
            ……..When he saw him, he was moved with compassion at the sight, came
            to him and bound up his wounds, pouring on oil and wine. He then
            hoisted him onto his own animal, brought him to an inn and took care
            of him. The next day, before he departed, he took out two silver
            coins, and gave them to the innkeeper with the request: 'Take care
            of him. Whatever you spend beyond that, I will repay you when I
            return…. Luke 10: 33- 35.
            </i></span>
            <br />
          <p>
            He wants us to be ‘the Good Samaritan’! Responding to this call, the
            Diocese of Thumpamon is taking up this Project of compassion, care
            and healing.
          </p>
        </div>
        <div className="img-container flex-1 w-50">
          <div className="back-box"></div>
          <img
            src={church}
            alt=""
            className="about-img"
            
          />
        </div>
      </div>
    </div>
  );
};

export default About;
