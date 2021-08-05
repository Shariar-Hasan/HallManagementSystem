import React from 'react';
import { footerLink1, footerLink2, footerLink3, footerLink4 } from '../../Data/fakedata';
import FooterLinkItem from '../FooterLinkItem/FooterLinkItem';
import './FooterLink.css'
const FooterLink = () => {
    // d-md-flex justify-content-center align-items-center
    return (
        <div className="w-100 footerLink ">
            <div className="container">
                <div className="row ">   
                    <div className="col-lg-2 col-md-6 p-4">
                        <FooterLinkItem values={footerLink1}></FooterLinkItem>
                    </div>
                    <div className="col-lg-2 col-md-6 p-4">
                        <FooterLinkItem values={footerLink2}></FooterLinkItem>
                    </div>
                    <div className="col-lg-3  p-4 col-md-12 mx-auto  text-md-center">
                        <img src="https://cu.ac.bd/assets/image/culogo.png"  alt="Cu Logo" className=" cu-logo " />
                    </div>
                    <div className="col-lg-2  p-4 col-md-6">
                        <FooterLinkItem values={footerLink3}></FooterLinkItem>
                    </div>
                    <div className="col-lg-2  p-4 col-md-6">
                        <FooterLinkItem values={footerLink4}></FooterLinkItem>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FooterLink;