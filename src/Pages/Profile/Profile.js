/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Profile.css";
import StudentProfile from "./../../Componant/ProfileSection/StudentProfile/StudentProfile";
import EmployeeProfile from "./../../Componant/ProfileSection/EmployeeProfile/EmployeeProfile";
import AdminProfile from "./../../Componant/ProfileSection/AdminProfile/AdminProfile";
import {
  getData,
  isAdmin,
  isEmployee,
  isStudent,
} from "../../Functions/autoFunctions";
import { useContext } from "react";
import { UserContext } from "../../App";
import NotAvailable from "../NotAvailable/NotAvailable";
import { useEffect } from "react";
import { useState } from "react";
import StickyNews from "../../Componant/StickyNews/StickyNews";
const Profile = () => {
  const [loginUser, setLoginuser] = useContext(UserContext);
  const [showSticky, setShowSticky] = useState(false);
  const [stickyNote, setStickyNote] = useState({});
  const { personalInfo, contact, institutional, hallDetails } = loginUser || {};

  // useEffect(() => {
    


  // }, []);
  

 
  
  return (
    <>
      <div className="container">
        <div className="row w-100">
          <>
            {isStudent(loginUser) ? (
              <StudentProfile
                personalInfo={personalInfo}
                contact={contact}
                institutional={institutional}
                hallDetails={hallDetails}
              />
            ) : isEmployee(loginUser) ? (
              <EmployeeProfile
                personalInfo={personalInfo}
                contact={contact}
                institutional={institutional}
              />
            ) : isAdmin(loginUser) ? (
              <AdminProfile admin={loginUser} />
            ) : (
              <NotAvailable
                message={"Un-authorize Access"}
                errorCode={401}
              ></NotAvailable>
            )}
          </>
        </div>
        <div className="row">
          {(showSticky && !isAdmin(loginUser)) && (
           <StickyNews stickyNote={stickyNote} sticky={[showSticky, setShowSticky]}/>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
