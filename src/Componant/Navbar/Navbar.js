import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from "./logo2-xl.png"
import "./Navbar.css"
import { isEmployee, isStudent } from '../../Functions/autoFunctions';

const Navbar = () => {
    const [loginUser, setLoginUser] = useContext(UserContext)
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div >
                    <img src={logo}  className="logo navbar-brand" alt="Logo- Shaheed Abdur Rab Hall" />
                </div>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link style={{ textDecoration: "none", color : "#2b2b2b" }} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ textDecoration: "none" , color : "#2b2b2b" }} to="/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ textDecoration: "none" , color : "#2b2b2b" }} to="/notice">Noticeboard</Link>
                        </li>
                        {
                            isStudent(loginUser) && <li className="nav-item">
                                <Link style={{ textDecoration: "none" , color : "#2b2b2b" }} to="/home">Notification</Link>
                            </li>
                        }

                        {
                            (isEmployee(loginUser) || isStudent(loginUser))
                                ?
                                <li className="nav-item">
                                    <Link style={{ textDecoration: "none" }} to="/profile">Profile</Link>
                                </li>
                                :
                                <li className="nav-item dropdown">
                                    <span className="dropdown-toggle" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Login</span>
                                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                                        <Link style={{ textDecoration: "none" , color : "#2b2b2b" }} className="dropdown-item" to="/login?user=std">Student</Link>
                                        <Link style={{ textDecoration: "none" , color : "#2b2b2b" }} className="dropdown-item" to="/login?user=emp">Employee</Link>
                                    </div>
                                </li>
                        }

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;