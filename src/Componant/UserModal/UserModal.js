import React, { useEffect, useState } from "react";

const UserModal = ({ user }) => {
  const [editInfo, setEditInfo] = useState(false);


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
  useEffect(()=>{
    setUserName(user?.personalInfo.name)
    setUserFatherName(user?.personalInfo.fatherName)
    setUserMotherName(user?.personalInfo.motherName)
    setUserBirthdate(user?.personalInfo.birthDate)
    setUserAvater(user?.personalInfo.avater)
    setUserAddress(user?.contact.address)
    setUserCity(user?.contact.city)
    setUserDivision(user?.contact.division)
    setUserPhoneNo(user?.contact.phoneNo)
    setUserEmail(user?.contact.email)
    setUserCourse(user?.institutional.course)
    setUserDepartment(user?.institutional.department)
    setUserSession(user?.institutional.session)

  },[user])
  console.log(userName);
  console.log(user);
  const handlesubmit = () => {
    console.log("submitted");
  };
  return (
    <div
      className="modal fade bd-example-modal-lg"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content p-5">
          <form onSubmit={handlesubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control "
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            
            <div className="form-group">
              <label>Father Name:</label>
              <input
                type="text"
                className="form-control "
                value={userFatherName}
                onChange={(e) => setUserFatherName(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>Mother Name:</label>
              <input
                type="text"
                className="form-control "
                value={userMotherName}
                onChange={(e) => setUserMotherName(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>Birth Date:</label>
              <input
                type="date"
                
                className="form-control "
                value={new Date(userBirthdate)}
                onChange={(e) => setUserBirthdate(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>Upload Avater:</label>
              <input
                type="file"
                className="form-control "
                accept="image/*"
                onChange={(e) => setUserAvater(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                className="form-control "
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>City:</label>
              <input
                type="text"
                className="form-control "
                value={userCity}
                onChange={(e) => setUserCity(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>Division:</label>
              <input
                type="text"
                className="form-control "
                value={userDivision}
                onChange={(e) => setUserDivision(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>Phone No:</label>
              <input
                type="text"
                className="form-control "
                value={userPhoneNo}
                onChange={(e) => setUserPhoneNo(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className="form-control "
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>Course:</label>
              <input
                type="text"
                className="form-control "
                value={userCourse}
                onChange={(e) => setUserCourse(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>Department:</label>
              <input
                type="text"
                className="form-control "
                value={userDepartment}
                onChange={(e) => setUserDepartment(e.target.value)}
                disabled={!editInfo}
              />
            </div>
            <div className="form-group">
              <label>Session:</label>
              <input
                type="text"
                className="form-control "
                value={userSession}
                onChange={(e) => setUserSession(e.target.value)}
                disabled={!editInfo}
              />
            </div>

          </form>
          <button className="btn btn-outline-primary max-auto btn-lg" onClick={()=>setEditInfo(!editInfo)}><i className={`fa fa-${editInfo ? "save" : "edit"}`} aria-hidden="true"></i>{editInfo ? " Save Info" : " Edit info"}</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
