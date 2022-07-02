import React from "react";
import "./Profile.css";
import StudentProfile from "./../../Componant/ProfileSection/StudentProfile/StudentProfile";
import EmployeeProfile from "./../../Componant/ProfileSection/EmployeeProfile/EmployeeProfile";
import AdminProfile from "./../../Componant/ProfileSection/AdminProfile/AdminProfile";
import { admin } from "../../Data/fakedata";
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
import toast from "react-hot-toast";
const Profile = () => {
  const [loginUser, setLoginuser] = useContext(UserContext);
  const [showSticky, setShowSticky] = useState(false);
  const [stickyNote, setStickyNote] = useState({});
  const { personalInfo, contact, institutional, hallDetails } = loginUser || {};
  // const stickyNote = {
  //   _id : "62bcb847de2d5ad220f075e6",
  //   stickyNoteTitle : "This is a sticky news",
  //   stickyNoteDescription : `Text qwhioqwioqnw Lorem ipsum dolor, sit amet consectetur
  //   adipisicing elit. Reiciendis illo in dolorum perferendis
  //   similique expedita ducimus aspernatur est error! Expedita
  //   nostrum illum libero, nisi ea, dignissimos minus neque,
  //   rerum et eius possimus. Labore`,
  //   postUpdated : "03:24:54 AM, 06/29/2022",
  //   visibleToEveryone : true,
  //   stickyNews : true,
  //   postExpired : "03:24:54 AM, 07/02/2022",
  //   stickyNoteImage : ""
  // }
  useEffect(() => {
    getData(`http://localhost:5500/getprofile/${loginUser?._id}`)
      .then((res) => res.json())
      .then((data) => setLoginuser(data));

    getData(`http://localhost:5500/getStickyNote`)
      .then((res) => res.json())
      .then((data) => {
        if(data){
          setStickyNote(data)
        }
        else{
          setStickyNote({})
        }
      }).catch(err => {
        return true;
      });

  }, []);
  
  console.log(stickyNote)
  useEffect(() => {
    const oldSticky = JSON.parse(sessionStorage.getItem("stickyShow")) || {};
    if(stickyNote._id === oldSticky?._id && !oldSticky?.show){
      setShowSticky(false)    
    }
    else{
      setShowSticky(true)
    }
  }, [stickyNote]);
 
  
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
          {showSticky && (
           <StickyNews stickyNote={stickyNote} sticky={[showSticky, setShowSticky]}/>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
