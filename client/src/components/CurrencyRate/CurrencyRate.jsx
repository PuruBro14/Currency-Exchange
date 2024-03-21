import React from "react";
import "./assets/css/Currencyrate.css";
import { Grid, Row, Col } from "rsuite";
import Slider from "react-slick";
export default function CurrencyRate() {
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
    <div>
      <div className="slider-container">
        <Grid fluid>
          <Row>
            <Col md={2}></Col>
            <Col md={20}>
              <Slider {...settings}>
                <div>
                  <div className="item">
                    <div className="imagetext-cr">
                      <img
                        src="https://www.remitx.com/remitx-images/flags/NZD.png"
                        alt=""
                        title="flags"
                        width="30"
                        height="30"
                      />
                      <h6>NZD</h6>
                    </div>
                    <div className="buysell-cr">
                      <p>
                        Remiwire Rate : <b>51.37</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="item">
                    <div className="imagetext-cr">
                      <img
                        src="https://www.remitx.com/remitx-images/flags/NZD.png"
                        alt=""
                        title="flags"
                        width="30"
                        height="30"
                      />
                      NZD
                    </div>
                    <div className="buysell-cr">
                      <p>
                        Remiwire Rate : <b>51.37</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="item">
                    <div className="imagetext-cr">
                      <img
                        src="https://www.remitx.com/remitx-images/flags/NZD.png"
                        alt=""
                        title="flags"
                        width="30"
                        height="30"
                      />
                      NZD
                    </div>
                    <div className="buysell-cr">
                      <p>
                        Remiwire Rate : <b>51.37</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="item">
                    <div className="imagetext-cr">
                      <img
                        src="https://www.remitx.com/remitx-images/flags/NZD.png"
                        alt=""
                        title="flags"
                        width="30"
                        height="30"
                      />
                      NZD
                    </div>
                    <div className="buysell-cr">
                      <p>
                        Remiwire Rate : <b>51.37</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="item">
                    <div className="imagetext-cr">
                      <img
                        src="https://www.remitx.com/remitx-images/flags/NZD.png"
                        alt=""
                        title="flags"
                        width="30"
                        height="30"
                      />
                      NZD
                    </div>
                    <div className="buysell-cr">
                      <p>
                        Remiwire Rate : <b>51.37</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="item">
                    <div className="imagetext-cr">
                      <img
                        src="https://www.remitx.com/remitx-images/flags/NZD.png"
                        alt=""
                        title="flags"
                        width="30"
                        height="30"
                      />
                      NZD
                    </div>
                    <div className="buysell-cr">
                      <p>
                        Remiwire Rate : <b>49.63</b>
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}
