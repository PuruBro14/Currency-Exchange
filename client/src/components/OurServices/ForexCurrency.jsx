import React from "react";
import { Grid, Row, Col } from "rsuite";
import "./assets/css/ourservices.css";
export default function ForexCurrency() {
  return (
    <div>
      <div className="fc_container">
        <div className="fc_content">
          <h2>Forex Currency</h2>
          <Grid>
            <Row>
              <Col md={12} className="fc_para">
                <p>
                  "Unlock global opportunities with seamless currency exchange
                  at Remiwire."
                </p>
                <p>
                  "Exchange currencies effortlessly with competitive rates and
                  zero hidden fees at Remiwire."
                </p>
                <p>
                  "Navigate the forex market confidently with expert guidance
                  from Remiwire."
                </p>
                <p>
                  "Maximize your international transactions with favorable
                  exchange rates from Remiwire."
                </p>
                <p>
                  "Stay ahead in the currency market with real-time updates and
                  personalized insights from Remiwire."
                </p>
                <p>
                  "Trust Remiwire for secure and efficient currency conversions
                  tailored to your needs."
                </p>
                <p>
                  "Experience the ease of currency exchange with our
                  user-friendly platform at Remiwire."
                </p>
                <p>
                  "Exchange currency with peace of mind knowing that your
                  transactions are handled with utmost security at Remiwire."
                </p>
                <p>
                  {" "}
                  "From USD to EUR and beyond, Remiwire offers a wide range of
                  currency pairs for your trading needs."
                </p>
                <p>
                  {" "}
                  "Wherever your journey takes you, Remiwire ensures smooth
                  currency exchanges to fuel your global ventures."
                </p>
              </Col>
              <Col md={12}>
                <img src="https://www.investopedia.com/thmb/DtgpoHfba96hPj0k9KGJ1lisEaM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-483658563-fbe002bf7f6d467a94d87cd153ddfa73.jpg" />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  );
}
