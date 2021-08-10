import React from 'react';
import "./Profile.css"
import StudentProfile from '../../Componant/ProfileSection/StudentProfile';
import { student } from '../../Data/fakedata';
import SideNav from '../../Componant/SideNav/SideNav';


const Profile = () => {
    const { personalInfo, contact, institutional, hallDetails } = student;

    const studentDashboardlist = [
        {
            title: "Profile",
            link : "/profile",
            class : "currentPage"
        },
        {
            title: "Apply",
            link : "/profile",
            class : ""
        },
        {
            title: "Notice Board",
            link : "/profile",
            class : ""
        },
        {
            title: "Complain Box",
            link : "/profile",
            class : ""
        },
    ]

    return (
        <>
        <SideNav navData={studentDashboardlist}></SideNav>
            <div className="container">
                <div className="row w-100">
                    <StudentProfile personalInfo={personalInfo} contact={contact} institutional={institutional} hallDetails={hallDetails} />
                </div>
            </div>
        </>
    );
};

export default Profile;