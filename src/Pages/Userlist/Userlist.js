import React, { useEffect, useState } from "react";
import { fakeUserlist } from "../../Data/fakeuserlist";
import swal from "sweetalert";
import UserModal from "../../Componant/UserModal/UserModal";
import SideNav from "./../../Componant/SideNav/SideNav";
import UsersListUser from "../../Componant/UsersListUser/UsersListUser";

const Userlist = () => {
  const [allUser, setAllUser] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [employeeList, setEmployeeList] = useState([]);
  const [clickedUser, setClickedUser] = useState();
  const [editInfo, setEditInfo] = useState(false);
  useEffect(() => {
    fetch("./../../Data/fakeEmployeeList.json")
    .then(data => setStudentList(data))

    console.log(studentList);
  }, []);
  useEffect(() => {
    fetch("./../../Data/fakeEmployeeList.json")
    .then(data => setEmployeeList(data))

    console.log(employeeList);

  }, []);
  useEffect(() => {
    const newFakeList = fakeUserlist.filter(
      (user) => user.authentication.isAdmin !== true
    );
    setAllUser(newFakeList);
  }, []);

  const handleUserClick = (user) => {
    setEditInfo(false);
    setClickedUser(user);
  };

  // function all
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    document.getElementById("clickid").click();
  };
  const handleDelete = (name) => {
    swal({
      title: `Deleting User ${name}`,
      text: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("User Deleted", {
          icon: "success",
        });
      } else {
        swal("User not deleted");
      }
    });
  };

  return (
    <div>
      <SideNav></SideNav>
      <UserModal
        user={clickedUser}
        editingFunc={[editInfo, setEditInfo]}
        handlesubmit={handlesubmit}
      ></UserModal>
      <div className="container">
        <div className="row">
          <div className="col-md-11 mx-auto">
            <div className="table-responsive">
              <table className="table  text-left table-striped cursor-pointer">
                <thead>
                  <tr>
                    <th scope="col">Id/Phone</th>
                    <th scope="col">Avater</th>
                    <th scope="col">Name</th>
                    <th scope="col">City</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allUser?.map((user, id) => (
                    <UsersListUser
                      key={id}
                      handleDelete={handleDelete}
                      user={user}
                      handleUserClick={handleUserClick}
                    ></UsersListUser>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlist;
