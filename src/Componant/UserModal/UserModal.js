import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  employeePositionData,
  departmentList,
  employeeClassData,
  sessionList,
  courseList,
} from "../../Data/adminData";
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
        setLoadedimg(res.data.data.display_url);
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
    updateData("/updateUserProfile/" + user?._id, data)
      .then((res) => res.json())
      .then((data) => {
        setLoadpage(false);
        if (data) {
          toast.success("Profile Updated Successfully");
          setEditInfo(false);
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
                  {courseList.map((data, i) => (
                    <option value={data}>{data}</option>
                  ))}
                </select>
              ) : (
                <select
                  className="form-control"
                  {...register("course", {
                    required: true,
                  })}
                  disabled={!editInfo}
                >
                  {employeePositionData.map((data, i) => (
                    <option value={data}>{data}</option>
                  ))}
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
                  {departmentList.map((data, i) => (
                    <option value={data}>{data}</option>
                  ))}
                </select>
              ) : (
                <select
                  className="form-control"
                  {...register("department", {
                    required: true,
                  })}
                  disabled={!editInfo}
                >
                  {employeeClassData.map((data, i) => (
                    <option value={data}>{data}</option>
                  ))}
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
                  {sessionList.map((data, i) => (
                    <option value={data}>{data}</option>
                  ))}
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
