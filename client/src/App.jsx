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
import Footer from "./components/Footer";
import OpenRoute from "./components/Auth/OpenRoute";
import Header from "./components/Header";
import Checkout from "./pages/Checkout";
import TrackShipment from "./pages/TrackShipment";
import Settings from "./pages/Settings";
import UserProfile from "./pages/UserProfile";
import AddAdditionalDetails from "./components/core/AddAdditionalDetails";
import UpdatePassword from "./components/core/UpdatePassword";
import ManageDeliveryAddress from "./components/core/ManageDeliveryAddress";
import MyProfile from "./components/core/MyProfile";
import ManageProfileAddress from "./components/core/ManageProfileAddress";
import Error from "./components/Error";
import AdminHome from "./pages/Admin/AdminHome";
function App() {
  return (
    <div className="overflow-x-hidden">
          <Header />

        <Routes>
          <Route path="/" element={
            // <ProtectedRoute>
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

          <Route 
          element={
            <UserProfile/>
          }>
            <Route path="/userprofile/my-profile" element={<MyProfile/>}/>

            <Route path="/userprofile/manage-address" element={<ManageProfileAddress/>}/>


          <Route path="/userprofile/profile-settings" element={<UpdatePassword/>}/>

           <Route path="/userprofile/edit-profile" element={<Settings/>}/>

          </Route>

          <Route path="/admin/*" element={<AdminHome/>}/>

          <Route path="*" element={<Error/>}/>

        </Routes>
        <Footer />
    </div>
  );
}

export default App;
