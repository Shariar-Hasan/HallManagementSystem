import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';


const SideNav = ({ navData }) => {
    const [, setShow] = useState(false)
    const [loginUser,] = useContext(UserContext)
    const handleClick = () => {
        setShow(prev => setShow(!prev))
        document.querySelector('.sideNavBg').classList.toggle("open")
    }
    const handleActivePage = (e) => {
        const list = document.querySelectorAll(".navList li");
        list.forEach(li => {
            if (li.className === 'currentPage') {
                li.className = '';
            }
        })
        e.target.className = 'currentPage';
    }
    return (
        <div className="sideNavBg">
            <div className="sideNavBlackBg" onClick={handleClick}></div>
            <div className="sideNav">
                <div className="sideNavIcon" onClick={handleClick}>
                    <span>Dashboard</span>
                </div>
                <div className="sideNav-header">
                    <div className="avater-parent">
                        <span className="avater">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>
                    <ul className="headerList">
                        <li><h5>{loginUser?.personalInfo.name}</h5></li>
                        <li><span className="activeNow">Active Now</span></li>
                    </ul>

                </div>
                <hr />
                <div className="sideNav-body">
                    <ul className="navList bodyList" onClick={handleActivePage}>
                        {
                            navData.map((li, i) => <Link to={li.link} key={i} style={{ textDecoration: "none", color: "white" }}><li className={li.class}>
                                {li.title}
                            </li></Link>)
                        }
                    </ul>
                </div>
                <hr />
                <div className="sideNav-footer">
                    <ul className="footerList">
                        <li><Button variant="outlined" color="primary"><ExitToAppIcon /> Logout</Button></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default SideNav;