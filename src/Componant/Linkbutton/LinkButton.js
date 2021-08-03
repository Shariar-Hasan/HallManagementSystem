import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';



const LinkButton = ({ link, buttonText, variant, color }) => {
    return (

        <div className="text-center w-100 my-2">
            <Link style={{ textDecoration: "none" }} to={link}>
                <Button variant={variant} color={color}>{buttonText}</Button>
            </Link>
        </div>

    );
};

export default LinkButton;