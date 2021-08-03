import React from 'react';
import { Link } from "react-router-dom"



const NewsCard = ({ news }) => {
    const {newsId, newsDescription, lastUpdated, edited } = news;
    return (
        <div class="card border-muted mx-auto my-1">
            <div class="card-body">
                <span class="card-text lead">{newsDescription.split(" ").slice(0, 20).join(" ")} {newsDescription.split(" ").length > 20 && <span>.....<Link to={`/notice?newsId=${newsId}`}>Read more</Link></span>}</span>
            </div>
            <div className="card-text text-center  py-1"><div className="text-muted">{edited ? "Edited : " : "Last Updated : "}{lastUpdated} </div> </div>
        </div>
    );
};

export default NewsCard;