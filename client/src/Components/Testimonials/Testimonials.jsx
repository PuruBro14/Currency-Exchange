import React from "react";
import { Grid, Row, Col, Rate } from "rsuite";
import Slider from "react-slick";

import "./assets/css/testimonials.css";
export default function Testimonials({ settings }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <Grid fluid>
        <Row>
          <Col md={24}>
            <div className="maindivtestimonials">
              <h1
                style={{ textAlign: "center", color: "#333", fontSize: "32px" }}
              >
                Testimonials
              </h1>

              <div className="testimonials-container">
                <Slider {...settings}>
                  <div className="testimonial">
                    <img
                      src="https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=2048x2048&w=is&k=20&c=uNhM1pcoZ8d_CUWpz9EZNyp_lztV-p_NOp9nFrpgSI4="
                      alt="John Doe"
                      className="testimonial-image"
                    />

                    <div className="testimonial-content">
                      <p className="quote">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Donec aliquet libero eget magna malesuada, sit
                        amet consectetur mi hendrerit."
                      </p>
                      <p className="author">- John Doe</p>
                    </div>
                  </div>
                  <div className="testimonial">
                    <img
                      src="https://media.istockphoto.com/id/1270652087/photo/beautiful-woman-with-voluminous-curly-hairstyle.jpg?s=2048x2048&w=is&k=20&c=FXTmzLqutZQkhNS4Zs5UMLFKYcg6w9YS45A-LgVwwQw="
                      alt="John Doe"
                      className="testimonial-image"
                    />
                    <div className="testimonial-content">
                      <p className="quote">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Donec aliquet libero eget magna malesuada, sit
                        amet consectetur mi hendrerit."
                      </p>
                      <p className="author">- John Doe</p>
                    </div>
                  </div>
                  <div className="testimonial">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="John Doe"
                      className="testimonial-image"
                    />
                    <div className="testimonial-content">
                      <p className="quote">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Donec aliquet libero eget magna malesuada, sit
                        amet consectetur mi hendrerit."
                      </p>
                      <p className="author">- John Doe</p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </>
  );
}
