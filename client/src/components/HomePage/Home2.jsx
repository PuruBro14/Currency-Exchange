import { useEffect, useState } from "react";
import "./assets/css/home.css";
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
import { FcNext, FcPrevious } from "react-icons/fc";
import React from "react";

import Ourservies from "../OurServices/Ourservies";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchIcon from "@rsuite/icons/Search";
import Footer from "../Footer/Footer";
import Testimonials from "../Testimonials/Testimonials";
import AboutUs from "../AboutUs/AboutUs";

import India from "./assets/images/india.png";
import { InputPicker } from "rsuite";
import Contactus from "../ContactUs/Contactus";
import WhyRemiwire from "../WhyRemiwire/WhyRemiwire";
import Location from "../Location/Location";
import CurrencyRate from "../CurrencyRate/CurrencyRate";
import Convert from "./Convert";
import Send from "./Send";
import Alerts from "./Alerts";
import Charts from "./Charts";
import HowTransferMoney from "../HowTransferMoney/HowTransferMoney";
import HeaderBanner from './assets/images/HeaderBanner.png'

export default function Home2() {
  const [activeMenu, setActiveMenu] = useState(1);

  const handleButtonClick = (active) => {
    setActiveMenu(active);
  };

  return (
    <>
      <div className="homemoneytranfer">
        <Grid fluid>
          <img src={HeaderBanner} alt="Header Background" className="home-banner-img"/>
          <Row className="show-grid">
            <Col xs={24} md={12}>
              <h1 className="moneytrans">
                Trusted Global Currency Converter & Money Transfers
              </h1>
              <p className="moneytranspara">
                Best source for currency conversion, sending money online and
                tracking exchange rates
              </p>
            </Col>
            <Col xs={24} md={12} className="estimatefees">
              <div className="sendmoneyform">
                <div className=""></div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
      {/*  */}
      <Grid fluid>
        <Row className="mainconverter">
          <Col md={1}></Col>
          <Col md={22}>
            <div className="input-container">
              {" "}
              <Row className="maindivconter">
                <Col
                  md={6}
                  className={
                    activeMenu === 1 ? "convertdiv active" : "convertdiv"
                  }
                  onClick={() => handleButtonClick(1)}
                >
                  Convert
                </Col>
                <Col
                  md={6}
                  className={
                    activeMenu === 2 ? "convertdiv active" : "convertdiv"
                  }
                  onClick={() => handleButtonClick(2)}
                >
                  Send
                </Col>
                <Col
                  md={6}
                  className={
                    activeMenu === 3 ? "convertdiv active" : "convertdiv"
                  }
                  onClick={() => handleButtonClick(3)}
                >
                  Charts
                </Col>
                <Col
                  md={6}
                  className={
                    activeMenu === 4 ? "convertdiv active" : "convertdiv"
                  }
                  onClick={() => handleButtonClick(4)}
                >
                  Alerts
                </Col>
              </Row>
              {activeMenu === 1 ? (
                <Convert />
              ) : activeMenu === 2 ? (
                <Send />
              ) : activeMenu === 3 ? (
                <Charts />
              ) : (
                <Alerts />
              )}
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Grid>

      <CurrencyRate />

      <Location />

      <WhyRemiwire />

      <Ourservies />

      <AboutUs />

      <Testimonials />

      <HowTransferMoney />

      <Contactus />
    </>
  );
}
