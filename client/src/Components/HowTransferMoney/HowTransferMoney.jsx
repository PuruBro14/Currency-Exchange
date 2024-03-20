import React from "react";
import { Grid, Row, Col } from "rsuite";
import { Link } from "react-router-dom";
import "./assets/css/howtmoney.css";
export default function HowTransferMoney() {
  return (
    <div>
      <h2 className="htsmoneyhead">How to transfer money in 3 easy steps</h2>
      <Grid fluid>
        <Row>
          <Col md={2}></Col>
          <Col md={7}>
            <div className="cardname">
              <img src="https://media.istockphoto.com/id/700287204/photo/female-user-passes-security-authorization-system.jpg?s=1024x1024&w=is&k=20&c=RYUYA6EZ_Wm89gPFc5mc3kdIS-d8Wa2tRE2ySweqnLQ=" />
              <h3 className="cardnamehead">1. Create account</h3>
              <p className="cardnamepara">
                It takes just a few minutes, and all you need is an email
                address.
              </p>
            </div>
          </Col>
          <Col md={7}>
            <div className="cardname">
              <img src="https://media.istockphoto.com/id/2020209499/photo/close-up-of-a-black-computer-keyboard-with-a-blue-light-overlay-technology-background.jpg?s=1024x1024&w=is&k=20&c=BGeQeiaMvI7XvA1AYVYg7T_A6F50oycf-GyBb84brFQ=" />
              <h3 className="cardnamehead">2. Enter details</h3>
              <p className="cardnamepara">
                Add recipient (you'll need their address, bank account/IBAN,
                swift/BIC) and payment information.
              </p>
            </div>
          </Col>
          <Col md={7}>
            <div className="cardname">
              <img src="https://media.istockphoto.com/id/1498914710/photo/3d-render-illustration-approve-or-reject-mail-sign-postal-document-concept-with-dark-brown.jpg?s=2048x2048&w=is&k=20&c=Yag-RyXxZD12zR7GyY_dR5-9zuc4o9hj7RXELzaWdrE=" />
              <h3 className="cardnamehead">3. Confirm and send</h3>
              <p className="cardnamepara">
                Check the currencies and amount are correct, get the expected
                delivery date, and send your money transfer.
              </p>
            </div>
          </Col>
        </Row>
      </Grid>
      <Link to="login">
        <button className="htmbtn">Get Started</button>
      </Link>
    </div>
  );
}
