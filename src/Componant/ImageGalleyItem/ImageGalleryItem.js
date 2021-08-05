import React, { useState } from 'react';
import "./ImageGalleryItem.css"
import Pagination from '@material-ui/lab/Pagination/Pagination';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect } from 'react';
const ImageGalleryItem = ({heading, imageLoad}) => {


    const [imagePerPage, setImagePerPage] = useState(10)
    const [paginationCount, setPaginationCount] = useState(Math.ceil(imageLoad.length/imagePerPage))
    const [albumImage, setAlbumImage] = useState(imageLoad.slice(0, imagePerPage))


    const handlePageChange = (event, value) => {
        const pageEnd = imagePerPage * value;
        const pageStart = pageEnd - imagePerPage;
        const newAlbumImage = imageLoad.slice(pageStart, pageEnd);
        setAlbumImage(newAlbumImage)
    }


    useEffect(()=>{
        setPaginationCount(Math.ceil(imageLoad.length/imagePerPage))
    },[imagePerPage,imageLoad.length])



    return (
        <div className="col-md-9 shadow mx-auto my-5 p-3">
            <h2 className="text-muted text-center">{heading}</h2>
            <ImageGallery items={albumImage} showThumbnails showNav={true} showPlayButton showIndex showBullets slideDuration={1000}></ImageGallery>
            <div className="d-flex justify-content-center">
                <select className="select-pagec" data-toggle="tooltip" data-placement="right" title="Photos to Show" defaultValue={imagePerPage} onChange={(e) => setImagePerPage(e.target.value)}>
                    <option value="5" >5</option>
                    <option value="10" >10</option>
                    <option value="15">15</option>
                </select>

                <Pagination color='primary' variant="outlined" showFirstButton showLastButton siblingCount={1} boundaryCount={1} count={paginationCount} page={1} onChange={handlePageChange} />
            </div>
        </div>
    );
};

export default ImageGalleryItem;