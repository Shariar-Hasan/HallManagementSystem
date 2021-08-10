import React from 'react';
import { useContext } from 'react';
import Slider from "react-slick";
import { DataContext } from '../../App';
import LinkButton from '../Linkbutton/LinkButton';

const Carosel = () => {
  const [imageLoad] = useContext(DataContext)
  const settings = {
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const caroselImage = imageLoad.slice(0, 5);
  return (
    <div className="shadow p-5 bg-light">
      <h2 className="text-info text-center">Short Gallery</h2>
      <Slider {...settings} className="my-5 overflow-hidden">
        {
          caroselImage.map(img => <div key={img.id}>
            <img className="carosel-img mx-auto" src={img.original} alt={img.originalTitle} />
          </div>)
        }
      </Slider>
      <LinkButton link="/gallery" buttonText="See more Photos" color="primary" variant="outlined"></LinkButton>
    </div>
  );

};

export default Carosel;
