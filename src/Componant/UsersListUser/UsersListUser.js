import React from "react";

const UsersListUser = ({ handleDelete, handleUserClick, user }) => {
  return (
    <tr>
      <td>{user?.id}</td>
      <td style={{fontSize : "40px"}}>
        {user?.personalInfo.avater ? (
          <img src={user?.personalInfo?.avater} style={{height : "50px"}} alt={user?.personalInfo.name} />
        ) : (
          <i className="fa fa-user-circle" aria-hidden="true"></i>
        )}
      </td>
      <td>{user?.personalInfo.name || "Incomplete Profile"}</td>
      <td>{user?.contact.city || "Incomplete Profile"}</td>
      <td>{user?.authentication.isStudent ? "Student" : "Employee"}</td>
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
            onClick={() => handleDelete(user?.personalInfo.name)}
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
