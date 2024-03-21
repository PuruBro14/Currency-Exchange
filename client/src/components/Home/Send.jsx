import React from "react";
import "./assets/css/home.css";
import {
  Grid,
  Row,
  Col,
  Input,
  InputGroup,
  Panel,
  Button,
  SelectPicker,
} from "rsuite";

export default function Send() {
  const data = [
    "Eugenia",
    "Bryan",
    "Linda",
    "Nancy",
    "Lloyd",
    "Alice",
    "Julia",
  ].map((item) => ({ label: item, value: item }));
  return (
    <div>
      <Row>
        <Col md={1}></Col>
        <Col md={22}>
          <div className="inputsect">
            <div>
              <h5>Location</h5>
              <SelectPicker label="User" data={data} style={{ width: 324 }} />
            </div>
            <div>
              <h5>From</h5>
              <SelectPicker label="User" data={data} style={{ width: 324 }} />
            </div>
            <div>
              <h5>To</h5>
              <SelectPicker label="User" data={data} style={{ width: 324 }} />
            </div>
          </div>
          <div className="inputsect">
            <div>
              <h5>Product</h5>
              <SelectPicker label="User" data={data} style={{ width: 324 }} />
            </div>
            <div>
              <h5>Sending Amount</h5>
              <input
                label="User"
                data={data}
                className="amountinput"
                style={{ width: 324 }}
                placeholder="Amount"
              />
            </div>
            <div>
              <h5>Receving Amount</h5>
              <input
                label="User"
                data={data}
                className="amountinput"
                style={{ width: 324 }}
                placeholder="Amount"
              />
            </div>
          </div>
        </Col>
        <Col md={1}></Col>
      </Row>

      <Row className="tablerow">
        <Col md={1}></Col>
        <Col md={22}>
          <center>
            <Button appearance="primary">BOOK THIS ORDER</Button>
          </center>
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
}
