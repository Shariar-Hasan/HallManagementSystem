import React from "react";

const EmployeeProfile = ({
  personalInfo,
  contact,
  institutional,
  hallDetails,
}) => {
  const { phoneNo, name, avater, birthDate, fatherName, motherName, email } =
    personalInfo;
  const { address, city, division, zip } = contact;
  const { course, department, session } = institutional;
  console.log(personalInfo, contact, institutional)
  const allInfoFound =
    phoneNo &&
    name &&
    avater &&
    birthDate &&
    fatherName &&
    motherName &&
    email &&
    address &&
    city &&
    division &&
    zip;
  return (
    <div className="mx-auto col-9 my-2">
      <div className="profile-card shadow border-rounded">
        <h3 className="profile-card-header">Personal Information</h3>
        <div className="row  profile-card-child">
          <div className="col-md-4">
            {avater ? (
              <img className="img-fluid mx-auto" src={avater} alt={name} />
            ) : (
              <div className="fake-avater">
                <i className="fa fa-user" aria-hidden="true">
                  <small>Upload Image</small>
                  <input
                    className="ul_image_input"
                    type="file"
                    accept="image/*"
                  />
                </i>
              </div>
            )}
          </div>
          <div className="col-md-8 my-2">
            <table className="table table-responsive-sm table-borderless ">
              <tbody>
                <tr>
                  <td>Phone No:</td>
                  <td>{phoneNo}</td>
                </tr>
                <tr>
                  <td>Name:</td>
                  <td>
                    {name || (
                      <input
                        type="text"
                        className="form-control "
                        aria-describedby="helpId"
                        placeholder="Enter Your Name"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Birth Date:</td>
                  <td>
                    {birthDate || (
                      <input
                      type="date"
                      className="form-control "
                      aria-describedby="helpId"
                    />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Father Name:</td>
                  <td>
                    {fatherName || (
                      <input
                        type="text"
                        className="form-control "
                        aria-describedby="helpId"
                        placeholder="Enter Father name"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Mother Name:</td>
                  <td>
                    {motherName || (
                      <input
                        type="text"
                        className="form-control "
                        aria-describedby="helpId"
                        placeholder="Enter Mother name"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>
                    {email || (
                      <input
                        type="text"
                        className="form-control "
                        aria-describedby="helpId"
                        placeholder="Enter Email"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>
                    <ul style={{ listStyle: "none", padding: "0" }}>
                      <li>
                        Address :{" "}
                        {address || (
                          <input
                            type="text"
                            className="form-control "
                            aria-describedby="helpId"
                            placeholder="Enter Address"
                          />
                        )}
                      </li>
                      <li>
                        City :{" "}
                        {city || (
                          <input
                            type="text"
                            className="form-control "
                            aria-describedby="helpId"
                            placeholder="Enter City"
                          />
                        )}
                      </li>
                      <li>
                        Division :{" "}
                        {division || (
                          <input
                            type="text"
                            className="form-control "
                            aria-describedby="helpId"
                            placeholder="Enter Division"
                          />
                        )}
                      </li>
                      <li>
                        Zip Code :{" "}
                        {zip || (
                          <input
                            type="text"
                            className="form-control "
                            aria-describedby="helpId"
                            placeholder="Enter Zip Code"
                          />
                        )}
                      </li>
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
                <th>course</th>
                <th>Joining Date</th>
                <th>Leaving Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{course}</td>
                <td>{department}</td>
                <td>{session || "--"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
