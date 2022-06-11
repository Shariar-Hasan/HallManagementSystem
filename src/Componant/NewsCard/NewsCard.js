import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { noticeId, noticeTitle } = news;

  return (
    <Link
      style={{ textDecoration: "none", width: "100%", color: "#2b2b2b" }}
      to={{
        pathname: `/notice/${noticeId}`,
        param: noticeId,
      }}
    >
      <div className="card shadow-sm border-muted mx-auto my-1 p-3">
        <div className="row">
          <div className="col-lg-3  d-flex align-items-center justify-content-center">
            <i className="fas fa-flag fa-2x"></i>
          </div>
          <div className="col-lg-9 ">
            <div className="card-body">
              <span className="card-text h5">{noticeTitle}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
