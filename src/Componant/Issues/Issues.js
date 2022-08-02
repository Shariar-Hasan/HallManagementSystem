import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import {
  fromNow,
  isAdmin,
  isEmployee,
  updateData,
} from "../../Functions/autoFunctions";

const Issues = ({ issue, query }) => {
  const [loginuser, setLoginuser] = useContext(UserContext);
  const {
    id,
    _id,
    issueTopic,
    issueDescription,
    name,
    roomNo,
    uploadTime,
    status,
  } = issue;

  const [runningStatus, setRunningStatus] = useState(status);
  useEffect(() => {
    updateData("http://localhost:5500/updateIssueStatus", {
      _id,
      runningStatus,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [runningStatus]);

  return (
    <div className="card">
      <div
        className="card-header d-flex justify-content-between align-items-baseline"
        id={`headingIssue${_id}`}
      >
        <span
          className=" font-italic cursor-pointer text-primary border border-primary p-1 rounded"
          data-toggle="collapse"
          data-target={`#collapseIssue${_id}`}
          aria-controls={`collapseIssue${_id}`}
        >
          {`#${issueTopic.split(" ").join("_")} for  Room No ${roomNo}`}
        </span>
        <span>
          {isAdmin(loginuser) || (isEmployee(loginuser) && query === "IP") ? (
            <select
              className={`form-control border-0 text-${
                runningStatus === "Pending"
                  ? "warning"
                  : runningStatus === "In Progress"
                  ? "info"
                  : runningStatus === "Rejected"
                  ? "danger"
                  : runningStatus === "Success"
                  ? "success"
                  : "muted"
              }`}
              defaultValue={runningStatus}
              onChange={(e) => setRunningStatus(e.target.value)}
            >
              {!isEmployee(loginuser) && (
                <option className="text-warning" value="Pending">
                  Pending
                </option>
              )}
              <option className="text-info" value="In Progress">
                In Progress
              </option>
              <option className="text-success" value="Success">
                Success
              </option>
              <option className="text-danger" value="Rejected">
                Reject
              </option>
            </select>
          ) : (
            <span
              className={`text-${
                runningStatus === "Pending"
                  ? "warning"
                  : runningStatus === "In Progress"
                  ? "info"
                  : runningStatus === "Rejected"
                  ? "danger"
                  : runningStatus === "Success"
                  ? "success"
                  : "muted"
              } border-left p-2`}
            >
              {runningStatus}
            </span>
          )}
        </span>
      </div>

      <div
        id={`collapseIssue${_id}`}
        className="collapse"
        aria-labelledby={`headingIssue${_id}`}
        data-parent={`#accordionIssue${query}`}
      >
        <div className="card-body">
          <div className="col border">
            <p>
              <b className="">Name :</b> {name}
            </p>
            <p>
              <b className="">ID :</b> {id}
            </p>
            <p>
              <b className="">Room No :</b> {roomNo}
            </p>
            <p>
              <b className="">Issued :</b> {fromNow(uploadTime)}
            </p>
          </div>
          <div className="col border">
            <p>
              <b className="">Description : </b>
            </p>
            <p className="">{issueDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issues;
