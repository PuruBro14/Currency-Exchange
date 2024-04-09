import React, { useState, useEffect } from "react";
import "../css/home.css";
import countryCurrency from "./countryCurrency";
export default function CurrencyInput({
  convertFormValue,
  setConvertFormValue,
  currentType,
  currentState
}) {
  const [countryCurrencyList, setCountryCurrencyList] = useState([]);
  const [countryCurrencyT, setCountryCurrency] = useState([]);
  const [showList, setShowList] = useState(false);

  console.log('currnetState',currentState,currentType);

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
  const setValueFrom = (value, img) => {
    setShowList(false);
    if (currentType) {
      setConvertFormValue({
        ...convertFormValue,
        [currentType]: value,

        [currentType + "Img"]: img,
      });
    }
  };

  const hideCurrencyList = () => {
    // setShowList(false);
  };

  useEffect(() => {
    if((currentState==="Buy" && currentType ==='from')){
      setCountryCurrency([
  {
    label: "INR - Indian Rupee",
    img: "https://flagsapi.com/IN/flat/64.png", 
    value: "INR",
  }])
return;
    }

    setCountryCurrencyList(countryCurrency);
    setCountryCurrency(countryCurrency);
  }, []);
  return (
    <div>
      {convertFormValue?.[currentType] ? (
        <>
          <div className="countryDiv">
            <span className="flex items-center gap-2">
              {" "}
              <span>
                <img
                  className="countryIcon"
                  src={convertFormValue?.[currentType + "Img"]}
                />
              </span>
              &nbsp;
              <span className="truncate">
                {convertFormValue?.[currentType]}
              </span>
            </span>
            <span
              style={{
                float: "right",
                padding: "10px",
                fontWeight: 800,
                cursor: "pointer",
              }}
              onClick={() => {
                setConvertFormValue({
                  ...convertFormValue,
                  [currentType]: "",
                  [currentType + "Img"]: "",
                });
              }}
            >
              X
            </span>
          </div>
        </>
      ) : (
        <>
          {" "}
          <input
            className="amountinput"
            placeholder="Select Currency"
            value={convertFormValue?.[currentType]}
            onChange={(e) => {
              getCurrencyList(e);
            }}
            onFocus={showCurrencyList}
            onBlur={hideCurrencyList}
          />
        </>
      )}
      {showList && (
        <>
          <ul className="ulNotType">
            {countryCurrencyT?.map((val, index) => {
              console.log("val", val);
              return (
                <div key={index}>
                  <div>
                    <li
                      onClick={() => {
                        setValueFrom(val.label, val.img);
                      }}
                      className="currencylist"
                    >
                      <span>
                        <img src={val.img} />
                      </span>
                      {val.label}
                    </li>
                  </div>
                </div>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
