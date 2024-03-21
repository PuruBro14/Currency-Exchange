import React from "react";
import { Grid, Row, Col } from "rsuite";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
import "./assets/css/footer.css";
export default function Footer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <Grid fluid>
            <Row>
              <Col md={12} className="footercontent">
                <h6>Address</h6>
                <p className="text-justify">
                  P-701 to P-705 lorem ipsum , 7th floor, 11th tower, panchsheel
                  primerose, vatista , Gurugram, Hariyana
                </p>
              </Col>
              <Col md={6}>
                <h6>Products</h6>
                <ul className="footer-links">
                  <li>Send Money Abroad</li>
                  <li>Forex Prepaid Cards</li>
                  <li>Currency Notes</li>
                  <li>Guaranteed Investment</li>
                  <li>Certificate</li>
                  <li>Western Union</li>
                </ul>
              </Col>
              <Col md={6}>
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li>About Us</li>
                  <li>Home</li>
                  <li>Contribute</li>
                  <li>Privacy Policy</li>
                  <li>Sitemap</li>
                </ul>
              </Col>
            </Row>
          </Grid>

          <hr />
        </div>
        <div className="container">
          <Grid fluid>
            <Row>
              <Col md={12}>
                <p className="copyright-text">
                  Copyright &copy; 2017 All Rights Reserved by remiwire.
                </p>
              </Col>
              <Col md={12}>
                {" "}
                <ul className="social-icons">
                  <li>
                    <a className="facebook" href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a className="dribbble" href="#">
                      <FaInstagramSquare />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="#">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Grid>
        </div>
      </footer>
    </div>
  );
}
