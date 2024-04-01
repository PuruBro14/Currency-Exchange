import React from "react";
import { Grid, Row, Col } from "rsuite";
import Slider from "react-slick";
export default function TestimonialsSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
                  <div className="item">
                    <div className="imagetext-cr">
                      <img
            src="https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=2048x2048&w=is&k=20&c=uNhM1pcoZ8d_CUWpz9EZNyp_lztV-p_NOp9nFrpgSI4="
            alt="John Doe"
            className="w-50 h-50"
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
            className="w-50 h-50"
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
            className="w-50 h-50"
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
            className="w-50 h-50"
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
            className="w-50 h-50"
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
            className="w-30 h-30"
          />
                      
                    </div>
                    <div className="buysell-cr">
                      <p>
                        Remiwire Rate : <b>51.37</b>
                      </p>
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