import Home from "./components/HomePage/Home";
import Login from "./components/Form/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SendMoneyAbroad from "./components/OurServices/SendMoneyAbroad";
import PrepaidTravelCard from "./components/OurServices/PrepaidTravelCard";
import ForexCurrency from "./components/OurServices/ForexCurrency";
import NRIRepatriation from "./components/OurServices/NRIRepatriation";
import BlockedAccountPayment from "./components/OurServices/BlockedAccountPayment";
import OverseasEducationLoan from "./components/OurServices/OverseasEducationLoan";
import Signup from "./components/pages/Signup";
import { Provider } from "react-redux";
import store from "./store";
import Home2 from "./components/HomePage/Home2";
import Footer from "./components/Footer";
import OpenRoute from "./components/Auth/OpenRoute";
import Header from "./components/Header";
import Checkout from "./pages/Checkout";
import TrackShipment from "./pages/TrackShipment";
import Settings from "./pages/Settings";
function App() {
  return (
    <div className="overflow-x-hidden">
    <Provider store={store}>
      <BrowserRouter>
          <Header />

        <Routes>
          <Route path="/" element={
            //<ProtectedRoute>
            <Home/>
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
            path="/trackandrecieve"
            element={<TrackShipment />}
          ></Route>
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
          <Route
            path="checkout"
            element={
            <Checkout />}
          ></Route>
          <Route
            path="settings"
            element={
            <Settings />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
