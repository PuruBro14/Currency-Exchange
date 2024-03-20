import React from "react";
import { Grid, Row, Col } from "rsuite";
import "./assets/css/ourservices.css";
export default function SendMoneyAbroad() {
  return (
    <div>
      <div className="sma_container">
        <div className="sma_content">
          <h2>Send Money Abroad</h2>
          <Grid>
            <Row>
              <Col md={12}>
                <div assName="sma_pclara">
                  <p>
                    Send money abroad seamlessly with Remiwire. Fast, secure,
                    and reliable transfers at your fingertips.
                  </p>
                  <p>
                    Say goodbye to hidden fees and long wait times. Trust
                    Remiwire for swift and affordable forex transfers worldwide.
                  </p>
                  <p>
                    Empower your global transactions with Remiwire. Experience
                    hassle-free money transfers with competitive exchange rates.
                  </p>
                  <p>
                    Unlock a world of possibilities with Remiwire. Transfer
                    money overseas effortlessly, ensuring your funds reach their
                    destination promptly.
                  </p>
                  <p>
                    Navigating international payments made simple. Choose
                    Remiwire for efficient and cost-effective forex transfers
                    anywhere, anytime.
                  </p>{" "}
                  <p>
                    With Remiwire, sending money abroad is as easy as a few
                    clicks. Enjoy peace of mind knowing your funds are handled
                    with utmost security and speed.
                  </p>{" "}
                  <p>
                    Why settle for less? Opt for Remiwire and enjoy low fees,
                    transparent rates, and lightning-fast transfers for all your
                    international remittance needs.
                  </p>{" "}
                  <p>
                    Trust Remiwire to bridge the gap between borders. Our
                    streamlined forex services ensure your money reaches loved
                    ones or business partners swiftly and securely.
                  </p>{" "}
                  <p>
                    Expand your horizons with Remiwire. Transfer money globally
                    with confidence, backed by our commitment to efficiency and
                    reliability.
                  </p>{" "}
                  <p>
                    Join countless satisfied customers who rely on Remiwire for
                    their international money transfer needs. Experience the
                    convenience of sending money abroad with ease.
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <img src="https://images.unsplash.com/photo-1591033594798-33227a05780d?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  );
}
