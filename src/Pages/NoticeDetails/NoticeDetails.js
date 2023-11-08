import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import swal from "sweetalert";
import moment from "moment";
import { useParams } from "react-router-dom";
import { deleteData, getData, isAdmin } from "../../Functions/autoFunctions";
import { useContext } from "react";
import { UserContext } from "../../App";

const NoticeDetails = () => {
  const { nid } = useParams();
  const [NoticeDetails, setNoticeDetails] = useState({});
  const [loginuser] = useContext(UserContext);
  useEffect(() => {
    getData(`/notice/${nid}`)
      .then((res) => res.json())
      .then((data) => {
        setNoticeDetails(data);
      })
      .catch((err) => console.log(err));
  }, [nid]);

  const handleBack = (e) => {
    window.history.back();
  };
  const handleEdit = () => {
    toast.custom(
      <span
        className="bg-white rounded text-black"
        style={{
          border: "1px solid #000000",
          padding: "10px 16px",
          color: "#713200",
        }}
      >
        <i class="fa fa-info-circle text-info mr-2" aria-hidden="true"></i> Edit
        option is not implemented yet
      </span>
    );
  };
  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Notice!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteData(`/deleteNotice/${nid}`).then((res) => {
          if (res) {
            toast.success("Successfully Deleted the notice");
            handleBack();
          }
        });
      }
    });
  };

  const handleLinkClick = () => {
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = NoticeDetails?.noticeImage;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <div className="floating-news-bg">
            <div className="floating-news col-md-8">
              <button
                type="button"
                onClick={handleBack}
                className="btn-lg btn close-btn"
              >
                <i className="fa fa-window-close" aria-hidden="true"></i>
              </button>
              {Object.keys(loginuser || {}).length !== 0 &&
                isAdmin(loginuser) && (
                  <>
                    <button
                      type="button"
                      onClick={handleEdit}
                      className="btn-lg btn edit-btn"
                    >
                      <i className="fa fa-edit" aria-hidden="true"></i>
                    </button>
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="btn-lg btn delete-btn"
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </>
                )}
              <div className="floating-news-inside">
                {!NoticeDetails?.visibleToEveryone && (
                  <div className="private">
                    <span
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Only visible to logged in users"
                      className="special-text d-inline-block bg-info px-2 rounded text-white"
                    >
                      Private Notice
                    </span>
                  </div>
                )}
                {NoticeDetails?.noticeImage && (
                  <div
                    className="col-12 text-center my-3"
                    style={{ height: "300px" }}
                  >
                    <img
                      onClick={handleLinkClick}
                      className="h-100"
                      src={NoticeDetails?.noticeImage}
                      alt={NoticeDetails?.noticeTitle}
                    />
                  </div>
                )}
                <div className="col-12">
                  <h4 className="text-primary mb-4">
                    {NoticeDetails?.noticeTitle}
                  </h4>
                  <h6 className="font-italic">
                    Posted{" "}
                    {moment(
                      NoticeDetails?.postUpdated,
                      "hh:mm:ss A, MM/DD/YYYY"
                    ).fromNow()}
                  </h6>
                </div>
                <hr />
                <div className="col-12">
                  <p className="notice-description text-justify h6">
                    {NoticeDetails?.noticeDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetails;
