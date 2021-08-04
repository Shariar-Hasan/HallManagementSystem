import React from 'react';
import { Link } from "react-router-dom"



const NewsCard = ({ news }) => {
    const { noticeId, noticeDescription, lastUpdated: { edited, updatedDate } } = news;
    const desc = noticeDescription.split(" ");
    return (
        <div className="card shadow-sm border-muted mx-auto my-1 p-3">
            <div className="row">
                <div className="col-lg-2  d-flex align-items-center justify-content-center">
                    <i className="fas fa-flag fa-2x"></i>
                </div>
                <div className="col-lg-10 ">
                    <div className="card-body">
                        <span className="card-text h5">{desc.slice(0, 20).join(" ")} {desc.length > 20 && <span>.....<Link to={`/notice?newsId=${noticeId}`}>Read more</Link></span>}</span>
                    </div>
                    <div className="card-text text-center  py-1"><div className="text-muted">{edited ? "Edited : " : "Last Updated : "}{updatedDate} </div> </div>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;