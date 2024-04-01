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
import {useDispatch} from 'react-redux';
import { setConvert } from "../../services/operations/authAPI";
import { bookOrderEndpoints } from "../../services/apis";
export default function Convert() {
  const { GET_ORDERS,DELETE_ORDERS } = bookOrderEndpoints;
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
  const dispatch=useDispatch();
  const[disabled,setDisabled]=useState(true);

  useEffect(() => {
    if(convertFormValue.to!==''){
    const getToCurrValue = () => {
      const dashIndex = convertFormValue.to.indexOf("-");
      const toCurrency = convertFormValue.to.substring(0, dashIndex).trim();
      if (currentCurrValue !== undefined) {
        const currentCurrency = currentCurrValue[toCurrency];
        const convertTo = convertFormValue?.amount;
        const totalValueAmt = parseInt(convertTo) * currentCurrency;
      }
    }
    getToCurrValue();
    currRateValue();
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
      const convertTo=parseFloat(convertFormValue.amount);
      const totalValueAmt=convertTo*parseFloat(convertFormValue.currentRate);
      setTotalAmount((prev)=>prev+totalValueAmt)
    setTotalEntries([...totalEntries,{...convertFormValue}])
    setConvertFormValue({
      amount: "",
    from: "",
    to: "",
    fromImg: "",
    toImg: "",
    currentRate: "",
    })
    setDisabled(false);
  }
  }

  const currRateValue=()=>{
    const dashToIndex = convertFormValue?.to.indexOf("-");
    const dashtoCurrency = convertFormValue?.to.substring(0, dashToIndex).trim();
    const toValue=currentCurrValue[dashtoCurrency]

    setConvertFormValue({...convertFormValue,currentRate:toValue})

  }

  const bookOrder=(e)=>{
    e.preventDefault();
    if(totalEntries.length==0){
      return;
    }
    dispatch(setConvert(totalEntries))
  }

  const fetchTableData=async()=>{
    const response=await axios.get(GET_ORDERS);
    setTotalEntries(response?.data?.data)
  }

  useEffect(()=>{
    fetchTableData();
  },[])

  const filterArray=(ele,i)=>{
   const itemId=ele?._id;

   if(!itemId){
    console.log("Item ID not found");
    return;
   }

   const response=axios.delete(DELETE_ORDERS/itemId).then((response)=>{
    console.log('Item deleted successfully')
    const filteredArr=totalEntries.filter((item,index)=>i!==index)
    setTotalEntries(filteredArr)
   }).catch((err)=>{
    console.error("Error while deleting the item",err)
   })
  }

  console.log('totalEntries',totalEntries);

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
               value={convertFormValue?.currentRate}
              />
            </div>
          </div>
      </div>

      {totalEntries?.length>0 &&
      <div>
        <table className="mt-8">
          <thead>
            <tr>
              {
                totalEntries?.length>0 && Object.keys(totalEntries[0]).map((key,index)=>{
                   if(key!=='fromImg'){  
                    if(key!=='toImg'){
                      if(key!=='_id'){
                        if(key!=='__v'){
                  return <th key={index}>{key}</th>
                    }
                   }
                  }
                }
                   return null;
                })
              }
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              totalEntries?.length>0 && totalEntries?.map((ele,index)=>(
                <tr key={index}>
                  {Object?.keys(ele).map((key,index)=>(
                    key!=='fromImg' && key!=='toImg' && key!=='_id' && key!=='__v' && key!=='ja' && (
                      <td key={index}>{ele[key]}</td>
                    )
                   ))}
                

            <td>
              <div className="w-8 flex flex-row gap-5">
                <button>Edit</button>
                <button onClick={()=>filterArray(ele,index)}>Delete</button>
              </div>
            </td>
            </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      }


      {
      <div className="mt-14 flex justify-center">
          <button className="w-fit text-4xl px-[24px] py-[6px] bg-richblack-800 text-white rounded hover:bg-richblue-500 transition-all duration-200" onClick={handleAddMore}>Add</button>&nbsp;
      </div>
}
      <Row className="tablerow">
        <Col md={1}></Col>
        <Col md={22}>
          <h5 style={{ marginTop: 20 }}>Total Amount</h5>
          <h3>{totalAmount.toFixed(2) || 0}</h3>

          <center>
            <Button appearance="primary" onClick={bookOrder} disabled={disabled}>BOOK THIS ORDER</Button>
          </center>
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
}
