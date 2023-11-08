import moment from "moment";
import React from "react";
import { isStudent } from "../../Functions/autoFunctions";

const UsersListUser = ({ handleDelete, handleUserClick, user }) => {
  const isAlloted =
    isStudent(user) &&
    user.hallDetails.length > 0 &&
    moment(
      user.hallDetails[user.hallDetails.length - 1]?.cardExpiryDate
    ).isAfter(new Date());
  return (
    <tr className="user-row">
      <td>{user?.id}</td>
      <td style={{ fontSize: "40px" }}>
        {user?.personalInfo.avater ? (
          <img
            src={user?.personalInfo?.avater}
            style={{ height: "50px" }}
            alt={"HMS User"}
          />
        ) : (
          <i className="fa fa-user-circle" aria-hidden="true"></i>
        )}
      </td>
      <td>{user?.personalInfo.name || "Incomplete Profile"}</td>
      <td>{user?.contact.city || "Incomplete Profile"}</td>
      <td className="text-center">
        {user?.authentication.isStudent ? (
          <span title={isAlloted ? "Alloted Student" : "Non Alloted Student"}>
            Student<sup  className="text-primary  m x-2 badge ">{isAlloted && "(A)"}</sup>
          </span>
        ) : (
          "Employee"
        )}
      </td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => handleUserClick(user)}
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
          >
            <i className="fa fa-edit" aria-hidden="true"></i>
          </button>
          <button type="button" className="btn btn-outline-secondary">
            <i className="fa fa-comment-alt"></i>
          </button>

          <button
            type="button"
            onClick={() => handleDelete(user?.id)}
            className="btn btn-outline-secondary"
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UsersListUser;
