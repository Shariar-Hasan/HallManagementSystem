import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import moment from 'moment';
import "./IssueEditor.css"
import { postData } from "../../Functions/autoFunctions";
import toast from "react-hot-toast";

const IssueEditor = () => {
  const { register, handleSubmit } = useForm();
  const [loginUser, setLoginUser] = useContext(UserContext);
  const [roomNo, setRoomNo] = useState("");
  const [issueOpened, setIssueOpened] = useState(true);
  useEffect(() => {
    setRoomNo(
      loginUser?.hallDetails[loginUser?.hallDetails?.length - 1]?.roomNo
    );
  }, []);
  const onSubmit = (data) => {
    data.id = loginUser?.id;
    data.roomNo = roomNo;
    data.name = loginUser?.personalInfo.name;
    data.status = "Pending";
    data.uploadTime = moment().format("hh:mm:ss A, MM/DD/YYYY")
    postData("http://localhost:5500/addIssue",data)
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            toast.success("Issue Created! Wait for the admin to response")
        }
        else{
            toast.error("Something went wrong")
        }
    })
    console.log(data)

    // document.getElementById("noticeForm").reset();
  };
  return (
    <>
      {issueOpened && (
        <div className="profile-card mb-5 shadow border-rounded">
          <h3 className="profile-card-header">Post Notice</h3>
          <div className="profile-card-child">
            <form onSubmit={handleSubmit(onSubmit)} id="noticeForm">
              {/* <div className="form-group">
                <label className="w-100">
                  <h6>Id :</h6>
                  <input
                    type="text"
                    className="form-control"
                    value={loginUser?.id}
                    disabled
                    {...register("id")}
                  />
                </label>
              </div> */}
              {/* <div className="form-group">
                <label className="w-100">
                  <h6>Room No :</h6>
                  <input
                    type="text"
                    className="form-control"
                    value={roomNo}
                    disabled
                    {...register("roomNo")}
                  />
                </label>
              </div> */}
              <div className="form-group">
                <label className="w-100">
                  <h6>Select Issue Topic :</h6>
                  <select
                    className="form-control"
                    defaultValue={""}
                    {...register("issueTopic", { required: true })}
                  >
                    <option value="" disabled>
                      Select a Topic
                    </option>
                    <option value="Need Electrician">Need Electrcian</option>
                    <option value="Need Plumber">Need Plumber</option>
                    <option value="Need Cleaner">Need Cleaner</option>
                    <option value="Dining Issue">Dining Issue</option>
                    <option value="Room Issue">Room Issue</option>
                    <option value="Internet Issue">Internet Issue</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>
              <div className="form-group">
                <label className="w-100">
                  <h6>Issue Description : </h6>
                  <textarea
                    rows={5}
                    className="form-control"
                    placeholder="Enter your issue description here"
                    {...register("issueDescription", { required: true })}
                  />
                </label>
              </div>

              <button className="btn-lg btn-block btn-primary" type="submit">
                Submit Issue{" "}
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default IssueEditor;
