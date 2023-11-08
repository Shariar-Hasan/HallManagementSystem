import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import moment from "moment";
import "./IssueEditor.css";
import { postData } from "../../Functions/autoFunctions";
import toast from "react-hot-toast";
import { issueTopicList } from "../../Data/adminData";

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
    data.uploadTime = moment().format("hh:mm:ss A, MM/DD/YYYY");
    postData("/addIssue", data)
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Issue Created! Wait for the admin to response");

          document.getElementById("noticeForm").reset();
        } else {
          toast.error("Something went wrong");
        }
      });
    console.log(data);
  };
  return (
    <>
      {issueOpened && (
        <div className="profile-card mb-5 shadow border-rounded">
          <h3 className="profile-card-header">Open An Issue</h3>
          <div className="profile-card-child">
            <form onSubmit={handleSubmit(onSubmit)} id="noticeForm">
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
                    {issueTopicList.map((data, i) => (
                      <option key={i} value={data}>{data}</option>
                    ))}
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
