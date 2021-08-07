import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext, UserContext } from '../../App';
import logo from "./../../images/logo2-xl.png"
import "./Navbar.css"
import { isEmployee, isStudent } from '../../Functions/autoFunctions';
import { Avatar, makeStyles } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    }
}));


const Navbar = () => {
    const [loginUser,] = useContext(UserContext)
    const classes = useStyles();
    const [,[show, setShow]] = useContext(DataContext)
    const handleShow = () => setShow(true)

    return (
        <div >
            <nav className="navbar shadow navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <div >
                        <Link to="/">
                            <img src={logo} className="logo navbar-brand" alt="Logo- Shaheed Abdur Rab Hall" />
                        </Link>

                    </div>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-right" id="collapsibleNavId">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                            <Link style={{ textDecoration: "none", color: "#2b2b2b" }} to="/">
                                <li className="nav-item">Home</li>
                            </Link>
                            <Link style={{ textDecoration: "none", color: "#2b2b2b" }} to="/gallery">
                                <li className="nav-item">Gallery</li>
                            </Link>
                            <Link style={{ textDecoration: "none", color: "#2b2b2b" }} to="/notice">
                                <li className="nav-item">Noticeboard</li>
                            </Link>
                            {
                                isStudent(loginUser) && <li className="nav-item" title="Notifications"><NotificationsIcon></NotificationsIcon><sup className="badge badge-secondary">0</sup></li>
                            }

                            {
                                (isEmployee(loginUser) || isStudent(loginUser))
                                    ?
                                    <li className="nav-item">

                                        <Link style={{ textDecoration: "none", color: "#2b2b2b" }} to="/profile" title={loginUser?.personalInfo.name}><Avatar className={classes.small} alt={loginUser?.personalInfo.avatar} src={loginUser?.personalInfo.avatar} >{loginUser?.personalInfo.name.charAt(0)}</Avatar></Link>
                                    </li>
                                    :
                                    <li className="nav-item dropdown">
                                        <span className="dropdown-link">Login</span>
                                        <ul className="dropdown-menu">
                                            <Link style={{ textDecoration: "none", color: "#2b2b2b" }} to="/login?user=std"><li className="dropdown-item" >Student</li></Link>
                                            <Link style={{ textDecoration: "none", color: "#2b2b2b" }} className="dropdown-item" to="/login?user=emp"><li className="dropdown-item" >Employee</li></Link>
                                            <Link style={{ textDecoration: "none", color: "#2b2b2b" }} className="dropdown-item" to="/cPanelLogin"><li className="dropdown-item" >Admin</li></Link>

                                        </ul>
                                    </li>
                            }

                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;