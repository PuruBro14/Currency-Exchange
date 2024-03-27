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
    fromImg: "",
    toImg: "",
    currentRate: "",
  });
  const [totalAmount, setTotalAmount] = useState(0);
  const [currentCurrValue, setCurrentCurrValue] = useState();
  const[totalEntries,setTotalEntries]=useState([]);

  useEffect(() => {
    if(convertFormValue.to!==''){
    const getToCurrValue = () => {
      const dashIndex = convertFormValue.to.indexOf("-");
      const toCurrency = convertFormValue.to.substring(0, dashIndex).trim();
      if (currentCurrValue !== undefined) {
        console.log(currentCurrValue);
        const currentCurrency = currentCurrValue[toCurrency];
        const convertTo = convertFormValue?.amount;
        const totalValueAmt = parseInt(convertTo) * currentCurrency;
        sum+=totalValueAmt
        setTotalAmount(totalValueAmt);
      }
    }
    getToCurrValue();
    };
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

  const handleAddMore=()=>{
    if(convertFormValue.amount!=='' || convertFormValue.from!=='' || convertFormValue.to!=='' || convertFormValue.currentRate!=='' || convertFormValue.fromImg!=='' || convertFormValue.toImg!==''){
    setTotalEntries([...totalEntries,{...convertFormValue}])
    setConvertFormValue({
      amount: "",
    from: "",
    to: "",
    fromImg: "",
    toImg: "",
    currentRate: "",
    })
  }
  }

  const bookOrder=()=>{
    alert("Order placed")
  }

  return (
    <div className="w-11/12 mx-auto">
      <div>
       
          <div className="flex flex-row justify-around">
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
              <input placeholder="Rate" className="amountinput" 
               onChange={(e) => {
                  setConvertFormValue({
                    ...convertFormValue,
                    currentRate: e.target.value,
                  });
                }}
              />
            </div>
          </div>
      </div>

      <div>
      {
        totalEntries?.map((ele,index)=>(
          <div>
            <table className="mt-8">

              <tr>
              {
                Object.keys(ele).map((key,index)=>{
                   if(key!=='fromImg'){  
                    if(key!=='toImg'){
                  return <th key={key}>{key}</th>
                    }
                   }
                   return null;
                })
              }
              </tr>

              <tr>
                 {
                Object.values(ele).map((key,index)=>{
                 if(index!==3){
                  if(index!==4){
                  return <th key={key}>{key}</th>
                 }
                }
                })
              }
              </tr>
            </table>
          </div>
        ))
      }
      </div>


      {
      <div style={{ marginTop: "20px" }}>
          <Button className="w-full text-4xl" onClick={handleAddMore}>Add More</Button>&nbsp;
      </div>
}
      <Row className="tablerow">
        <Col md={1}></Col>
        <Col md={22}>
          <h5 style={{ marginTop: 20 }}>Total Amount</h5>
          <h3>{totalAmount || 0}</h3>

          <center>
            <Button appearance="primary" onClick={bookOrder}>BOOK THIS ORDER</Button>
          </center>
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
}
