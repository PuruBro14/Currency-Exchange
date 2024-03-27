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
  }, [convertFormValue.from]);

  const convertBookHandler = () =>{
    console.log(convertFormValue)
  }

  return (
    <div>
      <Row>
        <Col md={1}></Col>
        <Col md={22}>
          <div className="inputsect">
            
            
           
            
          </div>
        </Col>
        <Col md={1}></Col>
      </Row>
     
     
    </div>
  );
}
