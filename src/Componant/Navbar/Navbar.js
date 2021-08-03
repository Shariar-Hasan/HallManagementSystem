import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
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
    return (
        <div >
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
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
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link style={{ textDecoration: "none", color: "#2b2b2b" }} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ textDecoration: "none", color: "#2b2b2b" }} to="/gallery">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ textDecoration: "none", color: "#2b2b2b" }} to="/notice">Noticeboard</Link>
                            </li>
                            {
                                isStudent(loginUser) && <li className="nav-item"  title="Notifications"><NotificationsIcon></NotificationsIcon><sup></sup></li>
                            }

                            {
                                (isEmployee(loginUser) || isStudent(loginUser))
                                    ?
                                    <li className="nav-item">
                                        
                                        <Link style={{ textDecoration: "none", color: "#2b2b2b" }} to="/profile" title={loginUser?.personalInfo.name}><Avatar className={classes.small} alt={loginUser?.personalInfo.avatar} src={loginUser?.personalInfo.avatar} /></Link>
                                    </li>
                                    :
                                    <li className="nav-item dropdown">
                                        <span className="dropdown-link">Login</span>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item" >
                                                <Link style={{ textDecoration: "none", color: "#2b2b2b" }} to="/login?user=std">Student</Link>
                                            </li>
                                            <li className="dropdown-item" >
                                                <Link style={{ textDecoration: "none", color: "#2b2b2b" }} className="dropdown-item" to="/login?user=emp">Employee</Link>
                                            </li>

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