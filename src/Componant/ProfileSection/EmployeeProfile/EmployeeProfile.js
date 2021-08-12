
import React from 'react';

const EmployeeProfile = ({ personalInfo, contact, institutional, hallDetails }) => {
    const { phoneNo, name, avater, birthDate, fatherName, motherName } = personalInfo;
    const { address, city, division, zip, email } = contact;
    const { job, joiningDate, leavingDate } = institutional;


    return (
        <div className="mx-auto col-9 my-2">
            <div className="profile-card shadow border-rounded">
                <h3 className="profile-card-header">Personal Information</h3>
                <div className="row  profile-card-child">
                    <div className="col-md-4">
                        {
                            avater
                                ?
                                <img className="img-fluid mx-auto" src={avater} alt={name} />
                                :
                                <div className="fake-avater">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </div>
                        }

                    </div>
                    <div className="col-md-8 my-2">
                        <table className="table table-responsive-sm table-borderless ">
                            <tbody>
                                <tr>
                                    <td>Phone No:</td>
                                    <td>{phoneNo}</td>
                                </tr>
                                <tr>
                                    <td >Name:</td>
                                    <td>{name}</td>
                                </tr>
                                <tr>
                                    <td>Birth Date:</td>
                                    <td>{birthDate}</td>
                                </tr>
                                <tr>
                                    <td >Father Name:</td>
                                    <td>{fatherName}</td>
                                </tr>
                                <tr>
                                    <td >Mother Name:</td>
                                    <td>{motherName}</td>
                                </tr>
                                <tr>
                                    <td >Phone:</td>
                                    <td>{phoneNo}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{email}</td>
                                </tr>
                                <tr>
                                    <td >Address:</td>
                                    <td>
                                        <ul style={{ listStyle: "none", padding: "0" }}>
                                            <li>Address : {address}</li>
                                            <li>City : {city}</li>
                                            <li>Division : {division}</li>
                                            <li>Zip Code : {zip}</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="profile-card shadow border-rounded">
                <h3 className="profile-card-header">Institutional Information</h3>
                <div className="row  profile-card-child">
                    <table className="table table-responsive-sm text-center table-bordered w-100">
                        <thead>
                            <tr>
                                <th>Job</th>
                                <th>Joining Date</th>
                                <th>Leaving Date</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td>{job}</td>
                                <td>{joiningDate}</td>
                                <td>{leavingDate || "--"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmployeeProfile;