import React from 'react'

const Testimonials = () => {
  return (
    <div>Testimonials</div>
  )
}

export default Testimonials

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="py-12 w-10/12 mx-auto">
      <Slider {...settings}>
        <div>
          <img
            src="https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=2048x2048&w=is&k=20&c=uNhM1pcoZ8d_CUWpz9EZNyp_lztV-p_NOp9nFrpgSI4="
            alt="John Doe"
            className="testimonial-image"
          />

          <div className="testimonial-content">
            <p className="quote">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquet libero eget magna malesuada, sit amet consectetur mi
              hendrerit."
            </p>
            <p className="author">- John Doe</p>
          </div>
        </div>

        <div>
          <img
            src="https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=2048x2048&w=is&k=20&c=uNhM1pcoZ8d_CUWpz9EZNyp_lztV-p_NOp9nFrpgSI4="
            alt="John Doe"
            className="testimonial-image"
          />

          <div className="testimonial-content">
            <p className="quote">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquet libero eget magna malesuada, sit amet consectetur mi
              hendrerit."
            </p>
            <p className="author">- John Doe</p>
          </div>
        </div>

        <div>
          <img
            src="https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=2048x2048&w=is&k=20&c=uNhM1pcoZ8d_CUWpz9EZNyp_lztV-p_NOp9nFrpgSI4="
            alt="John Doe"
            className="testimonial-image"
          />

          <div className="testimonial-content">
            <p className="quote">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquet libero eget magna malesuada, sit amet consectetur mi
              hendrerit."
            </p>
            <p className="author">- John Doe</p>
          </div>
        </div>

        <div>
          <img
            src="https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=2048x2048&w=is&k=20&c=uNhM1pcoZ8d_CUWpz9EZNyp_lztV-p_NOp9nFrpgSI4="
            alt="John Doe"
            className="testimonial-image"
          />

          <div className="testimonial-content">
            <p className="quote">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquet libero eget magna malesuada, sit amet consectetur mi
              hendrerit."
            </p>
            <p className="author">- John Doe</p>
          </div>
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=2048x2048&w=is&k=20&c=uNhM1pcoZ8d_CUWpz9EZNyp_lztV-p_NOp9nFrpgSI4="
            alt="John Doe"
            className="testimonial-image"
          />

          <div className="testimonial-content">
            <p className="quote">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquet libero eget magna malesuada, sit amet consectetur mi
              hendrerit."
            </p>
            <p className="author">- John Doe</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};
