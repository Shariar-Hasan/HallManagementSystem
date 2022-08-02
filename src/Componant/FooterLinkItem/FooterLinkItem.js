import React from 'react';
import {NavLink} from 'react-router-dom'

const FooterLinkItem = ({values}) => {
    return (
        <div className="text-light lead">
            <ul className="footer-links">
                {
                    values.map((item, i) => <li key={i} style={{margin :"8px 0"}}><NavLink style={{textDecoration:"none", color:"white"}} to={item.url}>{item.title}</NavLink></li>)
                }
            </ul>
        </div>
    );
};

export default FooterLinkItem;