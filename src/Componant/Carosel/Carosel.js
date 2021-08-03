import React from 'react';

import Slider from "react-slick";
import LinkButton from '../Linkbutton/LinkButton';

const Carosel = () => {
  const settings = {
    dots: true,
    infinite: true,
    className: "slider variable-width",
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2 className="text-muted text-center"> Short Gallery</h2>
      <Slider {...settings} className="my-5">
        <div>
          <img className="carosel-img mx-auto" src="https://i.ibb.co/0M0qW9M/1584040477-8.jpg" alt="First slide" />
        </div>
        <div>
          <img className="carosel-img mx-auto" src="https://robohash.org/honey?set=set1" alt="First slide" />
        </div>
        <div>
          <img className="carosel-img mx-auto" src="https://i.ibb.co/0M0qW9M/1584040477-8.jpg" alt="First slide" />
        </div>
        <div>
          <img className="carosel-img mx-auto" src="https://i.ibb.co/0M0qW9M/1584040477-8.jpg" alt="First slide" />
        </div>


      </Slider>
      <LinkButton link="/gallery" buttonText="See more Photos" color="primary" variant="outlined"></LinkButton>
    </div>
  );

};

export default Carosel;

// <div className="slider">
        //     <div id="slide-show" class="carousel mx-auto slide" data-ride="carousel" data-pause="hover" data-interval={4000} data-keyboard={true} >
        //         <ol class="carousel-indicators">
        //             <li data-target="#slide-show" data-slide-to="0" class="active"></li>
        //             <li data-target="#slide-show" data-slide-to="1"></li>
        //             <li data-target="#slide-show" data-slide-to="2"></li>
        //         </ol>
        //         <div class="carousel-inner" role="listbox">
        //             <div class="carousel-item active">
        //                 <img className="carosel-img " src="https://i.ibb.co/0M0qW9M/1584040477-8.jpg" alt="First slide" />
        //                 <div class="carousel-caption d-none d-md-block">
        //                     <h3>Hasan</h3>
        //                     <p>Description</p>
        //                 </div>
        //             </div>
        //             <div class="carousel-item">
        //                 <img  className="carosel-img " src="https://i.ibb.co/0M0qW9M/1584040477-8.jpg" alt="Second slide" />
        //                 <div class="carousel-caption d-none d-md-block">
        //                     <h3>Hasan</h3>
        //                     <p>Description</p>
        //                 </div>
        //             </div>
        //             <div class="carousel-item">
        //                 <img  className="carosel-img" src="https://i.ibb.co/0M0qW9M/1584040477-8.jpg" alt="Third slide" />
        //                 <div class="carousel-caption d-none d-md-block">
        //                     <h3>Hasan</h3>
        //                     <p>Description</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <a class="carousel-control-prev" href="#slide-show" role="button" data-slide="prev">
        //             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span class="sr-only">Previous</span>
        //         </a>
        //         <a class="carousel-control-next" href="#slide-show" role="button" data-slide="next">
        //             <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span class="sr-only">Next</span>
        //         </a>
        //     </div>
        // </div>