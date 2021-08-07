
import React, {  } from 'react';
import Banner from '../../Componant/Banner/Banner';
import Bulletin from '../../Componant/Bulletin/Bulletin';
import DividerLeft from '../../Componant/DividerLeft/DividerLeft';
import DividerRight from '../../Componant/DividerRight/DividerRight';
import DrawerBoard from '../../Componant/DrawerBoard/DrawerBoard';
import FooterLink from '../../Componant/FooterLink/FooterLink';
import OneClickLogin from '../../Componant/OneClickLogin/OneClickLogin';

const Home = () => {
const bulletin = "সকলের অবগতির জন্য জানানো যাইতেছে যে, এই ওয়েবসাইটটি আপাতত সংস্কার করা হইতেছে, তাই কেও দয়া করে এই ওয়েবসাইটের ক্ষতি হয় এমন কোনো কাজ করিবেন না। - আদেশক্রমে আব্দুর রব হল কতৃপক্ষ"
    return (
        <div>
            {/* <DrawerBoard></DrawerBoard> */}
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
            </div>
            <FooterLink></FooterLink>
        </div>
    );
};

export default Home;