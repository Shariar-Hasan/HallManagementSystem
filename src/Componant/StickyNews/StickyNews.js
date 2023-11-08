import React from "react";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const StickyNews = ({ sticky, stickyNote }) => {
  const history = useHistory();
  const [loginUser] = useContext(UserContext);
  const [showSticky, setShowSticky] = sticky;
  const { noticeTitle, noticeDescription, postedOn, expireOn, _id } =
    stickyNote;
  const handleClose = () => {
    sessionStorage.setItem(
      "stickyShow",
      JSON.stringify({
        _id: stickyNote?._id,
        show: false,
        closeFor: loginUser?.id,
      })
    );
    setShowSticky(false);
  };
  const handleRoute = () => {
    // history.push("/notice/" + _id);
    handleClose();
  };
  return (
    <div className="sticky-news shadow shadow-lg border border-primary cursor-pointer click-effect">
      <i
        onClick={handleClose}
        className="fa fa-times click-effect"
        aria-hidden="true"
      ></i>
      <Link to={"/notice/" + _id} style={{ color: "black", textDecoration : "none"}}>
        <div className="card " onClick={handleRoute}>
          <div className="card-body pb-4">
            <h4 className="card-title">{noticeTitle}</h4>
            <p className="card-text text-justify">
              {noticeDescription?.split(" ").slice(0, 50).join(" ") + "....."}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StickyNews;
