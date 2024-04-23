import React from "react";
import { Grid, Row, Col } from "rsuite";
import Slider from "react-slick";
import "./Testimonials.css";
export default function TestimonialsSlider() {
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
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-20 w-11/12 max-w-maxContent mx-auto">
      <div>
        <Row>
          <div md={20}>
            <Slider {...settings}>
              <div>
                <div className="testimonial-item">
                  <div className="testimonial-imagetext-cr">
                    <img
                      src="https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=2048x2048&w=is&k=20&c=uNhM1pcoZ8d_CUWpz9EZNyp_lztV-p_NOp9nFrpgSI4="
                      alt="John Doe"
                      className="w-[300px] h-[200px] object-cover"
                    />
                  </div>
                  <div className="buysell-cr">
                    <p className="author">- John Doe</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="item">
                  <div className="imagetext-cr">
                    <img
                      src="https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=2048x2048&w=is&k=20&c=uNhM1pcoZ8d_CUWpz9EZNyp_lztV-p_NOp9nFrpgSI4="
                      alt="John Doe"
                      className="w-[300px] h-[200px] object-cover"
                    />
                  </div>
                  <div className="buysell-cr">
                    <p className="author">- John Doe</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="item">
                  <div className="imagetext-cr">
                    <img
                      src="https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=2048x2048&w=is&k=20&c=uNhM1pcoZ8d_CUWpz9EZNyp_lztV-p_NOp9nFrpgSI4="
                      alt="John Doe"
                      className="w-[300px] h-[200px] object-cover"
                    />
                  </div>
                  <div className="buysell-cr">
                    <p className="author">- John Doe</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="item">
                  <div className="imagetext-cr">
                    <img
                      src="https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=2048x2048&w=is&k=20&c=uNhM1pcoZ8d_CUWpz9EZNyp_lztV-p_NOp9nFrpgSI4="
                      alt="John Doe"
                      className="w-[300px] h-[200px] object-cover"
                    />
                  </div>
                  <div className="buysell-cr">
                    <p className="author">- John Doe</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="item">
                  <div className="imagetext-cr">
                    <img
                      src="https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=2048x2048&w=is&k=20&c=uNhM1pcoZ8d_CUWpz9EZNyp_lztV-p_NOp9nFrpgSI4="
                      alt="John Doe"
                      className="w-[300px] h-[200px] object-cover"
                    />
                  </div>
                  <div className="buysell-cr">
                    <p className="author">- John Doe</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </Row>
      </div>
    </div>
  );
}
