import React from 'react';

const NotAvailable = () => {
    return (
        <div className="w-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 mx-auto p-5">
                        <div className="error-page text-center  mx-auto">
                            <h1 className="display-1 text-danger">404 Error</h1>
                            <hr className="w-50" />
                            <p className="lead text-dark">You have choosen a wrong path</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotAvailable;