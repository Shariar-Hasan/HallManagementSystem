import React from "react";
import { useForm } from "react-hook-form";
const TextEditor = ({ placeholder }) => {
  const {
    register,
    handleSubmit
  } = useForm();
  const onSubmit = (data) => {
    if(data.noticeImage.length === 0) data.noticeImage = "" 
    data.postUpdated = new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString();
    data.visibleToEveryone = !data.visibleToEveryone ;
    console.log(data)
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 mx-auto bg-muted">
          <div className="profile-card mb-5 shadow border-rounded">
            <h3 className="profile-card-header">Post Notice</h3>
            <div className="profile-card-child">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label className="w-100">
                    <h6>Notice Title</h6>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Notice Title"
                      {...register("noticeTitle", { required: true })}
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label className="w-100">
                    <h6>Notice Description</h6>
                    <textarea
                      rows={5}
                      className="form-control"
                      {...register("noticeDescription", { required: true })}
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label className="w-100">
                    <h6>Upload Image</h6>

                    <input
                      type="file"
                      className="form-control form-control-lg"
                      accept="image/*"
                      {...register("noticeImage")}
                    />
                  </label>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="privatePost"
                    {...register("visibleToEveryone")}
                  />
                  <label
                    className="form-check-label"
                    for="privatePost"
                  >
                    Private Post
                  </label>
                </div>
                <input className="btn-lg btn-block btn-primary" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
