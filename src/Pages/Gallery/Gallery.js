import React from 'react';
import { smallTalkData } from '../../Data/fakedata';
import "react-image-gallery/styles/css/image-gallery.css";
import SmallTalk from '../../Componant/SmallTalk/SmallTalk';
import ImageGalleryItem from '../../Componant/ImageGalleyItem/ImageGalleryItem';
import { useContext } from 'react';
import { DataContext } from '../../App';
import Navbar from '../../Componant/Navbar/Navbar';
import Footer from '../../Componant/Footer/Footer';
const Gallery = () => {

    const [imageLoad] = useContext(DataContext);
    const institutionalImage = imageLoad.filter(img => img.category.institutional === true)
    const hallImage = imageLoad.filter(img => img.category.hall === true)
    return (
        <>
            <Navbar></Navbar>
            <SmallTalk heading={smallTalkData.heading} message={smallTalkData.text}></SmallTalk>
            <ImageGalleryItem heading="Gallery : Institutional Photos" imageLoad={institutionalImage}></ImageGalleryItem>
            <ImageGalleryItem heading="Gallery : Hall Photos" imageLoad={hallImage}></ImageGalleryItem>
            <Footer></Footer>
        </>
    );
};

export default Gallery;