import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import { postData, updateData } from "../../../Functions/autoFunctions";
import LoadingCard from "../../LoadingCard/LoadingCard";
import toast from "react-hot-toast";
import swal from "sweetalert";
import {
  employeePositionData,
  employeeClassData,
} from "../../../Data/adminData";
import { allCity, allDivision } from "../../../Data/fakedata";

const EmployeeProfile = ({
  personalInfo,
  contact,
  institutional,
  hallDetails,
}) => {
  const { register, handleSubmit } = useForm();
  const [loginuser, setLoginuser] = useContext(UserContext);
  const { id, name, avater, birthDate, fatherName, motherName } = personalInfo;
  const { address, city, division, zip, email } = contact;
  const { course, department, session } = institutional;
  const allInfoFound =
    (id &&
      name &&
      avater &&
      birthDate &&
      fatherName &&
      motherName &&
      email &&
      address &&
      city &&
      division &&
      zip) !== "";

  const [loadpage, setLoadpage] = useState(false);
  const [loadedimg, setLoadedimg] = useState("");
  // loading image data from input field
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

  // update your profile
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
      });
  };
  const onSubmit = (data) => {
    if (loadedimg) {
      data.avater = loadedimg;
      updateProfile(data);
    } else {
      toast.error("Please upload your passport size photo");
    }
    // console.log(data)
  };
  const haandleLeaveHall = () => {
    swal({
      title: "Leave Hall?",
      text: "Are you sure you want to Leave?",
      icon: "info",
      buttons: true,
      dangerMode: true,
    }).then((leave) => {
      if (leave) {
        toast.success("Successfully left Hall");
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
                    <i className="fa fa-user" aria-hidden="true">
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
                      <td>Phone No:</td>
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
                            placeholder="Enter Your Name"
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
                            placeholder="Enter Father name"
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
                            placeholder="Enter Mother name"
                            {...register("motherName", {
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
                            placeholder="Enter Email"
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
                                placeholder="Enter Address"
                                {...register("address", {
                                  required: true,
                                })}
                              />
                            )}
                          </li>
                          <li>
                            City :{" "}
                            {city || (
                              <input
                                list="city-list"
                                type="text"
                                className="form-control "
                                aria-describedby="helpId"
                                placeholder="Enter City"
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
                            Division :{" "}
                            {division || (
                              <input
                                list="division-list"
                                type="text"
                                className="form-control "
                                aria-describedby="helpId"
                                placeholder="Enter Division"
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
                            Zip Code :{" "}
                            {zip || (
                              <input
                                type="text"
                                className="form-control "
                                aria-describedby="helpId"
                                placeholder="Enter Zip Code"
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
                    <th>Desgnation</th>
                    <th>Designation by Class</th>
                    <th>Joining Date</th>
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
                            <option value="" disabled>
                              Select your designation
                            </option>
                            {employeePositionData.map((data, i) => (
                              <option value={data}>{data}</option>
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
                            <option value="" disabled>
                              Select your Class
                            </option>
                            {employeeClassData.map((data, i) => (
                              <option value={data}>{data}</option>
                            ))}
                          </select>
                        </div>
                      )}
                    </td>
                    <td>
                      {session || (
                        <div className="form-group">
                          <input
                            type="date"
                            className="form-control"
                            {...register("session", {
                              required: true,
                            })}
                          />
                        </div>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
              {allInfoFound && (
                <div className="text-center col-md-4 mx-auto">
                  <button
                    type="button"
                    onClick={haandleLeaveHall}
                    className="btn btn-outline-primary w-100"
                  >
                    Leave Hall
                  </button>
                </div>
              )}
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
      </div>
    </>
  );
};

export default EmployeeProfile;
