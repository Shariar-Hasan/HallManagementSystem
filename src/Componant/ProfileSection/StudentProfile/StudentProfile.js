import React from "react";
import swal from "sweetalert";
import moment from "moment";
import "../profile.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../../App";
import {
  getData,
  postData,
  updateData,
} from "../../../Functions/autoFunctions";
import axios from "axios";
import { useState } from "react";
import LoadingCard from "../../LoadingCard/LoadingCard";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { allCity, allDivision } from "../../../Data/fakedata";

const StudentProfile = ({
  personalInfo,
  contact,
  institutional,
  hallDetails,
}) => {
  const { register, handleSubmit } = useForm();
  const [loginuser] = useContext(UserContext);
  const { id, name, avater, birthDate, fatherName, motherName } =
    loginuser?.personalInfo || {};
  const { address, city, division, zip, phoneNo, email } = loginuser?.contact;
  const { course, department, session } = loginuser?.institutional;
  const allInfoFound =
    (course &&
      department &&
      session &&
      address &&
      city &&
      division &&
      zip &&
      phoneNo &&
      email &&
      name &&
      avater &&
      birthDate &&
      motherName &&
      fatherName) !== "";
  const [loadpage, setLoadpage] = useState(false);
  const [loadedimg, setLoadedimg] = useState("");
  const [applied, setApplied] = useState(false);
  useEffect(() => {
    getData("http://localhost:5500/appliedornot/" + id)
      .then((res) => res.json())
      .then((data) => {
        setApplied(data);
        console.log("appliced", data);
      });
  });

  // handling image data
  const handleImageData = (e) => {
    setLoadpage(true);
    const form = new FormData();
    form.append("image", e.target.files[0]);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=57d3b3c06a33a91f0cb79cb93739c8e2",
        form
      )
      .then((res) => {
        setLoadedimg(res.data.data.medium.url);
        console.log(res);
        setLoadpage(false);
        toast.success("Image File loaded");
      })
      .catch((err) => {
        setLoadpage(false);
        console.log(err);
        toast.error(err.message);
      });
  };

  // updating profile in database
  const updateProfile = (data) => {
    data.id = id;
    data._id = loginuser._id;
    updateData(`http://localhost:5500/updateprofile/${data._id}`, data)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Profile Updated Successfully");
        } else {
          toast.error("Something went wrong");
        }
      });
  };
  const onSubmit = (data) => {
    if (loadedimg) {
      data.avater = loadedimg;
      updateProfile(data);
    } else {
      toast.error("Please upload your passport size photo");
    }
  };
  const handleSeat = () => {
    setLoadpage(true);
    if (allInfoFound) {
      swal({
        title: "Apply for seat",
        text: "Are you sure you want to apply?",
        icon: "info",
        buttons: true,
        dangerMode: true,
      }).then((apply) => {
        if (apply) {
          const appliedUser = {
            id: loginuser.id,
            name: loginuser.personalInfo.name,
            avater: loginuser.personalInfo.avater,
            address: loginuser.contact.address,
            city: loginuser.contact.city,
            division: loginuser.contact.division,
            zip: loginuser.contact.zip,
            course: loginuser.institutional.course,
            session: loginuser.institutional.session,
          };
          postData(`http://localhost:5500/applyseat`, appliedUser)
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Successfully Applied for Hall seat");
              }
            });
        } else {
          toast.error("Not Applied");
        }
      });
    } else {
      toast.error("Please Complete your profile First");
    }

    setLoadpage(false);
  };
  const handleHallLeave = () => {
    swal({
      title: `Confirm Leave`,
      text: "Do you want to leave the Hall?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willLeave) => {
      if (willLeave) {
        setLoadpage(true);
        // console.log(loginuser?.hallDetails[loginuser?.hallDetails.length-1])
        updateData(
          `http://localhost:5500/leavehall/${id}`,
          loginuser?.hallDetails[loginuser?.hallDetails.length - 1]
        )
          .then((res) => {
            setLoadpage(false);
          })
          .catch((err) => {
            setLoadpage(false);
          });

        setLoadpage(false);
      }
    });
  };
  return (
    <>
      {loadpage && <LoadingCard></LoadingCard>}
      <div className="mx-auto col-9 my-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="profile-card shadow border-rounded">
            <h3 className="profile-card-header">Personal Information</h3>

            <div className="row  profile-card-child">
              <div className="col-md-4">
                {avater ? (
                  <img
                    className="img-fluid mx-auto"
                    src={loadedimg || avater}
                    alt={name}
                  />
                ) : (
                  <div className="fake-avater">
                    <i className="fa fa-upload" aria-hidden="true">
                      <small>Upload Image</small>
                      <input
                        className="ul_image_input"
                        type="file"
                        accept="image/*"
                        onInput={handleImageData}
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
                            {...register("name", {
                              required: true,
                            })}
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
                            {...register("birthDate", {
                              required: true,
                            })}
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
                            {...register("fatherName", {
                              required: true,
                            })}
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
                            {...register("motherName", {
                              required: true,
                            })}
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
                            {...register("phoneNo", {
                              required: true,
                            })}
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
                            {...register("email", {
                              required: true,
                            })}
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
                                {...register("address", {
                                  required: true,
                                })}
                              />
                            )}
                          </li>
                          <li>
                            Division :{" "}
                            {division || (
                              <input
                                list="division-list"
                                type="text"
                                className="form-control "
                                aria-describedby="helpId"
                                placeholder="Division "
                                {...register("division", {
                                  required: true,
                                })}
                              />
                            )}
                            <datalist id="division-list">
                              {allDivision.map((opt) => (
                                <option key={opt}>{opt}</option>
                              ))}
                            </datalist>
                          </li>

                          <li>
                            City :{" "}
                            {city || (
                              <input
                                list="city-list"
                                type="text"
                                className="form-control "
                                aria-describedby="helpId"
                                placeholder="Your City "
                                {...register("city", {
                                  required: true,
                                })}
                              />
                            )}
                            <datalist id="city-list">
                              {allCity.map((opt) => (
                                <option key={opt}>{opt}</option>
                              ))}
                            </datalist>
                          </li>
                          <li>
                            Zip Code :{" "}
                            {zip || (
                              <input
                                type="text"
                                className="form-control "
                                aria-describedby="helpId"
                                placeholder="Zip Code "
                                {...register("zip", {
                                  required: true,
                                })}
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
                    <th>Course</th>
                    <th>Department</th>
                    <th>Session</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {course || (
                        <div className="form-group">
                          <select
                            className="form-control"
                            {...register("course", {
                              required: true,
                            })}
                          >
                            <option value={"B.Sc"}>B.Sc</option>
                            <option value={"B.Sc Engineering"}>
                              B.Sc Engineering
                            </option>
                            <option value={"M.Sc"}>M.Sc</option>
                            <option value={"M.Sc Engineering"}>
                              M.Sc Engineering
                            </option>
                          </select>
                        </div>
                      )}
                    </td>
                    <td>
                      {department || (
                        <div className="form-group">
                          <select
                            className="form-control"
                            {...register("department", {
                              required: true,
                            })}
                          >
                            <option value={"Computer Science & Engineering"}>
                              Computer Science & Engineering
                            </option>
                            <option
                              value={"Electrical & Electronics Engineering"}
                            >
                              Electrical & Electronics Engineering
                            </option>
                            <option value={"Farmacy"}>Farmacy</option>
                            <option value={"Genetics Engineering"}>
                              Genetics Engineering
                            </option>
                            <option value={"Biochemistry"}>Biochemistry</option>
                            <option value={"Micro Biology"}>
                              Micro Biology
                            </option>
                            <option value={"Botany"}>Botany</option>
                            <option value={"Zoology"}>Zoology</option>
                          </select>
                        </div>
                      )}
                    </td>
                    <td>
                      {session || (
                        <div className="form-group">
                          <select
                            className="form-control"
                            {...register("session", {
                              required: true,
                            })}
                          >
                            <option value={"2020-21"}>2020-21</option>
                            <option value={"2019-20"}>2019-20</option>
                            <option value={"2018-19"}>2018-19</option>
                            <option value={"2017-18"}>2017-18</option>
                            <option value={"2016-17"}>2016-17</option>
                            <option value={"2015-16"}>2015-16</option>
                            <option value={"2014-15"}>2014-15</option>
                            <option value={"2013-14"}>2013-14</option>
                            <option value={"2012-13"}>2012-13</option>
                            <option value={"2011-12"}>2011-12</option>
                            <option value={"2010-11"}>2010-11</option>
                            <option value={"2009-10"}>2009-10</option>
                            <option value={"2008-09"}>2008-09</option>
                            <option value={"2007-08"}>2007-08</option>
                            <option value={"2006-07"}>2006-07</option>
                            <option value={"2005-06"}>2005-06</option>
                            <option value={"2004-05"}>2004-05</option>
                            <option value={"2003-04"}>2003-04</option>
                            <option value={"2002-03"}>2002-03</option>
                            <option value={"2001-02"}>2001-02</option>
                            <option value={"2000-01"}>2000-01</option>
                          </select>
                        </div>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {allInfoFound || (
            <button
              type="submit"
              className="floating-btn  btn-lg btn-outline-primary"
            >
              Save informations
              <i className="p-2 fas fa-save"></i>
            </button>
          )}
        </form>

        <div className="profile-card mb-5 shadow border-rounded">
          <h3 className="profile-card-header">Hall Information</h3>
          <div className="row  profile-card-child">
            {hallDetails.length !== 0 && (
              <table className="table table-responsive-sm text-center table-bordered w-100">
                <thead>
                  <tr>
                    <th>Allotment</th>
                    <th>Room No</th>
                    <th>Start Date</th>
                    <th>Expiry Date</th>
                  </tr>
                </thead>
                <tbody>
                  {hallDetails.map((info, i) => {
                    return (
                      <tr key={i}>
                        <td>
                          {moment(info.cardExpiryDate).isAfter(new Date()) ? (
                            <span className="text-success">Alloted</span>
                          ) : (
                            <span className="text-danger">Expired</span>
                          )}
                        </td>

                        <td>{info.roomNo || "N/A"}</td>
                        <td>{info.allotedDate || "N/A"}</td>
                        <td>{info.cardExpiryDate || "N/A"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}

            {hallDetails.length !== 0 &&
            moment(hallDetails[hallDetails.length - 1].cardExpiryDate).isAfter(
              new Date()
            ) ? (
              <button
                onClick={handleHallLeave}
                className="mx-auto btn btn-outline-primary px-5"
              >
                Leave Hall
              </button>
            ) : (
              <>
                {applied ? (
                  <span className="mx-auto px-5">Applied for seat</span>
                ) : (
                  <button
                    onClick={handleSeat}
                    className="mx-auto btn btn-outline-primary px-5"
                    disabled={applied}
                  >
                    Apply for Seat
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
