import React from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { deleteData } from "../../Functions/autoFunctions";

const ApplicationCard = ({ appl }) => {
  const { id, name, avater, course, session, address, city, division, zip } =
    appl;
  const history = useHistory();

  //   function start from here
  const handleApprove = (id) => {
    swal({
      title: `Approve application`,
      text: `${name} will be elegible for the hall seat`,
      icon: "warning",
      buttons: true,
    }).then((isApproved) => {
      if (isApproved) {
        swal("Application Approved! Appoint the seat for the student", {
          icon: "success",
        }).then((isOkay) => {
          if (isOkay) {
            history.push(`/appoint-seat?stdid=${id}`);
          } else {
            swal("Application not Approved");
          }
        });
      } else {
        swal("Application not Approved");
      }
    });
  };
  const handleReject = () => {
    deleteData("http://localhost:5500/deleteApplication/" + id)
      .then((res) => res.json())
      .then((data) => {
        swal({
          title: `Application Rejected`,
          text: `${name}'s application will be rejected`,
          icon: "success",
        });
      });
  };
  return (
    <tr>
      <td>{id}</td>
      <td>
        {avater ? (
          <img src={avater} style={{ height: "50px" }} alt={appl?.name} />
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
            onClick={() => handleApprove(id)}
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
            <i className="fas fa-times mx-1"></i>
            Reject
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ApplicationCard;
