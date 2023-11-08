import moment from "moment";
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
  const [issueView, setIssueView] = useState(5);
  const [inProgIssues, setInprogIssues] = useState([]);
  const [accRejIssuses, setAccRejIssues] = useState([]);
  const [isProfileCompleted, setIsProfileCompleted] = useState(false);
  const [loginuser] = useContext(UserContext);

  useEffect(() => {
    isAdmin(loginuser) || isEmployee(loginuser)
      ? getData(`/getAllIssue`)
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
      : getData(`/getIssue/${loginuser?.id}`)
          .then((res) => res.json())
          .then((data) => {
            setIssues(data);
          });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isAdmin(loginuser)) {
      // const { name, avater, birthDate, fatherName, motherName } =
      //   loginuser?.personalInfo;
      // const { address, city, division, zip, phoneNo, email } =
      //   loginuser?.contact;
      // const { course, department, session } = loginuser?.institutional;
      setIsProfileCompleted(loginuser?.personalInfo.name !== "");
      console.log("profile completed", loginuser?.personalInfo.name !== "");
      // console.log(loginuser?.personalInfo.name);
    } else {
      setIsProfileCompleted(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginuser?.personalInfo.name]);

  // console.log(
  //   moment(
  //     loginuser?.hallDetails[
  //       loginuser?.hallDetails.length !== 0
  //         ? loginuser?.hallDetails.length - 1
  //         : 0
  //     ]?.cardExpiryDate
  //   ).isAfter(new Date())
  // );

  return (
    <div>
      <div className="container">
        <div className="row">
          {isStudent(loginuser) && (
            <div className="col-md-6 mx-auto">
              {moment(
                loginuser?.hallDetails[
                  loginuser?.hallDetails.length !== 0
                    ? loginuser?.hallDetails.length - 1
                    : 0
                ]?.cardExpiryDate
              ).isAfter(new Date()) && isProfileCompleted ? (
                <IssueEditor />
              ) : (
                <NothingAvailable data="You are not alloted now" />
              )}
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
                    ) : isProfileCompleted ? (
                      inProgIssues.map((issue, i) => (
                        <Issues key={i} issue={issue} query={"IP"}></Issues>
                      ))
                    ) : (
                      <NothingAvailable
                        data={"Please complete your profile first"}
                      />
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
                      accRejIssuses
                        .slice(0, issueView)
                        .map((issue, i) => (
                          <Issues key={i} issue={issue} query={"SR"}></Issues>
                        ))
                    )}
                    {accRejIssuses.length > issueView && (
                      <div className="text-center my-2">
                        <button
                          onClick={() => setIssueView((prev) => prev + 3)}
                          className="btn border border-primary  px-3 py-1"
                        >
                          Load more
                        </button>
                      </div>
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
