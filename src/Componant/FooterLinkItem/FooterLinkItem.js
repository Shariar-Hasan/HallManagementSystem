import React from 'react';
import {Link} from 'react-router-dom'

const FooterLinkItem = ({values}) => {
    return (
        <div className="text-light lead">
            <ul className="footer-links">
                {
                    values.map((item, i) => <li key={i} style={{margin :"8px 0"}}><Link style={{textDecoration:"none", color:"white"}} to={item.url}>{item.title}</Link></li>)
                }
            </ul>
        </div>
    );
};

export default FooterLinkItem;