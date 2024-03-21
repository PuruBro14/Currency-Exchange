import React from "react";
import { Grid, Row, Col } from "rsuite";
import "./assets/css/ourservices.css";
export default function PrepaidTravelCard() {
  return (
    <div>
      <div className="ptc_container">
        <div className="ptc_content">
          <h2>Prepaid Travel Card</h2>
          <Grid>
            <Row>
              <Col md={12} className="ptc_para">
                <h5>Introducing Remiwire's Prepaid Travel Card</h5>
                <p>
                  Travel smart and stress-free with the Remiwire Prepaid Travel
                  Card. Whether you're jetting off for business or leisure, our
                  travel card is your ultimate companion for seamless
                  transactions worldwide.
                </p>
                <h5>Convenience at Your Fingertips</h5>
                <p>
                  Say goodbye to the hassle of carrying cash or worrying about
                  currency exchange rates. With our prepaid travel card, you can
                  load multiple currencies onto a single card, giving you the
                  flexibility to spend in local currency wherever you go.
                </p>
                <h5>Global Acceptance</h5>
                <p>
                  From bustling city streets to remote beachside destinations,
                  our travel card is accepted at millions of locations
                  worldwide, including ATMs, restaurants, hotels, and shops.
                  Enjoy the convenience of accessing your funds wherever your
                  journey takes you.
                </p>
                <h5>Security and Peace of Mind</h5>
                <p>
                  Travel with confidence knowing that your funds are protected
                  against loss or theft. Our prepaid travel card comes with
                  advanced security features, including EMV chip technology and
                  PIN protection, keeping your money safe and secure throughout
                  your travels.
                </p>
                <h5>Budget-Friendly Travel</h5>
                <p>
                  Stay on budget and avoid overspending with our prepaid travel
                  card. Easily track your expenses online or through our mobile
                  app, and reload your card as needed, ensuring you always have
                  access to funds without the risk of carrying excess cash.
                </p>
                Travel smart, travel with Remiwire.
              </Col>
              <Col md={12}>
                <img src="https://studycafe.in/cdn-cgi/image/fit=contain,format=webp,gravity=auto,metadata=none,quality=80,width=1200,height=730/wp-content/uploads/2023/05/Levy-of-Charge-on-Forex-Prepaid-Cards-and-Travel-Cards.jpg" />
                <div className="ptc_para">
                  <h5 style={{ marginTop: "20px" }}>24/7 Customer Support</h5>
                  <p>
                    Whether you have questions about your card or need
                    assistance while traveling, our dedicated customer support
                    team is available around the clock to help you with any
                    inquiries or concerns.
                  </p>
                  <h5>Get Your Prepaid Travel Card Today</h5>
                  <p>
                    Experience the convenience and peace of mind of traveling
                    with the Remiwire Prepaid Travel Card. Sign up today and
                    start exploring the world with confidence.
                  </p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  );
}
