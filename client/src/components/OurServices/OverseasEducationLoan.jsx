import React from "react";
import { Grid, Row, Col } from "rsuite";
import "./assets/css/ourservices.css";
import image1 from "./assets/img/over.svg";
export default function OverseasEducationLoan() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center my-4 text-3xl mt-10 mb-10">
        OVERSEAS EDUCATION LOAN
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4">
          <div classname="sma_pclara">
            <p>
              Turn your dream of studying abroad into reality with our flexible
              and affordable overseas education loans. Empower your academic
              journey with our tailored overseas education loan solutions,
              designed to fund your aspirations. Unlock global opportunities
              with financial support from Remiwire's overseas education loans.
            </p>
            <p className="mt-5">
              Say yes to world-class education with our hassle-free overseas
              education loans, offering competitive interest rates and flexible
              repayment options. Trust Remiwire to be your partner in education,
              providing seamless overseas education loans with personalized
              assistance every step of the way. Don't let financial barriers
              hinder your pursuit of higher education abroad. Our overseas
              education loans make studying overseas accessible and achievable.
              Secure your future with confidence. Our overseas education loans
              offer peace of mind, allowing you to focus on your studies.
            </p>
            <p className="mt-5">
              Explore the world of learning with Remiwire's comprehensive
              overseas education loan solutions, crafted to meet your academic
              goals. Invest in your future with our reliable overseas education
              loans, ensuring you have the necessary funds to pursue excellence
              abroad. Join the thousands of students who have achieved their
              dreams abroad with the help of Remiwire's flexible and affordable
              overseas education loans.
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
