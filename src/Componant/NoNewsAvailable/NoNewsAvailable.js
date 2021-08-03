import React from 'react';

const NoNewsAvailable = ({data}) => {
    return (
        <div class="card border-muted border-muted">
            <div class="card-body">
                <h4 class="card-title text-center text-danger">No {data} Available</h4>
            </div>
        </div>
    );
};

export default NoNewsAvailable;