import React from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

const AppointSeat = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // if (data.noticeImage.length === 0) data.noticeImage = "";
    // data.postUpdated =
    //   new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString();
    // data.visibleToEveryone = !data.visibleToEveryone;
    // console.log(data);
  };
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 mx-auto bg-muted">
          <div className="profile-card mb-5 shadow border-rounded">
            <h3 className="profile-card-header">Allocate Room for Student</h3>
            <div className="profile-card-child">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label className="w-100">
                    <h6>Student ID :</h6>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Notice Title"
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
                      {...register("roomNo", { required: true })}
                    >
                      <option selected disabled>
                        Select a Room
                      </option>
                      <option value="440">441</option>
                      <option value="441">442</option>
                      <option value="442">442</option>
                      <option value="443">443</option>
                      <option value="444">443</option>
                      <option value="445">445</option>
                      <option value="446">446</option>
                      <option value="447">447</option>
                      <option value="448">448</option>
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
                <button className="btn-lg btn-block btn-primary" type="submit">
                  Submit <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointSeat;
