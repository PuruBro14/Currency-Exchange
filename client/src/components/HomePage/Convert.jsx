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
import ConvertTable from "./ConvertTable";
import { FaArrowRight } from "react-icons/fa";
import Tab from "../common/Tab";
import { Link } from "react-router-dom";
export default function Convert() {
    const tabData = [
    {
      id: 1,
      tabName: "Buy",
    },
    {
      id: 2,
      tabName: "Sell",
    },
  ]
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
  const[ConvertTableEntries,setConvertTableEntries]=useState([])
  const[currentState,setCurrentState]=useState("Buy")

  useEffect(() => {
    if(convertFormValue.to!=='' || convertFormValue.amount!=='' || convertFormValue.from!==''){
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
        console.log('current1',convertFormValue?.from);
        const dashIndex = convertFormValue?.from.indexOf("-");
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

    const existingEntryIndex=ConvertTableEntries.findIndex((entry)=>entry.from===convertFormValue.from && entry.to===convertFormValue.to)

    if(existingEntryIndex===-1){

    if(convertFormValue.amount!=='' || convertFormValue.from!=='' || convertFormValue.to!=='' || convertFormValue.currentRate!=='' || convertFormValue.fromImg!=='' || convertFormValue.toImg!==''){
      const convertTo=parseFloat(convertFormValue.amount);
      const totalValueAmt=convertTo*parseFloat(convertFormValue.currentRate);
      const newAmount=parseInt(convertFormValue.amount)
      currentState==="Buy"?setTotalAmount((prev)=>prev+newAmount):setTotalAmount((prev)=>prev-newAmount)
    setTotalEntries([...totalEntries,{...convertFormValue}])
    setConvertTableEntries([...ConvertTableEntries,{...convertFormValue}])
    setConvertFormValue({
    amount: "",
    from:'',
    fromImg:'',
    to: "",
    toImg: "",
    currentRate: "",
    })
    setDisabled(false);
  }
}else{
  console.log('current1',existingEntryIndex);
   if(convertFormValue.amount!=='' || convertFormValue.from!=='' || convertFormValue.to!=='' || convertFormValue.currentRate!=='' || convertFormValue.fromImg!=='' || convertFormValue.toImg!==''){
    const updatedData=[...ConvertTableEntries]
    const existingAmount=parseInt(updatedData[existingEntryIndex].amount);
    const newAmount=parseInt(convertFormValue.amount);
    currentState==="Buy"?setTotalAmount((prev)=>prev+newAmount):setTotalAmount((prev)=>prev-newAmount)
    updatedData[existingEntryIndex].amount=existingAmount+newAmount
    console.log('updatedData',updatedData);
    setConvertTableEntries(updatedData)
     setConvertFormValue({
    amount: "",
    from:'',
    fromImg:'',
    to: "",
    toImg: "",
    currentRate: "",
    })
   }
}
  }

  const currRateValue=()=>{
    const dashToIndex = convertFormValue?.to.indexOf("-");
    const dashtoCurrency = convertFormValue?.to.substring(0, dashToIndex).trim();
    const toValue=currentCurrValue[dashtoCurrency]

    setConvertFormValue({...convertFormValue,currentRate:toValue})

  }

  // const bookOrder=(e)=>{
  //   e.preventDefault();
  //   if(totalEntries.length==0){
  //     return;
  //   }
  //   dispatch(setConvert(ConvertTableEntries))
  // }

  const fetchTableData=async()=>{
    const response=await axios.get(GET_ORDERS);
    setTotalEntries(response?.data?.data)
  }
  useEffect(()=>{
    fetchTableData();
  },[])

  const filterArray=(e,ele,i)=>{
    e.preventDefault();

    const filteredArr=ConvertTableEntries.filter((item,index)=>i!==index)
    setConvertTableEntries(filteredArr)

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
    setConvertFormValue({...convertFormValue,amount:ele?.amount,from:ele?.from,to:ele?.to,currentRate:ele?.currRate})
  }

  console.log('convetFormValue',convertFormValue);

  const editHandler=(e)=>{
    e.preventDefault();
    if(convertFormValue.amount ==='' || convertFormValue.from==='' || convertFormValue.to===''){
      alert("All fields are required")
      return;
    }
  const updatedEntries=[...ConvertTableEntries];
    const updatedValues={amount:convertFormValue.amount,from:convertFormValue.from,to:convertFormValue.to,currentRate:convertFormValue.currentRate}
    updatedEntries[editIndex]=updatedValues;
    setConvertTableEntries(updatedEntries)
    setEditState(false);
    setConvertFormValue({
      amount:'',
      to:'',
      currentRate:''
    })
  }

  console.log('updatingEntries',ConvertTableEntries);

  return (
    <form className="md:w-11/12 mx-auto min-h-[350px]">
      <div className="flex flex-col gap-5 mt-7">

        <div className="ml-10">
            <Tab  tabData={tabData} currentState={currentState} setCurrentState={setCurrentState}/>
            </div>
            
          <div className="flex flex-col md:flex-row justify-around items-center mt-4">
            <div>
              <h5 className="ml-2 my-3">Amount</h5>
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
              <h5 className="ml-2 my-3">From</h5>

              <CurrencyInput
                convertFormValue={convertFormValue}
                setConvertFormValue={setConvertFormValue}
                currentType="from"
                currentState={currentState}
              />
            </div>
            <div>
              <h5 className="ml-2 my-3">To</h5>
              <CurrencyInput
                convertFormValue={convertFormValue}
                setConvertFormValue={setConvertFormValue}
                currentType="to"
                currentState={currentState}
              />
            </div>
            <div>
              <h5 className="ml-2 my-3">Current Rate</h5>
              <input placeholder="Rate" className="amountinput cursor-not-allowed bg-[#EBEBE4]" 
               value={convertFormValue?.currentRate}
              />
            </div>

          <Button appearance="primary" className="w-fit text-4xl px-10 py-[6px] rounded-full bg-richblack-800 text-white  hover:bg-richblue-500 transition-all duration-200 mt-7" onClick={editState?editHandler:handleAddMore}>{editState?'Save':'Add'}</Button>&nbsp;
          </div>

      </div>

      {ConvertTableEntries?.length>0 &&
     <ConvertTable ConvertTableEntries={ConvertTableEntries} setConvertTableEntries={setConvertTableEntries} filterArray={filterArray} editArray={editArray}/>
      }

      <div className="tablerow">
        <Col md={1}></Col>
        <Col md={22}>
          <h5 style={{ marginTop: 20 }}>Total Amount</h5>
          <h3>{totalAmount.toFixed(2) || 0}</h3>

          <Link to="/checkout">
           <div className=' cursor-pointer group  p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit'>
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900'>
                    <p>Book a Order</p>
                    <FaArrowRight />
                </div>
            </div>
            </Link>

        </Col>
        <Col md={1}></Col>
      </div>
    </form>
  );
}
