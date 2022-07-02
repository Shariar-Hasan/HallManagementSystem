import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
import swal from "sweetalert";
import NothingAvailable from "../../Componant/NothingAvailable/NothingAvailable";
import UserModal from "../../Componant/UserModal/UserModal";
import UsersListUser from "../../Componant/UsersListUser/UsersListUser";
import { getData } from "../../Functions/autoFunctions";

const Userlist = () => {
  // const { register, handleSubmit } = useForm();
  const [allUser, setAllUser] = useState([]);
  const [searchedOption, setSearchedOption] = useState("id");
  const [searchedString, setSearchedString] = useState("");
  const [searchedUser, setSearcheedUser] = useState([]);
  const [clickedUser, setClickedUser] = useState();
  const [selectedDesignation, setSelectedDEsignation] = useState("");
  const [editInfo, setEditInfo] = useState(false);
  const [sortbyId, setSortbyId] = useState(true);

  const handleUserClick = (user) => {
    setEditInfo(false);
    setClickedUser(user);
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
  // all user data call
  useEffect(() => {
    getData("http://localhost:5500/allprofile")
      .then((res) => res.json())
      .then((data) => {
        const userlist = data.filter(
          (user) => user.authentication.isAdmin === false
        );
        allUser.sort((a, b) =>
          sortbyId
            ? a.personalInfo.id - b.personalInfo.id
            : b.personalInfo.id - a.personalInfo.id
        );
        setAllUser(userlist);
      });
  }, []);
  useEffect(() => {
    if (searchedString)
      setSearcheedUser([
        ...allUser.filter((user) =>
          user.personalInfo[searchedOption]
            .toLowerCase()
            .includes(searchedString.toLowerCase())
        ),
      ]);
    else {
      setSearcheedUser(allUser);
    }
  }, [allUser, searchedString, searchedOption]);

  return (
    <div>
      <UserModal
        user={clickedUser}
        editingFunc={[editInfo, setEditInfo]}
      ></UserModal>
      <div className="container">
        <div className="row">
          <div className="col-md-8 search-group  ">
            <form onSubmit={(e) => e.preventDefault()} className="from">
              <div className="input-group search-form shadow">
                <select
                  className="form-control col-3"
                  value={searchedOption}
                  onChange={(e) => setSearchedOption(e.target.value)}
                >
                  <option value="id">Search by Id</option>
                  <option value="name">Search by Name</option>
                </select>
                <input
                  type="text"
                  class="form-control col-8"
                  placeholder="Search Students or Employee"
                  value={searchedString}
                  onChange={(e) => setSearchedString(e.target.value)}
                />
                <span
                  onClick={() => setSearchedString("")}
                  className=" form-control col-1 d-flex justify-content-center align-items-center click-effect"
                >
                  {searchedString ? (
                    <i class="fa fa-times " aria-hidden="true"></i>
                  ) : (
                    <i class="fa fa-search" aria-hidden="true"></i>
                  )}
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-11 mx-auto mt-2">
            <div className="table-responsive">
              <table className="table  text-left table-striped cursor-pointer">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" onClick={() => setSortbyId(!sortbyId)}>
                      Id/Phone
                      {sortbyId ? (
                        <i class="fa fa-sort-down" aria-hidden="true"></i>
                      ) : (
                        <i class="fa fa-sort-up" aria-hidden="true"></i>
                      )}
                    </th>
                    <th scope="col" >
                      Avater
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">City</th>
                    <th scope="col">
                      <select
                        className="form-control"
                        defaultValue={selectedDesignation}
                        onChange={(e) => setSelectedDEsignation(e.target.value)}
                      >
                        <option value="" selected>
                          All User
                        </option>
                        <option value="Students">Students</option>
                        <option value="Employees">Employees</option>
                      </select>
                    </th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {searchedUser.length === 0 ? (
                    <tr>
                      <td colSpan={6}>
                        <NothingAvailable data={"No User Available"} />
                      </td>
                    </tr>
                  ) : (
                    searchedUser
                      ?.filter(
                        (user) =>
                          (user.authentication.isStudent === true &&
                            selectedDesignation === "Students") ||
                          (user.authentication.isEmployee === true &&
                            selectedDesignation === "Employees") ||
                          (user.authentication.isAdmin === false &&
                            selectedDesignation === "")
                      )
                      .filter(
                        (user) =>
                          user.personalInfo[searchedOption] ===
                            searchedString ||
                          user.authentication.isAdmin === false
                      )
                      .sort((a, b) =>
                        sortbyId
                          ? a.personalInfo.id - b.personalInfo.id
                          : b.personalInfo.id - a.personalInfo.id
                      )
                      .map((user, id) => (
                        <UsersListUser
                          key={id}
                          handleDelete={handleDelete}
                          user={user}
                          handleUserClick={handleUserClick}
                        ></UsersListUser>
                      ))
                  )}
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
