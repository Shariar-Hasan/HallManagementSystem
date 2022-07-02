import React from "react";
import { Link } from "react-router-dom";

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
      <div className="click-effect col-md-12 w-100  my-2 mx-auto  px-1 bg-white rounded shadow">
        {!visibleToEveryone && (
          <div className="private">
            <span
              data-toggle="tooltip"
              data-placement="right"
              title="Only visible to logged in users"
              className="special-text d-inline-block pr-2 ml-3"
              style={{
                border: "2px solid rgb(122, 182, 255, 0.4)",
                color: "rgb(122, 182, 255)",
                borderRadius: "4px",
              }}
            >
              #Private Post
            </span>
          </div>
        )}
        <div className="row noticeCard p-3">
          {noticeImage && (
            <div
              className="col-md-2 overflow-hidden text-center"
              style={{ height: "100px" }}
            >
              <img
                style={{ maxWidth: "100%", objectFit: "cover" }}
                src={noticeImage}
                alt={noticeTitle}
              />
            </div>
          )}
          <div className="col-md-10">
            <div>
              <h4 className="text-dark h4">{noticeTitle}</h4>
            </div>
            <div className="description">
              <span className="card-text ">
                {desc.slice(0, 30).join(" ")}{" "}
                {desc.length > 30 && (
                  <span>
                    .....
                    <span
                      style={{
                        cursor: "pointer",
                        color: "black",
                        fontSize: "90%",
                      }}
                      className="text-primary"
                    >
                      see more
                    </span>
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoticeCard;
