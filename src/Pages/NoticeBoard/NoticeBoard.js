import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import TextEditor from "./../../Componant/TextEditor/TextEditor";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import Footer from "../../Componant/Footer/Footer";
import Navbar from "../../Componant/Navbar/Navbar";
import NoticeCard from "../../Componant/NoticeCard/NoticeCard";
import { getData, isAdmin } from "../../Functions/autoFunctions";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const NoticeBoard = () => {
  const [showNews, setShowNews] = useState(true);
  const [floatingNews, setFloatingNews] = useState(null);
  const [notices, setNotices] = useState([]);

  // pagination section

  const [noticePerPage, setNoticePerPage] = useState(5);
  const [pageCount, setPageCount] = useState(
    Math.ceil(notices.length / noticePerPage)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNotices, setPageNotices] = useState([]);
  const [emptyArray, setEmptyArray] = useState([]);

  //      fetch and load notice data
  useEffect(() => {
    getData("http://localhost:5500/notices")
      .then((res) => res.json())
      .then((data) => {
        if (loginUser !== null) {
          setNotices(data);
        } else {
          const allNotices = data.filter((n) => n.visibleToEveryone);
          setNotices(allNotices);
        }
      });
  }, []);

  // Pagination full functionality
  useEffect(() => {
    const noticeEnd = noticePerPage * currentPage;
    const noticeStart = noticeEnd - noticePerPage;
    const newNotices = notices.slice(noticeStart, noticeEnd);

    const newEmptyArr = [];
    for (let i = 1; i <= pageCount; i++) {
      newEmptyArr.push(i);
    }
    setPageNotices(newNotices);
    setEmptyArray(newEmptyArr);
    setPageCount(Math.ceil(notices.length / noticePerPage));
  }, [currentPage, noticePerPage, pageCount, notices]);

  const [loginUser] = useContext(UserContext);

  const handleElementPerPage = (e) => {
    setCurrentPage(1);
    setNoticePerPage(e.target.value);
  };

  return (
    <div className="notice-page">
      <Navbar></Navbar>
      {isAdmin(loginUser) && (
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <TextEditor></TextEditor>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row ">
          <div className="col-md mt-5">
            <h3 className="text-center text-info">News Update</h3>
            <div className="all-news row p-3 mx-auto">
              {pageNotices.map((notice, index) => (
                <NoticeCard key={index} notice={notice}></NoticeCard>
              ))}
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <div>
            <select
              className="elementPerPage"
              defaultValue={noticePerPage}
              onChange={handleElementPerPage}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>
          {currentPage !== 1 ? (
            <li
              className="page-item previous-btn"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </li>
          ) : (
            <li className="page-item disabled-btn previous-btn">Previous</li>
          )}
          {emptyArray.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${currentPage === pageNumber && "active"}`}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </li>
          ))}
          {currentPage !== emptyArray.length ? (
            <li
              className="page-item next-btn"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </li>
          ) : (
            <li className="page-item next-btn disabled-btn">Next</li>
          )}
        </ul>
      </nav>
      <Footer></Footer>
    </div>
  );
};

export default NoticeBoard;
