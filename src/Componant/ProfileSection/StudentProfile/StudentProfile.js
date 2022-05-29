import { Button, Select } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import "../profile.css";
import { useForm } from "react-hook-form";

const StudentProfile = ({
  personalInfo,
  contact,
  institutional,
  hallDetails,
}) => {
  const { id, name, avater, birthDate, fatherName, motherName } = personalInfo;
  const { address, city, division, zip, phoneNo, email } = contact;
  const { course, department, session } = institutional;
  const history = useHistory();
  const { handleSubmit } = useForm();
  const onSubmit = (data) => {};
  const handleSeat = () => {
    history.push("/apply");
  };
  return (
    <div className="mx-auto col-9 my-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="profile-card shadow border-rounded">
          <h3 className="profile-card-header">Personal Information</h3>

          <div className="row  profile-card-child">
            <div className="col-md-4">
              {avater ? (
                <img className="img-fluid mx-auto" src={avater} alt={name} />
              ) : (
                <div className="fake-avater">
                  <i className="fa fa-upload" aria-hidden="true">
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
                    <td>ID:</td>
                    <td>{id}</td>
                  </tr>
                  <tr>
                    <td>Name:</td>
                    <td>
                      {name || (
                        <input
                          type="text"
                          className="form-control "
                          aria-describedby="helpId"
                          placeholder="Enter Your name"
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
                          placeholder="Enter Father name "
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
                          placeholder="Enter Mother name "
                        />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td>
                      {phoneNo || (
                        <input
                          type="text"
                          className="form-control "
                          aria-describedby="helpId"
                          placeholder="Enter Phone Number "
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
                          placeholder="Enter Your Email "
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
                              placeholder="Address "
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
                              placeholder="Your City "
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
                              placeholder="Division "
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
                              placeholder="Zip Code "
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
                  <th>Course Name</th>
                  <th>Department</th>
                  <th>Session</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {course || (
                      <div className="form-group">
                        <select className="form-control">
                          <option>B.Sc</option>
                          <option>M.Sc</option>
                        </select>
                      </div>
                    )}
                  </td>
                  <td>
                    {department || (
                      <div className="form-group">
                        <select className="form-control">
                          <option>Computer Science & Engineering</option>
                          <option>Electrical & Electronics Engineering</option>
                          <option>Farmacy</option>
                          <option>Genetics Engineering</option>
                          <option>Biochemistry</option>
                          <option>Micro Biology</option>
                          <option>Botany</option>
                          <option>Zoology</option>
                        </select>
                      </div>
                    )}
                  </td>
                  <td>
                    {session || (
                      <div className="form-group">
                        <select className="form-control">
                          <option>2020-21</option>
                          <option>2019-20</option>
                          <option>2018-19</option>
                          <option>2017-18</option>
                          <option>2016-17</option>
                          <option>2015-16</option>
                          <option>2014-15</option>
                          <option>2013-14</option>
                          <option>2012-13</option>
                          <option>2011-12</option>
                          <option>2010-11</option>
                          <option>2009-10</option>
                          <option>2008-09</option>
                          <option>2007-08</option>
                          <option>2006-07</option>
                          <option>2005-06</option>
                          <option>2004-05</option>
                          <option>2003-04</option>
                          <option>2002-03</option>
                          <option>2001-02</option>
                          <option>2000-01</option>
                        </select>
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
      {(!course ||
        !department ||
        !session ||
        !address ||
        !city ||
        !division ||
        !zip ||
        !phoneNo ||
        !email ||
        !name ||
        !avater ||
        !birthDate ||
        !fatherName ||
        !motherName) && (
        <button className="floating-btn  btn-lg btn-outline-primary">
          Save informations
        </button>
      )}
      <div className="profile-card shadow border-rounded">
        <h3 className="profile-card-header">Hall Information</h3>
        <div className="row  profile-card-child">
          {hallDetails.length !== 0 ? (
            <>
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
                <tbody>
                  {hallDetails.map((info, i) => {
                    return (
                      <tr key={i}>
                        <td>
                          {hallDetails.length === i + 1
                            ? info.alloted
                              ? "Yes"
                              : "No"
                            : "Expired"}
                        </td>

                        <td>{info.roomNo || "N/A"}</td>
                        <td>{info.allotedDate || "N/A"}</td>
                        <td>{info.cardExpiryDate || "N/A"}</td>
                        <td>
                          {hallDetails.length === i + 1 ? (
                            <Button
                              onClick={handleSeat}
                              variant="contained"
                              color="primary"
                            >
                              {info.alloted ? "Renew Seat" : "Apply for Seat"}
                            </Button>
                          ) : (
                            "N/A"
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          ) : (
            <h4 className="text-center">No information</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
