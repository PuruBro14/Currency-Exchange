import React from "react";
import { Grid, Row, Col } from "rsuite";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import "./assets/css/Aboutus.css";
export default function AboutUs() {
  return (
    <div>
      <div className="about-us-container">
        <div className="about-us-content">
          <Grid>
            <div>
              <h1 className="text-4xl font-semibold">About Us</h1>
              <div className="flex flex-col md:flex-row mt-5">
                <div>
                <p>
                  Welcome to Remiwire Money Exchange, your trusted partner in
                  currency exchange services. With years of experience in the
                  industry, we offer competitive rates and reliable service to
                  meet all your currency exchange needs.
                </p>
                <p>
                  At Remiwire Money Exchange, we understand the importance of
                  timely and secure transactions. Whether you are traveling
                  abroad, making international payments, or managing your
                  foreign investments, we strive to make currency exchange fast,
                  easy, and hassle-free.
                </p>
                <p>
                  Our team of dedicated professionals is committed to providing
                  you with personalized assistance and expert advice. We value
                  transparency and integrity, ensuring that you receive the best
                  exchange rates with no hidden fees.
                </p>
                <p>
                  Choose Remiwire Money Exchange for all your currency exchange
                  requirements and experience peace of mind with every
                  transaction.
                </p>
                </div>
                <div className="socialicons">
                  <FaFacebookF style={{ fontSize: 30, margin: 10 }} />
                  <FaInstagramSquare style={{ fontSize: 30, margin: 10 }} />
                  <FaTwitter style={{ fontSize: 30, margin: 10 }} />
                  <FaLinkedin style={{ fontSize: 30, margin: 10 }} />
                </div>
              </div>
              <Col md={1}></Col>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
}
