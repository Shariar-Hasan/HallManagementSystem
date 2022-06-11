import React from "react";

const FloatNews = ({ floatingNews, hideFloatingNews }) => {
  const { noticeTitle, noticeDescription, lastUpdated, noticeImage } =
    floatingNews ? floatingNews : {};
  const { edited, updatedDate } = lastUpdated ? lastUpdated : {};
  return (
    <div className="floating-news-bg" onClick={hideFloatingNews}>
      <div className="floating-news col-md-8">
        <div className="floating-news-inside">
          {noticeImage && (
            <div className="col-12 text-center" style={{ height: "0" }}>
              <img className="h-100" src={noticeImage} alt={""} />
            </div>
          )}
          <div className="col-12">
            <h4>{noticeTitle}</h4>
            <small className="text-muted">
              {updatedDate}
              {edited && "(Edited)"}
            </small>
          </div>
          <div className="col-12">
            <p className="text-justify lead">{noticeDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatNews;
