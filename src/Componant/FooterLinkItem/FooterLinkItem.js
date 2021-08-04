import React from 'react';
import {Link} from 'react-router-dom'

const FooterLinkItem = ({values}) => {
    return (
        <div className="text-light lead">
            <ul>
                {
                    values.map((item, i) => <li key={i} ><Link style={{textDecoration:"none", color:"white"}} to={item.url}>{item.title}</Link></li>)
                }
            </ul>
        </div>
    );
};

export default FooterLinkItem;