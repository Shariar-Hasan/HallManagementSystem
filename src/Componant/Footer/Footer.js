import React from 'react';

const Footer = () => {
    return (
        <div className="py-3 w-100 bg-dark text-light text-center">
            <p>&copy;{new Date().getFullYear()} by University of Chittagong</p>
        </div>
    );
};

export default Footer;