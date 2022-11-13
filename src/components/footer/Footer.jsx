import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className="f">
      <div className="f-left">
        <p>info@dhi.com | +123 567 789</p>
      </div>
      <div className="f-right">
        <div className="f-s">
        <a href="https://www.facebook.com/ayushman.caxyup.9/" target="_blank"  rel="noreferrer" > <FacebookIcon className="f-i" /></a>
        <a href="https://www.linkedin.com/in/dhiraj-deka-942a8922a/"> <LinkedInIcon className="f-i"/></a> 
          <TwitterIcon className="f-i"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
