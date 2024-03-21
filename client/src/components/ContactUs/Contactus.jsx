import React from "react";
import "./assets/css/Contactus.css";
import { Grid, Row, Col } from "rsuite";
import { FaMobileAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
export default function Contactus() {
  return (
    <>
      <div className="contactusdiv">
        <Grid fluid>
          <Row>
            <Col md={2}></Col>
            <Col md={20}>
              <Row className="contact_inner">
                <Col md={2}></Col>
                <Col md={10} className="contacthead">
                  <h3>Contact Us</h3>
                  <p>
                    Feel Free to contact us any time. We will get back to you as
                    soon as we can!.
                  </p>
                  <input
                    type="text"
                    className="form-control form-group"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    className="form-control form-group"
                    placeholder="Email"
                  />
                  <textarea placeholder="Message"></textarea>
                  <button className="button_contact">submit</button>
                </Col>
                <Col md={12}>
                  <div className="contact_info_sec">
                    <h4>Contact Info</h4>
                    <div className="d-flex info_single align-items-center">
                      <FaMobileAlt style={{ fontSize: 20, marginRight: 10 }} />
                      <span>+91 8009 054294</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      <MdMarkEmailUnread
                        style={{ fontSize: 20, marginRight: 10 }}
                      />
                      <span>info@flightmantra.com</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      <FaMapLocationDot
                        style={{ fontSize: 20, marginRight: 10 }}
                      />
                      <span>
                        1000+ Travel partners and 65+ Service city across India,
                        USA, Canada & UAE
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Grid>
      </div>
    </>
  );
}
