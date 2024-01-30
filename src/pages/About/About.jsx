import React from "react";
import church from "../../assets/church.jpg";
import church2 from "../../assets/church2.jpg";

import "./About.scss"; 

const About = () => {
  return (
    <div className="about-main d-flex flex-column">
      <div className="head">
        <h2>About Us</h2>
      </div>
      <div className="about-intro ">
        <div className="content  ">
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
          <span>
            <i>
              ……..When he saw him, he was moved with compassion at the sight,
              came to him and bound up his wounds, pouring on oil and wine. He
              then hoisted him onto his own animal, brought him to an inn and
              took care of him. The next day, before he departed, he took out
              two silver coins, and gave them to the innkeeper with the request:
              'Take care of him. Whatever you spend beyond that, I will repay
              you when I return…. Luke 10: 33- 35.
            </i>
          </span>
          <br />
          <p>
            He wants us to be ‘the Good Samaritan’! Responding to this call, the
            Diocese of Thumpamon is taking up this Project of compassion, care
            and healing.
          </p>
        </div>
        <div className="img-container ">
          <div className="back-box"></div>
          <img src={church} alt="" className="about-img" />
        </div>
        
      </div>
      <div className="about-intro reverse">
          <div className="img-container">
          <div className="back-box left"></div>
          <img src={church2} alt="" className="about-img img-left" />
          </div>
          <div className="content">
            <h4>CONCEPT AND OBJECTIVES</h4>
            <p>
              The Project is taking its wings by holding Prakashadhara, the
              School for the ‘mentally challenged and the differently abled’,
              run by the Diocese, as the parental venture. A few incumbents of
              the School, after their schooling age, would still require
              continual care and support. The ‘Rehabilitation Centre’ in the
              Project is predominantly meant for them.
            </p>
            <p>
              The population of Pathanamthitta District in Kerala, with
              approximately 2700 square kilometres, is 1.3 million, where we
              have only a limited number of palliative care centres. The dilemma
              a family would face at an unexpected occurring of a terminal
              illness is indescribable. It is the time that one would require
              good counsel, enhanced care, guidance and better circumstances and
              surroundings to hold the dignity of life. Owing to the different
              circumstances and contexts of our lives, sometimes, those who have
              better financial resources may be deprived of the availability of
              time or resources of people while for those who have more time and
              people at hand, may not have sufficient financial resources. And,
              there would be people who are sometimes deprived of all these.
              Again, a gracious life and a dignified end of life are something
              anybody would deserve to have. The intended Palliative Care Centre
              is meant to fill those vacuums.
            </p>
            <p>
              The Centre in rehabilitation and palliative care holds the
              following objectives:
              <ul>
                <li>To provide continued training of variant
              skills for the students of matured age who ought to be moving out
              of the Prakashadhara School. </li>
              <li>To provide boarding and lodging for
              the selected matured students depending on the context of them,
              while the rest would be day commuters.</li>
              <li>To offer better medical
              and nursing care to people who are terminally ill but bound to
              home by making reasonably consistent visits by a team of doctors,
              nurses, hygienists and counsellors</li>
              <li>To provide bed side care with
              due admittance at the centre for those who deserve it.</li>
              <li>To give
              better guidance and counsel to the relatives of the terminally ill
              on required medical assistances and other essentials.</li>
              </ul> 
               All the
              aforementioned services will be offered to those who deserve
              irrespective of their religion, caste or sect.
            </p>
          </div>
        </div>
    </div>
  );
};

export default About;
