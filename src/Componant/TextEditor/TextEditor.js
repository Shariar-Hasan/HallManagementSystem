import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NotificationManager } from "react-notifications";
import { postData } from "../../Functions/autoFunctions";
const TextEditor = ({ placeholder }) => {
  const { register, handleSubmit } = useForm();
  const [loadedImg, setLoadedImg] = useState("");
  const [spinner, setSpinner] = useState(false);

  const handleImageData = (e) => {
    setSpinner(true);
    const form = new FormData();
    form.append("image", e.target.files[0]);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=57d3b3c06a33a91f0cb79cb93739c8e2",
        form
      )
      .then((res) => {
        setLoadedImg(res.data.data.medium.url);
        setSpinner(false);
        NotificationManager.success("Image File Saved");
      });
  };

  // after submit
  const onSubmit = (data) => {
    if (data.noticeImage.length === 0) data.noticeImage = "";
    else data.noticeImage = loadedImg;
    data.postUpdated =
      new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString();
    data.visibleToEveryone = !data.visibleToEveryone;
    // console.log(data);
    setLoadedImg("");
    postData("http://localhost:5500/addNotice", data).then((res) => {
      if (res.status === 200) {
        NotificationManager.success(
          "Notice Post Successfully Uploaded",
          "",
          2000
        );

        document.getElementById("noticeForm").reset();
      }
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 mx-auto bg-muted">
          <div className="profile-card mb-5 shadow border-rounded">
            <h3 className="profile-card-header">Post Notice</h3>
            <div className="profile-card-child">
              <form onSubmit={handleSubmit(onSubmit)} id="noticeForm">
                <div className="form-group">
                  <label className="w-100">
                    <h6>Notice Title :</h6>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Notice Title"
                      autoComplete="off"
                      {...register("noticeTitle", { required: true })}
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label className="w-100">
                    <h6>Notice Description : </h6>
                    <textarea
                      rows={5}
                      className="form-control"
                      placeholder="Enter your post in here"
                      {...register("noticeDescription", { required: true })}
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label className="w-100">
                    <h6>Upload Image :</h6>

                    <input
                      type="file"
                      onInput={handleImageData}
                      className="form-control form-control-lg"
                      accept="image/*"
                      {...register("noticeImage")}
                    />
                    {spinner && (
                      <div className="spinner-float">
                        <div
                          className="spinner-border text-primary"
                          role="status"
                        >
                          <span className="visually-hidden"></span>
                        </div>
                      </div>
                    )}
                  </label>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="privatePost"
                    {...register("visibleToEveryone")}
                  />
                  <label className="form-check-label" htmlFor="privatePost">
                    Private Post
                  </label>
                </div>

                <button
                  className="btn-lg btn-block btn-primary"
                  type="submit"
                  disabled={spinner}
                >
                  Post <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
