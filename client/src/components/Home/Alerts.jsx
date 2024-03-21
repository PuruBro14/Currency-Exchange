import React from "react";
import { Grid, Row, Col } from "rsuite";
export default function Alerts() {
  return (
    <div>
      <Grid fluid>
        <Row>
          <Col md={11}>
            <h4 className="alertsheading">
              We'll keep an eye on the market for you
            </h4>
            <p className="alertspara">
              Currency markets are always moving. Get exchange rate alerts so
              you never miss your desired rate.
            </p>
            <button className="alertsratebtn">Get Rate Alerts</button>
          </Col>
          <Col md={11}>
            <img
              src="https://media.istockphoto.com/id/1051694430/photo/3d-illustration-of-economic-growth-background.jpg?s=1024x1024&w=is&k=20&c=zTp1jf5Gp5gy8TTPH72ddl_dXq-tHuTJRFZV3sU8PEo="
              className="alertsgraphs"
            ></img>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
