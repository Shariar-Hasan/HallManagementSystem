import React from 'react';
import { useHistory } from 'react-router-dom';

const StickyNews = ({sticky, stickyNote}) => {
    const history = useHistory()
    const [showSticky, setShowSticky] = sticky;
    const {noticeTitle,noticeDescription,postedOn,expireOn,_id} = stickyNote;
    const handleClose = () =>{
        sessionStorage.setItem("stickyShow" , JSON.stringify({_id : stickyNote?._id, show : false}))
        setShowSticky(false)
    }
    const handleRoute = () =>{
        history.push("/notice/"+_id)
        handleClose()
    }
    return (
        <div className="sticky-news shadow shadow-lg border border-primary cursor-pointer click-effect">
        <i onClick={handleClose} className="fa fa-times click-effect" aria-hidden="true"></i>
        <div className="card " onClick={handleRoute}>
          <div className="card-body pb-4">
            <h4 className="card-title">{noticeTitle}</h4>
            <p className="card-text text-justify">
              {noticeDescription?.split(" ").slice(0,50).join(" ") + "....."}
            </p>
          </div>
        </div>
      </div>
    );
};

export default StickyNews;