import React from "react";
import { Fade } from "react-awesome-reveal";
const Footer = () => {
  return (
    <footer className="'bck_red">
      <Fade triggerOnce delay={500}>
        <div className="font_righteous footer_logo_venue">
          the Nairobi Festival
        </div>
        <div className="footer_copyright">
          the Nairobi Festival 2024 all rights reserved
        </div>
      </Fade>
    </footer>
  );
};
export default Footer;
