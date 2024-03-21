import React, { useEffect, useState } from "react";
import "./assets/css/home.css";
import axios from "axios";
import CurrencyInput from "./assets/js/currencyInput";

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

export default function Convert() {
  const [convertFormValue, setConvertFormValue] = useState({
    amount: "",
    from: "",
    to: "",
    currentRate: "",
    fromImg: "",
    toImg: "",
  });
  const [allCurrencyData, setAllCurrencyData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [currentCurrValue, setCurrentCurrValue] = useState();

  const getCurrencyList = (searchString) => {
    const filteredArrayCurrency = countryCurrencyList.filter((currency) => {
      return (
        currency.label.toLowerCase().includes(searchString.toLowerCase()) ||
        currency.value.toLowerCase().includes(searchString.toLowerCase())
      );
    });

    setCountryCurrency(filteredArrayCurrency);
  };

  const showCurrencyList = () => {
    setShowList(true);
  };

  const hideCurrencyList = () => {
    // setShowList(false);
  };

  useEffect(() => {
    const getToCurrValue = () => {
      const dashIndex = convertFormValue.to.indexOf("-");

      const toCurrency = convertFormValue.to.substring(0, dashIndex).trim();
      if (currentCurrValue !== undefined) {
        const currentCurrency = currentCurrValue[toCurrency];
        const convertTo = convertFormValue?.amount;
        const totalValueAmt = parseInt(convertTo) * currentCurrency;

        setTotalAmount(totalValueAmt);
      }
    };
    getToCurrValue();
  }, [convertFormValue.to]);
  useEffect(() => {
    const getCurrencyValue = async () => {
      try {
        const dashIndex = convertFormValue.from.indexOf("-");
        const fromCurrency = convertFormValue.from
          .substring(0, dashIndex)
          .trim();

        if (fromCurrency !== "") {
          const response = await axios.get(
            "https://v6.exchangerate-api.com/v6/1902e21487d17680cb9fc088/latest/" +
              fromCurrency
          );

          setCurrentCurrValue(response?.data?.conversion_rates);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCurrencyValue();
    // Call the function immediately after defining it
  }, [convertFormValue.from]); // Include convertFormValue in the dependency array

  return (
    <div>
      <Row>
        <Col md={1}></Col>
        <Col md={22}>
          <div className="inputsect">
            <div>
              <h5>Amount</h5>
              <input
                onChange={(e) => {
                  setConvertFormValue({
                    ...convertFormValue,
                    amount: e.target.value,
                  });
                }}
                className="amountinput"
                style={{ width: 324 }}
                placeholder="Amount"
                value={convertFormValue.amount}
              />
            </div>
            <div>
              <h5>From</h5>

              <CurrencyInput
                convertFormValue={convertFormValue}
                setConvertFormValue={setConvertFormValue}
                currentType="from"
              />
            </div>
            <div>
              <h5>To</h5>
              <CurrencyInput
                convertFormValue={convertFormValue}
                setConvertFormValue={setConvertFormValue}
                currentType="to"
              />
            </div>
            <div>
              <h5>Current Rate</h5>
              <input placeholder="Rate" className="amountinput" />
            </div>
          </div>
        </Col>
        <Col md={1}></Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col md={9}></Col>
        <Col md={10}></Col>
        <Col md={5}>
          <Button appearance="primary">Add More</Button>&nbsp;
        </Col>
      </Row>
      <Row className="tablerow">
        <Col md={1}></Col>
        <Col md={22}>
          {/* <table style={{ display: "none" }}>
            <tr className="tablehead">
              <th>Currency</th>
              <th>Product</th>
              <th>Forex Amount</th>
              <th>INR Amount</th>
              <th>Action</th>
            </tr>
            <tr className="tablebody">
              <td>Euro</td>
              <td>Currency</td>
              <td>Note 10</td>
              <td>913.00</td>
              <td>Edit/Delete</td>
            </tr>
            <tr className="tablebody">
              <td>Euro</td>
              <td>Currency</td>
              <td>Note 10</td>
              <td>913.00</td>
              <td>Edit/Delete</td>
            </tr>
            <tr className="tablebody">
              <td>Euro</td>
              <td>Currency</td>
              <td>Note 10</td>
              <td>913.00</td>
              <td>Edit/Delete</td>
            </tr>
          </table> */}
          <h5 style={{ marginTop: 20 }}>Total Amount</h5>
          <h3>{totalAmount}</h3>

          <center>
            <Button appearance="primary">BOOK THIS ORDER</Button>
          </center>
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
}
