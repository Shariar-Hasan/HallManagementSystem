import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from "./../../images/logo2-xl.png"
import "./Navbar.css"
import { isAdmin, isEmployee, isStudent } from '../../Functions/autoFunctions';



const Navbar = () => {
    const [loginUser] = useContext(UserContext)

    return (
        <div  className='sticky-top' style={{zIndex : "888"}}>
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
                                (isEmployee(loginUser) || isStudent(loginUser) || isAdmin(loginUser))
                                    ?
                                    <Link style={{ textDecoration: "none", color: "#2b2b2b" }} to="/profile" title={loginUser?.personalInfo.name}>
                                        <li className="nav-item">Profile</li>
                                    </Link>
                                    :
                                    <li className="nav-item dropdown">
                                        <span className="dropdown-link">Login</span>
                                        <ul className="dropdown-menu">
                                            <Link style={{ textDecoration: "none", color: "#2b2b2b" }} to="/login/student"><li className="dropdown-item" >Student</li></Link>
                                            <Link style={{ textDecoration: "none", color: "#2b2b2b" }} className="dropdown-item" to="/login/employee"><li className="dropdown-item" >Employee</li></Link>
                                            <Link style={{ textDecoration: "none", color: "#2b2b2b" }} className="dropdown-item" to="/login/admin"><li className="dropdown-item" >Admin</li></Link>
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