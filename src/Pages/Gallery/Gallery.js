import React from 'react';
import Pagination from '@material-ui/lab/Pagination/Pagination';
// import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { images, smallTalkData } from '../../Data/fakedata';
import "react-image-gallery/styles/css/image-gallery.css";
import SmallTalk from '../../Componant/SmallTalk/SmallTalk';
import { MenuItem, Select } from '@material-ui/core';
import ImageGalleryItem from '../../Componant/ImageGalleyItem/ImageGalleryItem';
import { useContext } from 'react';
import { DataContext } from '../../App';
const Gallery = () => {
    const handleChange = (event, value) => {
        console.log(value);
    };

    const [imageLoad] = useContext(DataContext);
    const institutionalImage = imageLoad.filter(img => img.category.institutional === true)
    const hallImage = imageLoad.filter(img => img.category.hall === true)
    return (
        <>
            <SmallTalk heading={smallTalkData.heading} message={smallTalkData.text}></SmallTalk>
            <hr />
            <ImageGalleryItem heading="Gallery : Institutional Photos" imageLoad={institutionalImage}></ImageGalleryItem>
            <ImageGalleryItem heading="Gallery : Hall Photos" imageLoad={hallImage}></ImageGalleryItem>
        </>
    );
};

export default Gallery;