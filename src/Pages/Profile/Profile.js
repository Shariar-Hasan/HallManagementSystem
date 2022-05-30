import React from "react";
import "./Profile.css";
import StudentProfile from "./../../Componant/ProfileSection/StudentProfile/StudentProfile";
import EmployeeProfile from "./../../Componant/ProfileSection/EmployeeProfile/EmployeeProfile";
import AdminProfile from "./../../Componant/ProfileSection/AdminProfile/AdminProfile";
import { admin, employee, student } from "../../Data/fakedata";
import SideNav from "../../Componant/SideNav/SideNav";
import { isAdmin, isEmployee, isStudent } from "../../Functions/autoFunctions";
import { useContext } from "react";
import { UserContext } from "../../App";
import NotAvailable from "../NotAvailable/NotAvailable";
import { NotificationContainer } from "react-notifications";

const Profile = () => {
  const [loginUser] = useContext(UserContext);
  const { personalInfo, contact, institutional, hallDetails } = loginUser;

  return (
    <>
      <SideNav
        user={
          (isStudent(loginUser) && "student") ||
          (isEmployee(loginUser) && "employee") ||
          (isAdmin(loginUser) && "admin")
        }
      ></SideNav>
      <NotificationContainer />

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
              <AdminProfile admin={admin} />
            ) : (
              <NotAvailable
                message={"Un-authorize Access"}
                errorCode={401}
              ></NotAvailable>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default Profile;
