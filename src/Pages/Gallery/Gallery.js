import React from 'react';
import Pagination from '@material-ui/lab/Pagination/Pagination';
import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { images } from '../../Data/fakedata';
import "react-image-gallery/styles/css/image-gallery.css";
const Gallery = () => {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <>
            <div className="col-md-9 shadow mx-auto my-5 p-3">
                <div className="card-body">
                    <h4 className="card-title text-info text-center">Photo Gallery of Shaheed Abdur Rab Hall</h4>
                    <p className="card-text text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, repudiandae. Ad, exercitationem praesentium dolor sequi delectus rerum sit possimus tempore mollitia numquam odio dolorum enim ratione iure alias ullam minima voluptate libero natus, voluptatum amet doloribus. Fuga velit sit eaque magnam nostrum. Nostrum at deserunt expedita numquam laudantium ducimus laborum nihil reprehenderit nisi, illo, tenetur assumenda quas quibusdam repudiandae deleniti inventore quia odit totam accusamus doloremque officiis ratione. Officia alias incidunt expedita doloremque aspernatur facilis culpa officiis. Suscipit ad quisquam velit at minus, praesentium dolorum corporis asperiores voluptates non facilis perferendis temporibus consectetur eligendi, rem harum dolor sit quia maiores.
                    </p>
                </div>
            </div>
            <hr />
            <div className="col-md-8 shadow mx-auto my-5 p-3">
                <h2 className="text-muted text-center">Gallery : Institutional Photos</h2>
                <ImageGallery items={images} showThumbnails showNav={true} showPlayButton showIndex showBullets slideDuration={1000}></ImageGallery>
                <div className="d-flex justify-content-center">
                    <Pagination color='primary' variant="outlined" siblingCount={1} boundaryCount={1} count={10} page={page} onChange={handleChange} />
                </div>
            </div>
            <div className="col-md-8 shadow mx-auto my-5 p-3">
                <h2 className="text-muted text-center">Gallery : Hall Photos</h2>

                <ImageGallery items={images} showThumbnails showNav={true} showPlayButton showIndex showBullets slideDuration={1000}></ImageGallery>
                <div className="d-flex justify-content-center">
                    <Pagination color='primary' variant="outlined" siblingCount={1} boundaryCount={1} count={10} page={page} onChange={handleChange} />
                </div>
            </div>
        </>
    );
};

export default Gallery;