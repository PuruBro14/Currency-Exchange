import React from "react";
import { Grid, Row, Col, Input, InputGroup } from "rsuite";
import "./assets/css/Location.css";
import SearchIcon from "@rsuite/icons/Search";
export default function Location() {
  return (
    <div>
      <div className="nearloctiondiv">
        <Grid fluid>
          <Row>
            <Col md={1}></Col>
            <Col md={22} className="divFlex">
              <div className="currencyconvertor_main">
                <h3>Near Location</h3>
                <div className="displayFlxDiv">
                  <div>
                    <InputGroup>
                      <Input />
                      <InputGroup.Button>
                        <SearchIcon />
                      </InputGroup.Button>
                    </InputGroup>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <img src="https://www.remitx.com/remitx-images/city-images/NEW-DELHI.png" />
                        <br />
                        DELHI
                      </li>
                      <li>
                        <img src="https://www.remitx.com/remitx-images/city-images/GURUGRAM.png" />
                        <br />
                        GURUGRAM
                      </li>
                      <li>
                        <img src="https://www.remitx.com/remitx-images/city-images/GURUGRAM.png" />
                        <br />
                        NOIDA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}
