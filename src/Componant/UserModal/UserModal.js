import React, { useEffect, useState } from "react";
import swal from "sweetalert";

const UserModal = ({ user, editingFunc , handlesubmit}) => {
  const [editInfo, setEditInfo] = editingFunc;
  // form data states

  const [userName, setUserName] = useState();
  const [userFatherName, setUserFatherName] = useState();
  const [userMotherName, setUserMotherName] = useState();
  const [userBirthdate, setUserBirthdate] = useState();
  const [userAvater, setUserAvater] = useState();
  const [userAddress, setUserAddress] = useState();
  const [userCity, setUserCity] = useState();
  const [userDivision, setUserDivision] = useState();
  const [userPhoneNo, setUserPhoneNo] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userCourse, setUserCourse] = useState();
  const [userDepartment, setUserDepartment] = useState();
  const [userSession, setUserSession] = useState();
  useEffect(() => {
    setUserName(user?.personalInfo.name);
    setUserFatherName(user?.personalInfo.fatherName);
    setUserMotherName(user?.personalInfo.motherName);
    setUserBirthdate(user?.personalInfo.birthDate);
    setUserAvater(user?.personalInfo.avater);
    setUserAddress(user?.contact.address);
    setUserCity(user?.contact.city);
    setUserDivision(user?.contact.division);
    setUserPhoneNo(user?.contact.phoneNo);
    setUserEmail(user?.contact.email);
    setUserCourse(user?.institutional.course);
    setUserDepartment(user?.institutional.department);
    setUserSession(user?.institutional.session);
  }, [user]);
  console.log(userSession);
  console.log(user);
  if (document.getElementById("modal")?.style.visibility === "hidden") {
    setEditInfo(false);
  }
  const convertBase64 = (file) => {
    if (file.size > 500000) {
      swal("file size should not exceed 500 Kb", "", "warning");
      setUserAddress(userAvater)
    } else {
      setUserAvater(
        new Promise((resolve, reject) => {
          const filereader = new FileReader();
          filereader.onload = () => resolve(filereader.result);
          filereader.onerror = (error) => reject(error);
        })
      );
    }
  };

  return (
    <div
      id="clickid"
      className="modal fade bd-example-modal-lg"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div id="modal" className="modal-dialog modal-lg">
        <div className="modal-content p-5">
          <form onSubmit={handlesubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control "
                defaultValue={userName}
                onChange={(e) => setUserName(e.target.value)}
                disabled={!editInfo}
              />
            </div>

            <div className="form-group">
              <label>Father Name:</label>
              <input
                type="text"
                className="form-control "
                defaultValue={userFatherName}
                onChange={(e) => setUserFatherName(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>Mother Name:</label>
              <input
                type="text"
                className="form-control "
                defaultValue={userMotherName}
                onChange={(e) => setUserMotherName(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>Birth Date:</label>
              <input
                type="date"
                className="form-control "
                accept="mm/dd/yyyy"
                defaultValue={userBirthdate}
                onChange={(e) => setUserBirthdate(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <div className="row">
                {userAvater && (
                  <div className="col-2">
                    <img style={{ height: "100px" }} src={userAvater} alt="" />
                  </div>
                )}
                <div className="col">
                  <label>Upload Avater:</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={(e) => convertBase64(e.target.files[0])}
                    disabled={!editInfo}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                className="form-control "
                defaultValue={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>City:</label>
              <input
                type="text"
                className="form-control "
                defaultValue={userCity}
                onChange={(e) => setUserCity(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>Division:</label>
              <input
                type="text"
                className="form-control "
                defaultValue={userDivision}
                onChange={(e) => setUserDivision(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>Phone No:</label>
              <input
                type="text"
                className="form-control "
                defaultValue={userPhoneNo}
                onChange={(e) => setUserPhoneNo(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className="form-control "
                defaultValue={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>
                {user?.authentication.isStudent ? "Course" : "Position"}:
              </label>
              <input
                type="text"
                className="form-control "
                defaultValue={userCourse}
                onChange={(e) => setUserCourse(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>Department:</label>
              <input
                type="text"
                className="form-control "
                defaultValue={userDepartment}
                onChange={(e) => setUserDepartment(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>
                {user?.authentication.isStudent ? "Session" : "Joining Date"}:
              </label>
              {user?.authentication.isStudent ? (
                <input
                  type="text"
                  className="form-control"
                  defaultValue={userSession}
                  onChange={(e) => setUserSession(e.target.value)}
                  disabled={!editInfo}
                />
              ) : (
                <input
                  type="date"
                  className="form-control "
                  accept="mm/dd/yyyy"
                  defaultValue={user?.authentication.isStudent ? userSession : userSession }
                  onChange={(e) => setUserBirthdate(e.target.value)}
                  disabled={!editInfo}
                />
              )}
            </div>
            <button
              type={!editInfo ? "submit" : "button"}
              className="btn btn-outline-primary max-auto btn-lg"
              onClick={() => setEditInfo(!editInfo)}
            >
              <i
                className={`fa fa-${editInfo ? "save" : "edit"}`}
                aria-hidden="true"
              ></i>
              {editInfo ? " Save Info" : " Edit info"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
