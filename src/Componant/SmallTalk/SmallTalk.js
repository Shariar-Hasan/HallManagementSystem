import React from 'react';

const SmallTalk = ({ heading, message }) => {
    return (
        <div>
            <div className="col-md-9 shadow mx-auto my-5 p-3">
                <div className="card-body">
                    <h4 className="card-title text-info text-center">{heading}</h4>
                    <p className="card-text text-justify">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default SmallTalk;