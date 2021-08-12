
import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const AdminProfile = ({ admin }) => {
    const { name, email } = admin;
    const history = useHistory()


    const handleSeat = () => {
        history.push("/apply")
    }
    return (
        <div className="mx-auto col-9 my-2">
            <div className="profile-card shadow border-rounded">
                <h3 className="profile-card-header">Personal Information</h3>
                <div className="row  profile-card-child">
                    <div className="col-12">
                        <h1>Hello <span className="special-text">{name}</span></h1>
                    </div>
                    <div className="col-12 my-2">
                        <h3 className="profile-card-header">Institutional Information</h3>
                        <table className="table table-responsive-sm table-borderless ">
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>{name}</td>
                                </tr>
                                <tr>
                                    <td >Email:</td>
                                    <td>{email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminProfile;