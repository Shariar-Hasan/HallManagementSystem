import React from 'react';

const NothingAvailable = ({data}) => {
    return (
        <div className="card border-muted border-muted py-5">
            <div className="card-body">
                <h4 className="card-title text-center text-danger">{data}</h4>
            </div>
        </div>
    );
};

export default NothingAvailable;