import React from "react";
import { Grid, Row, Col } from "rsuite";
import { Link } from "react-router-dom";
import "./assets/css/howtmoney.css";
export default function HowTransferMoney() {
  return (
    <div>
      <h2 className="htsmoneyhead">How to transfer money in 3 easy steps</h2>
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="cardname">
              <img src="https://media.istockphoto.com/id/700287204/photo/female-user-passes-security-authorization-system.jpg?s=1024x1024&w=is&k=20&c=RYUYA6EZ_Wm89gPFc5mc3kdIS-d8Wa2tRE2ySweqnLQ=" />
              <h3>1. Create account</h3>
              <p>
                It takes just a few minutes, and all you need is an email
                address.
              </p>
            </div>
            <div className="cardname">
              <img src="https://media.istockphoto.com/id/2020209499/photo/close-up-of-a-black-computer-keyboard-with-a-blue-light-overlay-technology-background.jpg?s=1024x1024&w=is&k=20&c=BGeQeiaMvI7XvA1AYVYg7T_A6F50oycf-GyBb84brFQ=" />
              <h3>2. Enter details</h3>
              <p>
                Add recipient (you'll need their address, bank account/IBAN,
                swift/BIC) and payment information.
              </p>
            </div>
            <div className="cardname">
              <img src="https://media.istockphoto.com/id/1498914710/photo/3d-render-illustration-approve-or-reject-mail-sign-postal-document-concept-with-dark-brown.jpg?s=2048x2048&w=is&k=20&c=Yag-RyXxZD12zR7GyY_dR5-9zuc4o9hj7RXELzaWdrE=" />
              <h3>3. Confirm and send</h3>
              <p>
                Check the currencies and amount are correct, get the expected
                delivery date, and send your money transfer.
              </p>
            </div>
        </div>
      </div>
      <div className="flex justify-center">
      <Link to="login">
        <button className="bg-richblack-300 text-white text-center px-[18px] py-[13px] my-7 mx-auto">Get Started</button>
      </Link>
      </div>
    </div>
  );
}
