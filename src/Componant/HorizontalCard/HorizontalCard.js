import React from 'react';
import { provostMessage } from '../../Data/fakedata';

const HorizontalCard = () => {
    const { title, message, info: { name, designation, hallName, university, imgUrl } } = provostMessage;
    return (
        <div className="card shadow my-4 col-12" >
            <div className="row no-gutters">
                <div className="col-md-3 text-center mx-auto">
                    <img title={`${designation}, ${hallName}`} className="img-fluid " src={imgUrl} alt={name} />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h4 className="card-title text-info text-center">{title}</h4>
                        <hr />
                        <p className="card-text text-justify">{message}</p>
                        <hr />
                        <div className="card-text">
                            <h5 className="card-title display-6">{name}</h5>
                            <h6 className="card-title display-6">{designation},{hallName}</h6>
                            <h6 className="card-title display-6">{university}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalCard;