import React from 'react';

const NoticeCard = ({ handleNotice, notice }) => {

    const { noticeId, noticeTitle, noticeDescription, lastUpdated: { edited, updatedDate }, noticeImage } = notice
    const desc = noticeDescription.split(" ");
    return (
        <div className="col-md-12  my-2 mx-auto  px-1 bg-white rounded shadow" >
            <div className="row noticeCard p-3">
                {
                    noticeImage
                    &&
                    <div className="col-md overflow-hidden text-center" >
                        <img  style={{ maxHeight: "200px", maxWidth: "100%" }} src={noticeImage} alt={noticeTitle} />
                    </div>
                }
                <div className="col-md" >
                    <div>
                        <h4 className="text-dark">{noticeTitle}</h4>
                        <small className="text-muted">{updatedDate}{edited && "(Edited)"}</small>
                    </div>
                    <div className="description">
                        <span className="card-text h6">{desc.slice(0, 20).join(" ")} {desc.length > 20 && <span>.....<span style={{ cursor: "pointer" }} className="text-primary" onClick={() => handleNotice(noticeId)}>see more</span></span>}</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NoticeCard;