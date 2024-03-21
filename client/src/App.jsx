import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbars from "./components/Navbar/Navbars";
import Home from "./components/Home/Home";

import Login from "./components/Form/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Affix } from "rsuite";
import SendMoneyAbroad from "./components/OurServices/SendMoneyAbroad";
import PrepaidTravelCard from "./components/OurServices/PrepaidTravelCard";
import ForexCurrency from "./components/OurServices/ForexCurrency";
import NRIRepatriation from "./components/OurServices/NRIRepatriation";
import BlockedAccountPayment from "./components/OurServices/BlockedAccountPayment";
import OverseasEducationLoan from "./components/OurServices/OverseasEducationLoan";
import Footer from "./components/Footer/Footer";
import Signup from "./components/pages/Signup";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Affix>
          <Navbars />
        </Affix>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
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
      </Provider>
    </>
  );
}

export default App;
