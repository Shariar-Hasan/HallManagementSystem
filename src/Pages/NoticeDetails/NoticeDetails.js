import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { notices } from "../../Data/fakedata";

const NoticeDetails = () => {
  const { nid } = useParams();
  const [NoticeDetails, setNoticeDetails] = useState({});
  console.log(nid);
  useEffect(() => {
    const selectedNotice = notices.find((n) => n.noticeId === nid);
    setNoticeDetails(selectedNotice);
  }, [nid]);
  const handleBack = (e) => {
    window.history.back();
    e.stopPropagation();
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
                  <h6 className="font-italic">
                    Posted : {NoticeDetails?.postUpdated}
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
