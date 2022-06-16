import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import swal from "sweetalert";
import { useParams } from "react-router-dom";
import { deleteData, getData } from "../../Functions/autoFunctions";

const NoticeDetails = () => {
  const { nid } = useParams();
  const [NoticeDetails, setNoticeDetails] = useState({});
  console.log(nid);
  useEffect(() => {
    getData(`http://localhost:5500/notice/${nid}`)
      .then((res) => res.json())
      .then((data) => {
        setNoticeDetails(data);
      });
  }, [nid]);

  const handleBack = (e) => {
    window.history.back();
  };
  const handleEdit = () => {
    NotificationManager.info("Edit option is not implemented yet");
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
        deleteData(`http://localhost:5500/deleteNotice/${nid}`).then((res) => {
          if (res) {
            NotificationManager.success("Successfully Deleted the notice");
            handleBack();
          }
        });
      } else {
        swal("Notice Not deleted");
      }
    });
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
              <div className="floating-news-inside">
                {NoticeDetails?.noticeImage && (
                  <div
                    className="col-12 text-center my-3"
                    style={{ height: "200px" }}
                  >
                    <img
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
                  <h6 className="font-italic">{NoticeDetails?.postUpdated}</h6>
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
