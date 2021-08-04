
import React, {  } from 'react';
import Banner from '../../Componant/Banner/Banner';
import DividerLeft from '../../Componant/DividerLeft/DividerLeft';
import DividerRight from '../../Componant/DividerRight/DividerRight';
import FooterLink from '../../Componant/FooterLink/FooterLink';
import OneClickLogin from '../../Componant/OneClickLogin/OneClickLogin';
const Home = () => {

    return (
        <div>
            <OneClickLogin></OneClickLogin>
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