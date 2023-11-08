import React from "react";
import { Link } from "react-router-dom";
import "./noticecard.css";

const NoticeCard = ({ notice }) => {
  const {
    _id,
    noticeTitle,
    noticeDescription,
    noticeImage,
    visibleToEveryone,
  } = notice;
  const desc = noticeDescription.split(" ");
  return (
    <Link
      style={{ textDecoration: "none", width: "100%", color: "#2b2b2b" }}
      to={`/notice/${_id}`}
    >
      <div
        className="col-md-12 w-100  my-2 mx-auto  px-1 bg-white rounded shadow noticeCard"
        data-av-animation="slideInRight"
      >
        {!visibleToEveryone && (
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
        <div className="row  p-3">
          <div className="col">
            <div>
              <h4 className="text-dark h5">{noticeTitle}</h4>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoticeCard;
