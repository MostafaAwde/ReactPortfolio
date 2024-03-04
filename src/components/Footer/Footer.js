import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import './footer.css'

export const Footer = () => {
  return (
    <div className="footer">
      <div class="footer-content">
        <div className="colz">
          <div className="colz-icon">
            <p>Follow us on: </p>
            <a href="#">
              <FaFacebook className="icons" style={{ color: "#1877f2" }} />
            </a>
            <a href="#">
              <FaInstagram className="icons" style={{ color: "#e4405f" }} />
            </a>
            <a href="#">
              <FaLinkedin className="icons" style={{ color: "#0a66c2" }} />
            </a>
            <a href="#">
              <RiTwitterXFill className="icons" style={{ color: "#14171a" }} />
            </a>
          </div>
        </div>
        <p class="contact-email">Contact us: info@example.com</p>
        <p class="all-rights">© 2023 Mind's Eye. All Rights Reserved.</p>
      </div>
    </div>
  );
};
