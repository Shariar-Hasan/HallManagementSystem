import React from "react";
import AdminBox from "../../AdminBox/AdminBox";

import { useForm } from "react-hook-form";
const AdminProfile = ({ admin }) => {
  const { register, handleSubmit } = useForm();
  const {
    personalInfo: { name, email },
  } = admin;

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="mx-auto col-9 my-2">
      <div className="profile-card shadow border-rounded">
        <h3 className="profile-card-header">Admin Information</h3>
        <div className="row  profile-card-child">
          <div className="col-12 text-center">
            <h1>
              Hello <span className="special-text">{name}</span>
            </h1>
          </div>
          <div className="col-12 my-2">
            <table className="table table-responsive-sm table-bordered ">
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="profile-card shadow border-rounded">
        <h3 className="profile-card-header">Users Information</h3>
        <div className="row  profile-card-child">
          <AdminBox
            header={"Total User"}
            total={"228"}
            list1={"Student  152"}
            list2={"Employee 156"}
          ></AdminBox>
          <AdminBox
            header={"Total Student"}
            total={"228"}
            list1={"Alloted Student 104"}
            list2={"Non Alloted 224"}
          ></AdminBox>
        </div>
      </div>
      <div className="profile-card shadow border-rounded">
        <h3 className="profile-card-header">Add New Admin</h3>
        <div className="row  profile-card-child">
          <div className="col-10 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group w-100">
                <label className="w-100">
                  <h6>Admin Name</h6>
                  <input
                    type="text"
                    className="form-control d-inline-block w-100 mx-auto"
                    placeholder="Enter Admin Name "
                    autoComplete="off"
                    {...register("name", {
                      required: true,
                    })}
                  />
                </label>
                <label className="w-100">
                  <h6>Admin Email</h6>
                  <input
                    type="text"
                    className="form-control d-inline-block w-100 mx-auto"
                    placeholder="Enter Admin Email"
                    autoComplete="off"
                    {...register("email", {
                      required: true,
                    })}
                  />
                </label>
                <label className="w-100">
                  <h6>Initial Password </h6>
                  <input
                    type="text"
                    className="form-control w-100 d-inline-block mx-auto"
                    placeholder="Enter Initial Password"
                    autoComplete="off"
                    {...register("password", {
                      required: true,
                    })}
                  />
                </label>
              </div>

              <button className="btn-lg btn-block btn-primary" type="submit">
                Add Admin
                <i className="fa fa-user-plus mx-3" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
