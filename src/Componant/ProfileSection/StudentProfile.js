import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const ProfileSection = ({ personalInfo, contact, institutional, hallDetails }) => {
    const { id, name, avater, birthDate, fatherName, motherName } = personalInfo;
    const { address, city, division, zip, phoneNo, email } = contact;
    const { course, department, session } = institutional;
    const history = useHistory()


    const handleSeat = () => {
        history.push("/apply")
    }
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
                                    <td>ID:</td>
                                    <td>{id}</td>
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
                                <th>Course Name</th>
                                <th>Department</th>
                                <th>Session</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td>{course}</td>
                                <td>{department}</td>
                                <td>{session}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="profile-card shadow border-rounded">
                <h3 className="profile-card-header">Hall Information</h3>
                <div className="row  profile-card-child">
                    <table className="table table-responsive-sm text-center table-bordered w-100">
                        <thead>
                            <tr>
                                <th>Alloted</th>
                                <th>Room No</th>
                                <th>Start Date</th>
                                <th>Expiry Date</th>
                                <th>Renew/ Apply</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                hallDetails.map((info, i) => {
                                    return <tr key={i}>
                                        <td>
                                            {
                                                hallDetails.length === i + 1
                                                    ?
                                                    info.alloted ? "Yes" : "No"

                                                    :
                                                    "Expired"
                                            }

                                        </td>

                                        <td>{info.roomNo || "N/A"}</td>
                                        <td>{info.allotedDate || "N/A"}</td>
                                        <td>{info.cardExpiryDate || "N/A"}</td>
                                        <td>{
                                            hallDetails.length === i + 1
                                                ?
                                                <Button onClick={handleSeat}  variant="outlined" color="primary">{info.alloted ? "Renew Seat" : "Apply for Seat"}</Button>
                                                :
                                                "N/A"
                                        }

                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;