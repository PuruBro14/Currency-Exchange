import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbars from "./Components/Navbar/Navbars";
import Home from "./Components/Home/Home";

import Login from "./Components/Form/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Affix } from "rsuite";
import SendMoneyAbroad from "./Components/OurServices/SendMoneyAbroad";
import PrepaidTravelCard from "./Components/OurServices/PrepaidTravelCard";
import ForexCurrency from "./Components/OurServices/ForexCurrency";
import NRIRepatriation from "./Components/OurServices/NRIRepatriation";
import BlockedAccountPayment from "./Components/OurServices/BlockedAccountPayment";
import OverseasEducationLoan from "./Components/OurServices/OverseasEducationLoan";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Affix>
          <Navbars />
        </Affix>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="sendmoneyabroad" element={<SendMoneyAbroad />}></Route>
          <Route
            path="prepaidtravelcard"
            element={<PrepaidTravelCard />}
          ></Route>
          <Route path="forexcurrency" element={<ForexCurrency />}></Route>
          <Route path="nrirepatriation" element={<NRIRepatriation />}></Route>
          <Route
            path="blockedaccountpayment"
            element={<BlockedAccountPayment />}
          ></Route>
          <Route
            path="overseaseducationLoan"
            element={<OverseasEducationLoan />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
