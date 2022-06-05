
import React, { useContext } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LockIcon from '@material-ui/icons/Lock';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import { isStudent } from '../../Functions/autoFunctions';


const SideNav = ({ user }) => {
    const [loginUser, setLoginUser] = useContext(UserContext)
    const studentDashboardlist = [
        {
            title: "Profile",
            link: "/profile",
            class: "currentPage",
            icon: "fas fa-user",
        },
        {
            title: "Gallery",
            link: "/gallery",
            class: "",
            icon: "fas fa-camera",
        },
        {
            title: "Notice Board",
            link: "/notice",
            class: "",
            icon: "fas fa-flag",
        },
        {
            title: "Issue Box",
            link: "/issuebox",
            class: "",
            icon: "fas fa-info",
        },
    ]
    const employeeDashboardlist = [
        {
            title: "Profile",
            link: "/profile",
            class: "currentPage",
            icon: "fas fa-user",
        },
        {
            title: "Notice Board",
            link: "/notice",
            class: "",
            icon: "fas fa-flag",
        },
        {
            title: "Contact Help",
            link: "/help",
            class: "",
            icon: "fas fa-question-circle",
        },
        {
            title: "Issue Box",
            link: "/issuebox",
            class: "",
            icon: "fas fa-info",
        },
    ]
    const adminDashboardlist = [
        {
            title: "Dashboard",
            link: "/profile",
            class: "currentPage",
            icon: "fas fa-tasks",
        },
        {
            title: "Users List",
            link: "/userlist",
            class: "",
            icon: "fas fa-user",
        },
        {
            title: "Upload Notice",
            link: "/upload-notice",
            class: "",
            icon: "fas fa-edit",
        },
        {
            title: "Hall Issue Check",
            link: "/issuebox",
            class: "",
            icon: "fas fa-info-circle",
        },
        {
            title: "Hall Applications",
            link: "/applications",
            class: "",
            icon: "fas fa-envelope-open",
        },
        {
            title: "Gallery Management",
            link: "/profile",
            class: "",
            icon: "fas fa-file-upload",
        },
        {
            title: "Notification Management",
            link: "/profile",
            class: "",
            icon: "fas fa-bell",
        },
        {
            title: "Help Section",
            link: "/profile",
            class: "",
            icon: "fas fa-question-circle",
        },
    ]
    const navData = loginUser?.authentication?.isStudent  ? studentDashboardlist : loginUser?.authentication.isEmployee  ? employeeDashboardlist : loginUser?.authentication.isAdmin ? adminDashboardlist : [] ;


    const handleClick = () => {
        const dashBoardOpen = document.querySelector('.sideNavBg');
        dashBoardOpen.classList.toggle("open");

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
    const handleNotifications = () => {
        const notificationOpened = document.querySelector('.notificationIcon'); 
        notificationOpened.classList.toggle('notificationOpen');
        setTimeout(() => {
            document.querySelector('.notificationIcon').className = 'notificationIcon';
        }, 2 * 1000)

    }


    return (
        <div className="sideNavBg ">
            <div className="sideNavBlackBg" onClick={handleClick}></div>
            <div className="sideNav">
                <div className="sideNavIcon" onClick={handleClick}>
                    <span>Dashboard</span>
                </div>
                <div className="sideNav-header">
                    <div className="avater-parent">
                        {
                            loginUser?.personalInfo?.avater ?
                                <img src={loginUser?.personalInfo?.avater} alt={loginUser.personalInfo?.name} />
                                : <span className="avater">
                                    <i className="fas fa-user"></i>
                                </span>
                        }

                    </div>
                    <ul className="headerList">
                        <li><h5>{loginUser?.personalInfo.name}</h5></li>
                        <li><span className="activeNow">Active Now</span></li>
                    </ul>

                </div>
                <hr />
                <div className="sideNav-footer">
                    <ul className="footerList">
                        {
                            isStudent(loginUser)
                            &&
                            <li title="Notifications" className="notificationIcon" onClick={handleNotifications}><NotificationsIcon />
                                {loginUser.notifications?.length > 0 && <sup className="badge badge-secondary">{loginUser.notifications.length}</sup>}
                                {
                                    loginUser.notifications?.length > 0
                                    &&
                                    <div className="notification-pannel">
                                        <ul>
                                            {
                                                loginUser?.notifications.map((nt,i) => <li key={i}>{nt.title}</li>)
                                            }
                                        </ul>
                                    </div>
                                }

                            </li>
                        }

                        <li title="Change Password"><LockIcon /> </li>
                        <li title="Log Out" onClick={() => alert("log out ekhono banai nai, dhoirjo dhoro")}><ExitToAppIcon /> </li>
                    </ul>
                </div>
                <hr />
                <div className="sideNav-body">
                    <ul className="navList bodyList" onClick={handleActivePage}>
                        {
                            navData.map((li, i) => <Link to={li.link} key={i} style={{ textDecoration: "none", color: "white" }}><li className={li.class}>
                                <i className={`${li.icon}`} aria-hidden="true"></i>
                                {li.title}
                            </li></Link>)
                        }
                    </ul>
                </div>
                <hr />
                <div className="sideNav-footer">
                    <p style={{ fontSize: 14, textAlign: 'center' }}>&copy; Powered by University of Chittagong</p>
                </div>

            </div>
        </div>
    );
};

export default SideNav;