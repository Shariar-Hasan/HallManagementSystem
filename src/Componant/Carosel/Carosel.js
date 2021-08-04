import React from 'react';
import Slider from "react-slick";
import LinkButton from '../Linkbutton/LinkButton';

const Carosel = () => {
  const settings = {
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="shadow p-5">
      <h2 className="text-info text-center">Short Gallery</h2>
      <Slider {...settings} className="my-5 overflow-hidden">
        <div>
          <img className="carosel-img mx-auto " src="https://i.ibb.co/0M0qW9M/1584040477-8.jpg" alt="First slide" />
        </div>
        <div>
          <img className="carosel-img mx-auto " src="https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg" alt="First slide" />
        </div>
        <div>
          <img className="carosel-img mx-auto " src="https://i.ibb.co/0M0qW9M/1584040477-8.jpg" alt="First slide" />
        </div>
        <div>
          <img className="carosel-img mx-auto " src="https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg" alt="First slide" />
        </div>


      </Slider>
      <LinkButton link="/gallery" buttonText="See more Photos" color="primary" variant="outlined"></LinkButton>
    </div>
  );

};

export default Carosel;
