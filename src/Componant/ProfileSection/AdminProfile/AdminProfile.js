
import React from 'react';

const AdminProfile = ({ admin }) => {
    const { personalInfo:{name, email} } = admin;

    return (
        <div className="mx-auto col-9 my-2">
            <div className="profile-card shadow border-rounded">
                <h3 className="profile-card-header">Admin Information</h3>
                <div className="row  profile-card-child">
                    <div className="col-12 text-center">
                        <h1>Hello <span className="special-text">{name}</span></h1>
                    </div>
                    <div className="col-12 my-2">
                        <table className="table table-responsive-sm table-bordered ">
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