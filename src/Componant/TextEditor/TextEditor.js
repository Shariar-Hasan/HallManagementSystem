import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { postData } from "../../Functions/autoFunctions";
import moment from "moment";
import toast from "react-hot-toast";
const TextEditor = ({ placeholder }) => {
  const { register, handleSubmit } = useForm();
  const [loadedImg, setLoadedImg] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [privatePost, setPrivatePost] = useState(false);
  const [stickyNews, setStickyNews] = useState(false);

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
        console.log({res})
        setLoadedImg(res.data.data.display_url);
        setSpinner(false);
        toast.success("Image File Saved");
      })
      .catch((err) => {
        setSpinner(false);
        toast.error(err.message);
      });
  };

  // after submit
  const onSubmit = (data) => {
    data.visibleToEveryone = !privatePost;
    if (privatePost) {
      data.stickyNews = stickyNews;
      if (data.postExpired) {
        data.postExpired = moment(
          moment().add(
            +data.postExpired.split("")[0],
            data.postExpired.split("")[1]
          )
        ).format("hh:mm:ss A, MM/DD/YYYY");
      } else {
        data.postExpired = "";
      }
    } else {
      data.stickyNews = false;
      data.postExpired = "";
    }
    data.postUpdated = moment().format("hh:mm:ss A, MM/DD/YYYY");

    console.log(data);
    if (data.noticeImage.length === 0) data.noticeImage = "";
    else data.noticeImage = loadedImg;
    console.log(data);
    setLoadedImg("");
    postData("/addNotice", data).then((res) => {
      if (res.status === 200) {
        toast.success("Notice Post Successfully Uploaded", "", 2000);

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
                <div className="form-check form-switch my-4">
                  <input
                    defaultValue={privatePost}
                    onClick={() => setPrivatePost(!privatePost)}
                    className="form-check-input"
                    type="checkbox"
                    id="privatePost"
                    {...register("visibleToEveryone")}
                  />
                  <label className="form-check-label h6" htmlFor="privatePost">
                    Private Post
                  </label>
                </div>
                {privatePost && (
                  <div className="form-check form-switch my-4">
                    <input
                      defaultValue={stickyNews}
                      onClick={() => setStickyNews(!stickyNews)}
                      className="form-check-input"
                      type="checkbox"
                      id="stickyNews"
                      {...register("stickyNews")}
                    />
                    <label className="form-check-label h6" htmlFor="stickyNews">
                      Show As Sticky News in Website
                    </label>
                  </div>
                )}
                {stickyNews && privatePost && (
                  <div className="form-group">
                    <label className="w-100">
                      <h6>Automatically Delete after :</h6>
                      <select
                        defaultValue={""}
                        type="date"
                        className="form-control"
                        autoComplete="off"
                        {...register("postExpired", { required: true })}
                      >
                        <option value="" disabled>
                          Select a Day
                        </option>
                        <option value="1d">1 Day</option>
                        <option value="2d">2 Day</option>
                        <option value="3d">3 Day</option>
                        <option value="4d">4 Day</option>
                        <option value="5d">5 Day</option>
                        <option value="6d">6 Day</option>
                        <option value="7d">7 Day</option>
                        <option value="9y">Dont Delete Automatically</option>
                      </select>
                    </label>
                  </div>
                )}

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
