import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { updateData } from "../../Functions/autoFunctions";
import LoadingCard from "../LoadingCard/LoadingCard";

const UserModal = ({ user, editingFunc }) => {
  const [editInfo, setEditInfo] = editingFunc;
  // form data states

  const { register, handleSubmit, reset } = useForm();
  const [uData, setuData] = useState(null);
  useEffect(() => {
    setuData({
      id: user?.personalInfo.id,
      name: user?.personalInfo.name,
      fatherName: user?.personalInfo.fatherName,
      motherName: user?.personalInfo.motherName,
      birthDate: user?.personalInfo.birthDate,
      address: user?.contact.address,
      city: user?.contact.city,
      division: user?.contact.division,
      zip: user?.contact.zip,
      phoneNo: user?.contact.phoneNo,
      email: user?.contact.email,
      course: user?.institutional.course,
      department: user?.institutional.department,
      session: user?.institutional.session,
    });
    console.log("updating user", user?.contact);
  }, [user]);
  useEffect(() => {
    reset(uData);
    console.log("reseting");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uData]);
  if (document.getElementById("modal")?.style.visibility === "hidden") {
    setEditInfo(false);
  }

  const [loadpage, setLoadpage] = useState(false);
  const [loadedimg, setLoadedimg] = useState("");

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
        setLoadpage(false);
        toast.success("Image File loaded");
      })
      .catch((err) => {
        setLoadpage(false);
        toast.error(err.message);
      });
  };
  const onSubmit = (data) => {
    data.id = user?.personalInfo.id;
    data.avater = loadedimg || user?.personalInfo.avater;
    setLoadpage(true);
    console.log(data);
    updateData("http://localhost:5500/updateUserProfile/" + user?._id, data)
      .then((res) => res.json())
      .then((data) => {
        setLoadpage(false);
        if (data) {
          toast.success("Profile Updated Successfully");
        } else {
          toast.error("Something went wrong");
        }
      });
  };
  return (
    <div
      id="clickid"
      className="modal fade bd-example-modal-lg"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      {loadpage && <LoadingCard></LoadingCard>}
      <div id="modal" className="modal-dialog modal-lg">
        <div className="modal-content p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-right">
              {
                <button
                  type="button"
                  className="btn btn-outline-primary "
                  onClick={() => setEditInfo(!editInfo)}
                >
                  <i className="fa fa-edit" aria-hidden="true"></i>
                </button>
              }
            </div>
            <div className="form-group">
              <label>ID:</label>
              <input
                type="text"
                className="form-control "
                disabled={true}
                {...register("id")}
              />
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control "
                disabled={!editInfo}
                {...register("name")}
              />
            </div>

            <div className="form-group">
              <label>Father Name:</label>
              <input
                type="text"
                className="form-control "
                disabled={!editInfo}
                {...register("fatherName")}
              />
            </div>
            <div className="form-group">
              <label>Mother Name:</label>
              <input
                type="text"
                className="form-control "
                disabled={!editInfo}
                {...register("motherName")}
              />
            </div>
            <div className="form-group">
              <label>Birth Date:</label>
              <input
                type="date"
                className="form-control "
                accept="mm/dd/yyyy"
                disabled={!editInfo}
                {...register("birthDate")}
              />
            </div>
            <div className="form-group">
              <div className="row">
                {user?.personalInfo.avater && (
                  <div className="col-2">
                    <img
                      style={{ height: "100px" }}
                      src={loadedimg || user?.personalInfo.avater}
                      alt={user?.personalInfo.name}
                    />
                  </div>
                )}
                <div className="col">
                  <label>Upload Avater:</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleImageData}
                    disabled={!editInfo}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                className="form-control "
                disabled={!editInfo}
                {...register("address")}
              />
            </div>
            <div className="form-group">
              <label>City:</label>
              <input
                type="text"
                className="form-control "
                disabled={!editInfo}
                {...register("city")}
              />
            </div>
            <div className="form-group">
              <label>Division:</label>
              <input
                type="text"
                className="form-control "
                disabled={!editInfo}
                {...register("division")}
              />
            </div>
            <div className="form-group">
              <label>Zip Code:</label>
              <input
                type="text"
                className="form-control "
                disabled={!editInfo}
                {...register("zip")}
              />
            </div>
            <div className="form-group">
              <label>Phone No:</label>
              <input
                type="text"
                className="form-control "
                disabled={!editInfo}
                {...register("phoneNo")}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className="form-control "
                disabled={!editInfo}
                {...register("email")}
              />
            </div>
            <div className="form-group">
              <label>
                {user?.authentication.isStudent ? "Course" : "Position"}:
              </label>
              {user?.authentication.isStudent ? (
                <select
                  className="form-control"
                  {...register("course")}
                  disabled={!editInfo}
                >
                  <option value={"B.Sc"}>B.Sc</option>
                  <option value={"B.Sc Engineering"}>B.Sc Engineering</option>
                  <option value={"M.Sc"}>M.Sc</option>
                  <option value={"M.Sc Engineering"}>M.Sc Engineering</option>
                </select>
              ) : (
                <select
                  className="form-control"
                  {...register("course", {
                    required: true,
                  })}
                >
                  <option value={"Food Manager"}>Food Manager</option>
                  <option value={"Hallroom Maintainer"}>
                    Hallroom Maintainer
                  </option>
                  <option value={"Office Assistant"}>Office Assistant</option>
                  <option value={"Hall Manager"}>Hall Manager</option>
                  <option value={"Hall Accountant"}>Hall Accountant</option>
                </select>
              )}
            </div>
            <div className="form-group">
              <label>Department:</label>
              {user?.authentication.isStudent ? (
                <select
                  className="form-control"
                  {...register("department")}
                  disabled={!editInfo}
                >
                  <option value={"Computer Science & Engineering"}>
                    Computer Science & Engineering
                  </option>
                  <option value={"Electrical & Electronics Engineering"}>
                    Electrical & Electronics Engineering
                  </option>
                  <option value={"Farmacy"}>Farmacy</option>
                  <option value={"Genetics Engineering"}>
                    Genetics Engineering
                  </option>
                  <option value={"Biochemistry"}>Biochemistry</option>
                  <option value={"Micro Biology"}>Micro Biology</option>
                  <option value={"Botany"}>Botany</option>
                  <option value={"Zoology"}>Zoology</option>
                </select>
              ) : (
                <select
                  className="form-control"
                  {...register("department", {
                    required: true,
                  })}
                >
                  <option value={"1st Class Employee"}>
                    1st Class Employee
                  </option>
                  <option value={"2nd Class Employee"}>
                    2nd Class Employee
                  </option>
                  <option value={"3rd Class Employee"}>
                    3rd Class Employee
                  </option>
                  <option value={"4th Class Employee"}>
                    4th Class Employee
                  </option>
                </select>
              )}
            </div>
            <div className="form-group">
              <label>
                {user?.authentication.isStudent ? "Session" : "Joining Date"}:
              </label>
              {user?.authentication.isStudent ? (
                <select
                  className="form-control"
                  {...register("session")}
                  disabled={!editInfo}
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
              ) : (
                <input
                  type="date"
                  className="form-control "
                  accept="mm/dd/yyyy"
                  disabled={!editInfo}
                  {...register("session")}
                />
              )}
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary max-auto btn-lg"
              disabled={!editInfo}
            >
              <i className="fa fa-save mr-2" aria-hidden="true"></i>
              Save Info
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
