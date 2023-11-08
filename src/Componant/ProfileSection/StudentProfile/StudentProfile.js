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
import {
  courseList,
  departmentList,
  sessionList,
} from "../../../Data/adminData";

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
    getData("/appliedornot/" + id)
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
        setLoadedimg(res.data.data.display_url);
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
    updateData(`/updateprofile/${data._id}`, data)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Profile Updated Successfully");
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
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
          postData(`/applyseat`, appliedUser)
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Successfully Applied for Hall seat");
              }
            })
            .catch((err) => {
              console.log(err);
              toast.error("Something went wrong");
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
          `/leavehall/${id}`,
          loginuser?.hallDetails[loginuser?.hallDetails.length - 1]
        )
          .then((res) => {
            setLoadpage(false);
            console.log(res);
            toast.success("Successfully left hall");
          })
          .catch((err) => {
            setLoadpage(false);
            console.log(err);
            toast.error("Something went wrong");
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
                {avater || loadedimg ? (
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
                        id="uploadButton"
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
                            {courseList.map((data, i) => (
                              <option key={i} value={data}>
                                {data}
                              </option>
                            ))}
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
                            {departmentList.map((data, i) => (
                              <option key={i} value={data}>
                                {data}
                              </option>
                            ))}
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
                            {sessionList.map((data, i) => (
                              <option key={i} value={data}>
                                {data}
                              </option>
                            ))}
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
                    {hallDetails.length === 0
                      ? "Apply for Seat"
                      : "Renew/Apply for Seat"}
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
