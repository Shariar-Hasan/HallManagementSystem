import React, { useState } from "react";
import AdminBox from "../../AdminBox/AdminBox";

import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { getData, postData, SharuEncryption } from "../../../Functions/autoFunctions";
import LoadingCard from "../../LoadingCard/LoadingCard";
import { useEffect } from "react";
const AdminProfile = ({ admin }) => {
  const { register, handleSubmit } = useForm();

  const [loadpage, setLoadpage] = useState(false);
  const [datacount, setDatacount] = useState({});
  const {
    _id, id
  } = admin;
  
  const setToDatabase = (adminData) => {
    postData("/createUser", [adminData]).then((res) => {
      if (res.status === 200) {
        toast.success("New Admin Successfully created!");
      } else {
        toast.error(res.statusText);
      }
      setLoadpage(false);
      document.getElementById("form").reset();
    });
  };
  const onSubmit = (data) => {
    setLoadpage(true);
    const createdAdmin = {
      id: data.email,
      password: SharuEncryption(data.password),
      authentication: {
        isAdmin: true,
        isStudent: false,
        isEmployee: false,
      },
    };
    setToDatabase(createdAdmin);
  };



  // all load data funtion here
  useEffect(()=>{
    getData("/userCountData")
    .then(res => res.json())
    .then(data => setDatacount(data))
    .catch(err => console.log(err))
  },[])
  return (
    <>
      {loadpage && <LoadingCard></LoadingCard>}

      <div className="mx-auto col-9 my-2">
        <div className="profile-card shadow border-rounded">
          <h3 className="profile-card-header">Admin Information</h3>
          <div className="row  profile-card-child">
            <div className="col-12 text-center">
              <h1>
                Hello <span className="special-text">{id.split("@")[0]}</span>
              </h1>
            </div>
            <div className="col-12 my-2">
              <table className="table table-responsive-sm table-bordered ">
                <tbody>
                  <tr>
                    <td>Admin ID:</td>
                    <td>{_id}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{id}</td>
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
              total={datacount.totaluser - datacount.admuser}
              list1={`Student  ${datacount.stduser}`}
              list2={`Employee ${datacount.empluser}`}
              para1={datacount.stduser}
              para2={datacount.empluser}
            ></AdminBox>
            <AdminBox
              header={"Total Student"}
              total={datacount.stduser}
              list1={`Alloted Student ${datacount.allotedstd}`}
              list2={`Non Alloted ${datacount.stduser - datacount.allotedstd}`}
              para1={datacount.allotedstd}
              para2={datacount.stduser - datacount.allotedstd}
            ></AdminBox>
          </div>
        </div>
        <div className="profile-card shadow border-rounded">
          <h3 className="profile-card-header">Add New Admin</h3>
          <div className="row  profile-card-child">
            <div className="col-10 mx-auto">
              <form onSubmit={handleSubmit(onSubmit)} id="form">
                <div className="form-group w-100">
                  <label className="w-100">
                    <h6>Admin Email</h6>
                    <input
                      type="email"
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
    </>
  );
};

export default AdminProfile;
