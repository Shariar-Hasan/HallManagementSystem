import React from 'react';
import "./Profile.css"
import StudentProfile from "./../../Componant/ProfileSection/StudentProfile/StudentProfile"
import EmployeeProfile from "./../../Componant/ProfileSection/EmployeeProfile/EmployeeProfile"
import AdminProfile from "./../../Componant/ProfileSection/AdminProfile/AdminProfile"
import { admin, employee, student } from '../../Data/fakedata';
import SideNav from '../../Componant/SideNav/SideNav';
import { isAdmin, isEmployee, isStudent } from '../../Functions/autoFunctions';
import { useContext } from 'react';
import { UserContext } from '../../App';
import NotAvailable from '../NotAvailable/NotAvailable';


const Profile = () => {

    const { personalInfo, contact, institutional, hallDetails } = student;
    const [loginUser,] = useContext(UserContext)
    const studentDashboardlist = [
        {
            title: "Profile",
            link: "/profile",
            class: "currentPage",
            icon: "fas fa-user",
        },
        {
            title: "Apply" || "Renew",
            link: "/profile",
            class: "",
            icon: "fas fa-pen-square",
        },
        {
            title: "Notice Board",
            link: "/profile",
            class: "",
            icon: "fas fa-flag",
        },
        {
            title: "Issue Box",
            link: "/profile",
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
            link: "/profile",
            class: "",
            icon: "fas fa-flag",
        },
        {
            title: "Contact Help",
            link: "/profile",
            class: "",
            icon: "fas fa-question-circle",
        },
        {
            title: "Issue Box",
            link: "/profile",
            class: "",
            icon: "fas fa-info",
        },
    ]
    const adminDashboardlist = [
        {
            title: "Profile",
            link: "/profile",
            class: "currentPage",
            icon: "fas fa-user",
        },
        {
            title: "Dashboard",
            link: "/profile",
            class: "",
            icon: "fas fa-tasks",
        },
        {
            title: "Upload Notice",
            link: "/profile",
            class: "",
            icon: "fas fa-edit",
        },
        {
            title: "Hall Issue Check",
            link: "/profile",
            class: "",
            icon: "fas fa-info-circle",
        },
        {
            title: "Hall Applications",
            link: "/profile",
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

    return (
        <>
            <SideNav navData={(isStudent(loginUser) && studentDashboardlist) || (isEmployee(loginUser) && employeeDashboardlist) || (isAdmin(loginUser) && adminDashboardlist)}></SideNav>
            <div className="container">
                <div className="row w-100">
                    <>
                        {
                            isStudent(loginUser) ? <StudentProfile personalInfo={personalInfo} contact={contact} institutional={institutional} hallDetails={hallDetails} />
                                : isEmployee(loginUser) ? <EmployeeProfile personalInfo={employee.personalInfo} contact={employee.personalInfo.contact} institutional={employee.institutional} />
                                    : isAdmin(loginUser) ? <AdminProfile admin={admin} />
                                        : <NotAvailable message={"Un-authorize Access"} errorCode={401}></NotAvailable>
                        }
                    </>
                </div>
            </div>
        </>
    );
};

export default Profile;