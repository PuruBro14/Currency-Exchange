import React from "react";
import { Grid, Row, Col } from "rsuite";
import "./assets/css/ourservices.css";
import image1 from "./assets/img/blocked.jpg";
export default function BlockedAccountPayment() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center my-4 text-3xl mt-10 mb-10">
        BLOCKED ACCOUNT PAYMENT
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4">
          <div assname="sma_pclara">
            <p>
              Secure your future with ease using our blocked account payment
              solutions at Remiwire. Streamline your visa application process
              with our reliable blocked account payment services tailored to
              your needs.
              <br /> <br />
              Trust Remiwire to handle your blocked account payments
              efficiently, ensuring compliance and peace of mind. Achieve your
              study or residency goals abroad with confidence, powered by our
              seamless blocked account payment solutions.
              <br />
              <br />
              Experience hassle-free blocked account payments with transparent
              fees and expert support from Remiwire Navigating the complexities
              of blocked account payments is simple with our intuitive platform
              at Remiwire Empower your international journey with our secure and
              dependable blocked account payment services. From initial setup to
              ongoing management, Remiwire is your trusted partner for blocked
              account payments.
              <br />
              <br />
              Ensure your financial stability abroad with our comprehensive
              blocked account payment solutions designed for your peace of mind.
              Count on Remiwire for prompt and efficient blocked account
              payments, paving the way for your success overseas
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
