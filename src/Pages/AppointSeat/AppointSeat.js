import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { getData, postData } from "../../Functions/autoFunctions";
import { useState } from "react";
import LoadingCard from "../../Componant/LoadingCard/LoadingCard";
import toast from "react-hot-toast";

const AppointSeat = () => {
  const { register, handleSubmit } = useForm();
  const [roomList, setRoomList] = useState([]);
  const [pageload, setPageload] = useState(false);
  const onSubmit = (data) => {
    // setPageload(true);
    console.log(data);
    postData(`/appointSeat`, data)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          toast.success("User Id : " + data.stdId + " is successfully alloted");
          document.getElementById("aponitForm").reset()
          history.push("/applications")
        } else {
          toast.error("Something went wrong");
        }
      });
  };
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();
  const history = useHistory()
  useEffect(() => {
    getData("/roomCheck")
      .then((res) => res.json())
      .then((data) => {
        setRoomList(data);
      });
  }, []);
  return (
    <>
      {pageload && <LoadingCard />}
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto bg-muted">
            <div className="profile-card mb-5 shadow border-rounded">
              <h3 className="profile-card-header">Allocate Room for Student</h3>
              <div className="profile-card-child">
                <form onSubmit={handleSubmit(onSubmit)} id="aponitForm">
                  <div className="form-group">
                    <label className="w-100">
                      <h6>Student ID :</h6>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type Student ID"
                        autoComplete="off"
                        defaultValue={query.get("stdid")}
                        {...register("stdId", { required: true })}
                      />
                    </label>
                  </div>

                  <div className="form-group">
                    <label className="w-100">
                      <h6>Allocate Room : </h6>
                      <select
                        className="form-control"
                        defaultValue={""}
                        {...register("roomNo", { required: true })}
                      >
                        <option disabled value="">
                          Select a Room
                        </option>
                        {roomList.map((room) => (
                          <option className={`cursor-pointer text-${4 <= room.allotedUsers.length ? "danger" : "success" }`} key={room._id} value={room.roomNo} disabled={4 <= room.allotedUsers.length}>
                            {room.roomNo}{` (${4 - room.allotedUsers.length} Seats Available )`}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="form-group">
                    <label className="w-100">
                      <h6>Alloted from :</h6>

                      <input
                        type="date"
                        className="form-control"
                        {...register("allotedDate", { required: true })}
                      />
                    </label>
                  </div>
                  <button
                    className="btn-lg btn-block btn-primary click-effect"
                    type="submit"
                  >
                    Submit{" "}
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointSeat;


