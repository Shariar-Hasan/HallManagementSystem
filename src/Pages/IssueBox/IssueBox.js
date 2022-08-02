import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../../App";
import IssueEditor from "../../Componant/IssueEditor/IssueEditor";
import Issues from "../../Componant/Issues/Issues";
import NothingAvailable from "../../Componant/NothingAvailable/NothingAvailable";
import {
  getData,
  isAdmin,
  isEmployee,
  isStudent,
} from "../../Functions/autoFunctions";

const IssueBox = () => {
  const [issues, setIssues] = useState([]);
  const [inProgIssues, setInprogIssues] = useState([]);
  const [accRejIssuses, setAccRejIssues] = useState([]);
  const [loginuser] = useContext(UserContext);
  useEffect(() => {
    isAdmin(loginuser) || isEmployee(loginuser)
      ? getData(`http://localhost:5500/getAllIssue`)
          .then((res) => res.json())
          .then((data) => {
            setIssues([...data.filter((issue) => issue.status === "Pending")]);
            setInprogIssues([
              ...data.filter((issue) => issue.status === "In Progress"),
            ]);
            setAccRejIssues([
              ...data.filter(
                (issue) =>
                  issue.status === "Success" || issue.status === "Rejected"
              ),
            ]);
          })
      : getData(`http://localhost:5500/getIssue/${loginuser?.id}`)
          .then((res) => res.json())
          .then((data) => {
            setIssues(data);
          });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          {isStudent(loginuser) && (
            <div className="col-md-6 mx-auto">
              <IssueEditor />
            </div>
          )}
          {!isEmployee(loginuser) && (
            <div className="col-md mx-auto">
              <div className="profile-card mb-5 shadow border-rounded">
                <h3 className="profile-card-header">All Issues</h3>
                <div className="profile-card-child">
                  <div id="accordionIssueALL">
                    {issues.length === 0 ? (
                      <NothingAvailable data={"No Issues Available"} />
                    ) : (
                      issues.map((issue, i) => (
                        <Issues key={i} issue={issue} query={"ALL"}></Issues>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {(isAdmin(loginuser) || isEmployee(loginuser)) && (
          <div className="row">
            <div className="col-md mx-auto">
              <div className="profile-card mb-5 shadow border-rounded">
                <h3 className="profile-card-header">In Progress Issues</h3>
                <div className="profile-card-child">
                  <div id="accordionIssueIP">
                    {inProgIssues.length === 0 ? (
                      <NothingAvailable data={"No Issues Available"} />
                    ) : (
                      inProgIssues.map((issue, i) => (
                        <Issues key={i} issue={issue} query={"IP"}></Issues>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md mx-auto">
              <div className="profile-card mb-5 shadow border-rounded">
                <h3 className="profile-card-header">
                  Success or Rejected Issues Issues
                </h3>
                <div className="profile-card-child">
                  <div id="accordionIssueSR">
                    {accRejIssuses.length === 0 ? (
                      <NothingAvailable data={"No Issues Available"} />
                    ) : (
                      accRejIssuses.map((issue, i) => (
                        <Issues key={i} issue={issue}  query={"SR"}></Issues>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IssueBox;
