import React from 'react';
import { useHistory, useLocation } from "react-router-dom"



const NewsCard = ({ news }) => {
    const { noticeId, noticeTitle, lastUpdated: { edited, updatedDate } } = news;
    const history = useHistory()
    
    const handleNotice = (newsId) => {
        // history.push(`/notice/${newsId}`)
        history.push( `/notice/?newsId=${newsId}`)
    }

    return (
        <div onClick={() => handleNotice(noticeId)} className="card shadow-sm border-muted mx-auto my-1 p-3">
            <div className="row">
                <div className="col-lg-3  d-flex align-items-center justify-content-center">
                    <i className="fas fa-flag fa-2x"></i>
                </div>
                <div className="col-lg-9 ">
                    <div className="card-body">
                        <span className="card-text h5">{noticeTitle}</span>
                        <br />
                        <span className="text-muted">{updatedDate}{edited ? "(Edited)" : "(Last Updated)"} </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;