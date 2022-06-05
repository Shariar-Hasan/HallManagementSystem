import React from "react";
import swal from "sweetalert";

const ApplicationCard = ({ appl }) => {
  const {
    id,
    name,
    avater,
    address,
    city,
    division,
    zip,
    course,
    department,
    session,
  } = appl.personalInfo;

  //   function start from here
  const handleApprove = () => {
    swal({
      title: `Approve application`,
      text: `${name} will be elegible for the hall seat`,
      icon: "warning",
      buttons: true,
    }).then((isApproved) => {
      if (isApproved) {
        swal("Application Approved", {
          icon: "success",
        });
      } else {
        swal("Application not Approved");
      }
    });
  };
  const handleReject = () => {
    swal({
      title: `Application Rejected`,
      text: `${name}'s application has been rejected`,
      icon: "success"
    })
  };
  return (
    <tr>
      <td>{id}</td>
      <td>
        {avater ? (
          <img
            src={avater + "/?img=" + Math.random()}
            style={{ height: "50px" }}
            alt={appl?.personalInfo.name}
          />
        ) : (
          <i class="fa fa-appl-circle" aria-hidden="true"></i>
        )}
      </td>
      <td>{name}</td>
      <td>{address + ", " + city + ", " + division + ", " + zip}</td>
      <td>{course}</td>
      <td>{session}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            onClick={handleApprove}
            className="btn btn-outline-secondary hover-text-white  text-success"
          >
            <i className="fas fa-check mx-1"></i>
            Approve
          </button>

          <button
            type="button"
            onClick={handleReject}
            className="btn btn-outline-secondary hover-text-white text-danger"
          >
            <i class="fas fa-times mx-1"></i>
            Reject
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ApplicationCard;
