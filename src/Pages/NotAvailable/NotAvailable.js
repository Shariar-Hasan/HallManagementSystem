import React from 'react';

const NotAvailable = ({message, errorCode}) => {
    return (
        <div className="w-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 mx-auto p-5">
                        <div className="error-page text-center  mx-auto">
                            <h1 className="display-1 text-danger">{errorCode} Error</h1>
                            <hr className="w-50" />
                            <p className="lead text-dark">{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotAvailable;