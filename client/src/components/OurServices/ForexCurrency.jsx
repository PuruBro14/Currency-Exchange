import React from "react";
import { Grid, Row, Col } from "rsuite";
import "./assets/css/ourservices.css";
import image1 from "./assets/img/forex.jpg";
export default function ForexCurrency() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center my-4 text-3xl mt-10 mb-10">FOREX CURRENCY</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4">
          <div assname="sma_pclara">
            <p>
              Unlock global opportunities with seamless currency exchange at
              Remiwire. Exchange currencies effortlessly with competitive rates
              and zero hidden fees at Remiwire. Navigate the forex market
              confidently with expert guidance from Remiwire. Maximize your
              international transactions with favorable exchange rates from
              Remiwire. Stay ahead in the currency market with real-time updates
              and personalized insights from Remiwire. <br />
              <br />
              Trust Remiwire for secure and efficient currency conversions
              tailored to your needs. Experience the ease of currency exchange
              with our user-friendly platform at Remiwire. <br />
              <br />
              Exchange currency with peace of mind knowing that your
              transactions are handled with utmost security at Remiwire. From
              USD to EUR and beyond, Remiwire offers a wide range of currency
              pairs for your trading needs. Wherever your journey takes you,
              Remiwire ensures smooth currency exchanges to fuel your global
              ventures.
            </p>
          </div>
        </div>
        <div className="p-4">
          <img src={image1} alt="Prepaid Travel Card" className="w-full" />
        </div>
      </div>
    </div>
  );
}
