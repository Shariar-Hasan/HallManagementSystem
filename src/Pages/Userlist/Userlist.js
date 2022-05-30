import React, { useEffect, useState } from "react";
import { fakeUserlist } from "../../Data/fakeuserlist";
import swal from "sweetalert";
import UserModal from "../../Componant/UserModal/UserModal";

const Userlist = () => {
  const [allUser, setAllUser] = useState();
  const [clickedUser, setClickedUser] = useState();
  useEffect(() => {
    const newFakeList = fakeUserlist.filter(
      (user) => user.authentication.isAdmin !== true
    );
    setAllUser(newFakeList);
  }, []);

  //   functions all
//   const handleClick = (user) => {
//    // swal(`this is ${user.personalInfo?.name}`);
//   };
  return (
    <div>
      <UserModal user={clickedUser}></UserModal>
      <div className="container">
        <div className="row">
          <div className="col-md-11 mx-auto">
            <div className="table-responsive">
              <table className="table  text-left table-striped cursor-pointer">
                <thead>
                  <tr>
                    <th scope="col">Id/Phone</th>
                    <th scope="col">Name</th>
                    <th scope="col">City</th>
                    <th scope="col">Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {allUser?.map((user, id) => (
                    <tr
                      key={id}
                      onClick={() => setClickedUser(user)}
                      data-toggle="modal"
                      data-target=".bd-example-modal-lg"
                    >
                      <td>
                        {user.authentication?.isStudent
                          ? user.id
                          : user.phoneNo}
                      </td>
                      <td>{user.personalInfo.name}</td>
                      <td>{user.contact.city}</td>
                      <td>
                        {user.authentication.isStudent ? "Student" : "Employee"}
                      </td>
                    </tr>
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
