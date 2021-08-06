import React from 'react';
import "./Profile.css"
import StudentProfile from '../../Componant/ProfileSection/StudentProfile';
import { student } from '../../Data/fakedata';


const Profile = () => {
    const { personalInfo, contact, institutional, hallDetails } = student;
    return (
        <div className="container">
            <div className="row w-100">
                <StudentProfile personalInfo={personalInfo} contact={contact} institutional={institutional} hallDetails={hallDetails} />
            </div>
        </div>
    );
};

export default Profile;