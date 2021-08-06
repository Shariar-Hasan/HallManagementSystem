import React from 'react';
import Marquee from 'react-fast-marquee';

const Bulletin = ({bulletin}) => {
    return (
        <Marquee className="bulletin" pauseOnHover direction="left" speed={100} gradient={false}>
            <span className="mx-5">{bulletin}</span>
        </Marquee>
    );
};

export default Bulletin;