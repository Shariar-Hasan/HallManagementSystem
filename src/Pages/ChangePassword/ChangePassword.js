import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import { SharuEncryption, updateData } from "../../Functions/autoFunctions";
import toast from "react-hot-toast";

const ChangePassword = () => {
  const [loginuser] = useContext(UserContext);
  const [hiddenPass, setHiddenPass] = useState(true);
  const {
    register,
    handleSubmit,
  } = useForm();

  const errorHandling = (data) => {
    if (data.password !== data.cPassword) {
      toast.error("Password doesn't matched");
      return false;
    } else if (data.password.length < 6) {
      toast.error("Password length should be more then 6 digit");
      return false;
    } else {
      return true;
    }
  };
  const onSubmit = (data) => {
    if (errorHandling(data)) {
      const newData = {
        id: loginuser?.id,
        password: SharuEncryption(data.password),
      };
      updateData("http://localhost:5500/changepass", newData)
        .then((res) => res.json())
        .then((data) => {
          toast.success("Password successfully updated")
        })
        .catch((err) => {
          toast.error("Something went wrong");
        });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6 mx-auto rounded shadow p-4">
            <h4 className="card-title text-info text-center">
              Change Password
            </h4>
            <form onSubmit={handleSubmit(onSubmit)} id="changepass-form">
              <div className="form-group passfield my-4">
                <input
                  type={hiddenPass ? "password" : "text"}
                  className="form-control "
                  placeholder="New Password"
                  {...register("password")}
                  autoComplete="off"
                  data-aria="password"
                />
                <span
                  className="showHidePass"
                  onClick={() => setHiddenPass(!hiddenPass)}
                >
                  {hiddenPass ? "Show" : "Hide"}
                </span>
              </div>
              <div className="form-group passfield my-4">
                <input
                  type={hiddenPass ? "password" : "text"}
                  className="form-control "
                  placeholder="Confirm Password"
                  {...register("cPassword")}
                  autoComplete="off"
                  data-aria="password"
                />
                <span
                  className="showHidePass"
                  onClick={() => setHiddenPass(!hiddenPass)}
                >
                  {hiddenPass ? "Show" : "Hide"}
                </span>
              </div>
              <div className="form-group passfield my-4">
                <button className="btn btn-lg btn-outline-primary btn-block">
                  Change Password
                  <i className="fa fa-paper-plane mx-2" aria-hidden="true"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
