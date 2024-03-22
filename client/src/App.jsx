import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/HomePage/Home";

import Login from "./components/Form/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Affix } from "rsuite";
import SendMoneyAbroad from "./components/OurServices/SendMoneyAbroad";
import PrepaidTravelCard from "./components/OurServices/PrepaidTravelCard";
import ForexCurrency from "./components/OurServices/ForexCurrency";
import NRIRepatriation from "./components/OurServices/NRIRepatriation";
import BlockedAccountPayment from "./components/OurServices/BlockedAccountPayment";
import OverseasEducationLoan from "./components/OurServices/OverseasEducationLoan";
import Signup from "./components/pages/Signup";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/Navbar/Navbar";
import Home2 from "./components/HomePage/Home2";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer/Footer";
import Navbars2 from "./components/Navbar/Navbars2";
import OpenRoute from "./components/Auth/OpenRoute";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Affix>
          <Navbar />
        </Affix>

        <Routes>
          <Route path="/" element={
            //<ProtectedRoute>
            <Home2/>
            //</ProtectedRoute>
          }>
              
            </Route>
          <Route path="/signup" element={
          <OpenRoute>
          <Signup />
          </OpenRoute>
          }></Route>
          <Route path="/login" element={ <OpenRoute><Login /></OpenRoute>}></Route>
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
