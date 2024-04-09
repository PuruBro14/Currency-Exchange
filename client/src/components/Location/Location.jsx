import React from "react";
import { Grid, Row, Col, Input, InputGroup } from "rsuite";
import "./assets/css/Location.css";
import SearchIcon from "@rsuite/icons/Search";
export default function Location() {
  return (
    <div>
      <div className="nearloctiondiv">
        <Grid fluid>
          <Row>
            <Col md={1}></Col>
            <Col md={22} className="divFlex">
              <div className="currencyconvertor_main">
                <h3>Near Location</h3>
                <div className="displayFlxDiv">
                  <div>
                    <InputGroup>
                      <Input />
                      <InputGroup.Button>
                        <SearchIcon />
                      </InputGroup.Button>
                    </InputGroup>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <img src="https://www.remitx.com/remitx-images/city-images/NEW-DELHI.png" />
                        <br />
                        DELHI
                      </li>
                      <li>
                        <img src="https://www.remitx.com/remitx-images/city-images/GURUGRAM.png" />
                        <br />
                        GURUGRAM
                      </li>
                      <li>
                        <img src="https://www.remitx.com/remitx-images/city-images/GURUGRAM.png" />
                        <br />
                        NOIDA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export const HomeLocation = () => {
  const [currentLocation, setCurrentLocation] = useState("");

  return (
    <div className="bg-[#10122B] w-11/12 max-w-maxContent mx-auto rounded-md">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl p-5 text-white">Our Presence</h1>

        <div className="flex flex-row items-center gap-5">
          {/* <div className="relative w-[50%] h-[40px]">
          <input type="text" id="search" name="search"className="w-full p-2 rounded-md" 
          value={currentLocation}
          onChange={(e)=>setCurrentLocation(e.target.value)}
          />
          </div> */}

          <div className="flex flex-col sm:flex-row gap-20 mb-5">
            <div className="flex flex-col text-center gap-2">
              <img
                src="https://www.remitx.com/remitx-images/city-images/NEW-DELHI.png"
                className="w-[100px] h-[100px] aspect-square rounded-full"
              />
              <p className="text-white">DELHI</p>
            </div>

            <div className="flex flex-col text-center gap-2">
              <img
                src="https://www.remitx.com/remitx-images/city-images/GURUGRAM.png"
                className="w-[100px] h-[100px] aspect-square rounded-full"
              />
              <p className="text-white">GURUGRAM</p>
            </div>

            <div className="flex flex-col text-center gap-2">
              <img
                src="https://www.remitx.com/remitx-images/city-images/GURUGRAM.png"
                className="w-[100px] h-[100px] aspect-square rounded-full"
              />
              <p className="text-white">NOIDA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
