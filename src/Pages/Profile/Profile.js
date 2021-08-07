import React, { useState } from 'react';
import "./Profile.css"
import StudentProfile from '../../Componant/ProfileSection/StudentProfile';
import { student } from '../../Data/fakedata';
import { Avatar, Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const Profile = () => {
    const { personalInfo, contact, institutional, hallDetails } = student;

    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(prev => setShow(!prev))
        document.querySelector('.sideNavBg').classList.toggle("open")
    }
    const handleActivePage = (e) => {
        
          const children = e.target.parentNode.children;
          for(let i=0; i< children.length ; i++){
              if(children[i].className === "currentPage"){
                //   children[i].classList.toggle("currentPage");
                children[i].className = "";
              }
          }
        console.log(e.target.parentNode.children);
        e.target.classList.toggle("currentPage");
    }

    return (
        <>
            <div className="sideNavBg">
                <div className="sideNavBlackBg" onClick={handleClick}></div>
                <div className="sideNav">
                    <div className="sideNavIcon" onClick={handleClick}>
                        {
                            show
                                ?
                                <i className="fas fa-times"></i>
                                :
                                <i className="fas fa-bars"></i>

                        }
                    </div>
                    <div className="sideNav-header">
                        <ul className="headerList">
                            <li>
                                <span className="avater">
                                    <i className="fas fa-user"></i>
                                </span>
                            </li>
                            <li><h5>Shariar Hasan</h5></li>
                            <li><span className="activeNow">Active Now</span></li>
                        </ul>

                    </div>
                    <hr />
                    <div className="sideNav-body">
                        <ul className="navList bodyList" onClick={handleActivePage}>
                            <li className="currentPage">Profile</li>
                            <li>Apply</li>
                            <li>Notice board</li>
                            <li>Complain Box</li>
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
            <div className="container">
                <div className="row w-100">
                    <StudentProfile personalInfo={personalInfo} contact={contact} institutional={institutional} hallDetails={hallDetails} />
                </div>
            </div>
        </>
    );
};

export default Profile;