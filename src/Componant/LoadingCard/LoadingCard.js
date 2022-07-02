import React from "react";
import imgdata from "./loading.svg"
import "./LoadingCard.css"
const LoadingCard = () => {
  return (
    <div>
      <div className="loading-bg">
        <div className="loading-inner">
          <img src={imgdata} alt="Page Loading, wait for it" />
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
