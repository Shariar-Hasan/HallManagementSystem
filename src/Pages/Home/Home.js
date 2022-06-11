import React, { useContext } from "react";
import Banner from "../../Componant/Banner/Banner";
import Bulletin from "../../Componant/Bulletin/Bulletin";
import DividerLeft from "../../Componant/DividerLeft/DividerLeft";
import DividerRight from "../../Componant/DividerRight/DividerRight";
import FeedBack from "../../Componant/FeedBack/FeedBack";
import FooterLink from "../../Componant/FooterLink/FooterLink";
import FooterMap from "../../Componant/FooterMap/FooterMap";
import Navbar from "../../Componant/Navbar/Navbar";
import OneClickLogin from "../../Componant/OneClickLogin/OneClickLogin";
import Footer from "../../Componant/Footer/Footer";
import { UserContext } from "../../App";

const Home = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  const bulletin =
    "সকলের অবগতির জন্য জানানো যাইতেছে যে, এই ওয়েবসাইটটি আপাতত সংস্কার করা হইতেছে, তাই কেও দয়া করে এই ওয়েবসাইটের ক্ষতি হয় এমন কোনো কাজ করিবেন না। - আদেশক্রমে আব্দুর রব হল কতৃপক্ষ";
  return (
    <div>
      <Navbar></Navbar>
      <OneClickLogin></OneClickLogin>
      <Bulletin bulletin={bulletin}></Bulletin>
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
