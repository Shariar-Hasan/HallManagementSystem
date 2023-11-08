import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import { activeStatus, getData } from "../../Functions/autoFunctions";
import ShortNews from "../ShortNews/ShortNews";

const DividerRight = () => {
  const [loginUser] = useContext(UserContext);
  const [notices, setNotices] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
    getData("/notices")
      .then((res) => res.json())
      .then((data) => {
        const newNews = data.filter((n) => n.visibleToEveryone === true);
        setNews(newNews)
        const newNotices = data.filter((n) => n.visibleToEveryone === false);
        setNotices(newNotices)
      })
      .catch(error =>{
        console.log(error)
      });
  }, []);
  return (
    <div className="row">
      <ShortNews
        headerText="News"
        noticeFor={news}
        privacy={false}
      ></ShortNews>
      {activeStatus(loginUser) && (
        <ShortNews
          headerText="Notice"
          noticeFor={notices}
          privacy={true}
        ></ShortNews>
      )}
    </div>
  );
};

export default DividerRight;
