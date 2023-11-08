import React, { useContext } from "react";
import Banner from "../../Componant/Banner/Banner";
// import Bulletin from "../../Componant/Bulletin/Bulletin";
import DividerLeft from "../../Componant/DividerLeft/DividerLeft";
import DividerRight from "../../Componant/DividerRight/DividerRight";
import FeedBack from "../../Componant/FeedBack/FeedBack";
import FooterLink from "../../Componant/FooterLink/FooterLink";
import FooterMap from "../../Componant/FooterMap/FooterMap";
import Navbar from "../../Componant/Navbar/Navbar";
import Footer from "../../Componant/Footer/Footer";
const Home = () => {
  // const bulletin =
    // "এই ওয়েবসাইট তৈরির কাজ অনেকাংশই শেষ হয়ে গেছে। আর কিছুদিন পর পুর্নাঙ্গ ওয়েবসাইট লাঞ্চ হবে, সকলের অপেক্ষার অবসান ঘটিয়ে - আব্দুর রব হল কতৃপক্ষ";

  return (
    <div>
      <Navbar></Navbar>
      {/* <Bulletin bulletin={bulletin}></Bulletin> */}
      <Banner></Banner>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-8 my-3">
            <DividerLeft></DividerLeft>
          </div>
          <div className="col-md-4 my-3">
            <DividerRight></DividerRight>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 my-3">
            <FooterMap></FooterMap>
          </div>
          <div className="col-md-6 my-3">
            <FeedBack></FeedBack>
          </div>
        </div>
      </div>
      <FooterLink></FooterLink>
      <Footer></Footer>
    </div>
  );
};

export default Home;
