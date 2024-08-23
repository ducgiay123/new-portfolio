import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./footer.css";

const Footer = () => {
  const gitHub = "https://github.com/ducgiay123";
  const fb = "https://www.facebook.com/duc.giay1999";
  const linkedin = "https://www.linkedin.com/in/trung-vu-80b830221/";

  const handleClick = (link) => {
    window.open(link, "_blank");
  };
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    // Format the date as needed (e.g., "MM/DD/YYYY")
    const formattedDate = date.toLocaleDateString();
    setCurrentDate(formattedDate);
  }, []);
  return (
    <div className="footer">
      <div className="footerLeft">
        <div className="github">
          <GitHubIcon
            style={{ color: "white" }}
            fontSize="medium"
            onClick={() => handleClick(gitHub)}
          />
        </div>
        <div className="phone">
          <LinkedInIcon
            style={{ color: "white" }}
            fontSize="medium"
            onClick={() => handleClick(linkedin)}
          />
        </div>
        <div className="gmail">
          <FacebookIcon
            fontSize="medium"
            style={{ color: "white" }}
            onClick={() => handleClick(fb)}
          />
        </div>
      </div>
      <div className="footerRight">
        <p align="right">
          Coppyright © {currentDate} Duc Trung Works, Inc - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
