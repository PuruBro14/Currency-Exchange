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
import NavItem from "rsuite/esm/Nav/NavItem";
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
  const[editState,setEditState]=useState(false);
  const[editIndex,setEditIndex]=useState();

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

  const handleAddMore=(e)=>{
    e.preventDefault();
    if(convertFormValue.amount ==='' || convertFormValue.from==='' || convertFormValue.to===''){
      alert("All fields are required")
      return;
    }
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

  const filterArray=(e,ele,i)=>{
    e.preventDefault();

    const filteredArr=totalEntries.filter((item,index)=>i!==index)
    setTotalEntries(filteredArr)

    if(!ele?.id){
      return;
    }

   const url=`${DELETE_ORDERS}/${ele?.id}`

   const response=axios.delete(url).then((res)=>{
    console.log(res)
   }).catch((err)=>{
    console.error("Error while deleting the item",err)
   })
  }

  const editArray=(e,ele,index)=>{
    e.preventDefault();
    setEditState(true);
    setEditIndex(index)
    setConvertFormValue({...convertFormValue,amount:ele?.amount,from:ele?.from,to:ele?.to})
  }

  console.log('convetFormValue',convertFormValue);

  const editHandler=(e)=>{
    e.preventDefault();
    if(convertFormValue.amount ==='' || convertFormValue.from==='' || convertFormValue.to===''){
      alert("All fields are required")
      return;
    }
  const updatedEntries=[...totalEntries];
    const updatedValues={amount:convertFormValue.amount,form:convertFormValue.from,to:convertFormValue.to,currRateValue:convertFormValue.currentRate}
    updatedEntries[editIndex]=updatedValues;
    setTotalEntries(updatedEntries)
    setEditState(false);
    setConvertFormValue({
      amount:'',
      from:'',
      to:'',
      currentRate:''
    })
  }

  console.log('totalEntries',totalEntries);

  return (
    <form className="w-11/12 mx-auto">
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
              <input placeholder="Rate" className="amountinput cursor-not-allowed bg-[#EBEBE4]" 
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
                    key!=='fromImg' && key!=='toImg' && key!=='_id' && key!=='__v' && (
                      <td key={index}>{ele[key]}</td>
                    )
                   ))}
                

            <td>
              <div className="w-8 flex flex-row gap-5">
                <button onClick={(e)=>editArray(e,ele,index)}>Edit</button>
                <button onClick={(e)=>filterArray(e,ele,index)}>Delete</button>
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
          <button className="w-fit text-4xl px-[24px] py-[6px] bg-richblack-800 text-white rounded hover:bg-richblue-500 transition-all duration-200" onClick={editState?editHandler:handleAddMore}>{editState?'Save':'Add'}</button>&nbsp;
      </div>
}
      <div className="tablerow">
        <Col md={1}></Col>
        <Col md={22}>
          <h5 style={{ marginTop: 20 }}>Total Amount</h5>
          <h3>{totalAmount.toFixed(2) || 0}</h3>

          <center>
            <Button appearance="primary" onClick={bookOrder} disabled={disabled}>BOOK THIS ORDER</Button>
          </center>
        </Col>
        <Col md={1}></Col>
      </div>
    </form>
  );
}
