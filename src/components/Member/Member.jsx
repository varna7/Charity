import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import "./Member.scss";

const Member = () => {
  return (
    <div className="member py-4">
      <div className="img-box">
        <img src="https://placehold.co/300x400" alt="" />
        <div className="content w-75">
        <div className="content-box ">
          <div className="left ">
            <h6>VOLUNTEER</h6>
            <h5>John Doe</h5>
            <p>
              Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu
              scipit.
            </p>
          </div>
          <div className="socials ">
            <div className="social-item">
              <FacebookIcon fontSize="small" color="primary" />
            </div>
            <div className="social-item">
              <InstagramIcon fontSize="small" color="primary" />
            </div>
            <div className="social-item">
              <XIcon fontSize="small" color="primary" />
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Member;
