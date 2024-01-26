import React from 'react'
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";

const Socials = () => {
  return (
    <div className=" d-flex  flex-md-row  flex-column gap-5 justify-content-between pt-3 px-1 px-lg-5">
        <div className="left d-md-flex ">
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
        <div className="left d-flex">
          <FacebookIcon fontSize="small" />
          <InstagramIcon fontSize="small" />
          <XIcon fontSize="small" />
          <GoogleIcon fontSize="small" />
        </div>
      </div>
  )
}

export default Socials