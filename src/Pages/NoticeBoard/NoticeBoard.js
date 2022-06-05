import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import FloatNews from '../../Componant/FloatNews/FloatNews';
import Footer from '../../Componant/Footer/Footer';
import Navbar from '../../Componant/Navbar/Navbar';
import NoticeCard from '../../Componant/NoticeCard/NoticeCard';
// import TextEditor from '../../Componant/TextEditor/TextEditor';
import { notices } from '../../Data/fakedata';
import { isEmployee, isStudent } from '../../Functions/autoFunctions';



function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const NoticeBoard = () => {
    const [showNews, setShowNews] = useState(false)
    const [floatingNews, setFloatingNews] = useState(null)
    // pagination section

    const [noticePerPage, setNoticePerPage] = useState(5)
    const [pageCount, setPageCount] = useState(Math.ceil(notices.length / noticePerPage))
    const [currentPage, setCurrentPage] = useState(1)
    const [pageNotices, setPageNotices] = useState([])
    const [emptyArray, setEmptyArray] = useState([])


    useEffect(() => {
        const noticeEnd = noticePerPage * currentPage;
        const noticeStart = noticeEnd - noticePerPage;
        const newNotices = notices.slice(noticeStart, noticeEnd)

        const newEmptyArr = []
        for (let i = 1; i <= pageCount; i++) {
            newEmptyArr.push(i)
        }
        setPageNotices(newNotices)
        setEmptyArray(newEmptyArr)
        setPageCount(Math.ceil(notices.length / noticePerPage))
    }, [currentPage, noticePerPage, pageCount])


    const [loginUser,] = useContext(UserContext)


    // let { newsId } = useParams()
    const history = useHistory()
    let query = useQuery();
    let newsId = query.get('newsId')

    useEffect(() => {
        if (newsId) showFloatingNews(newsId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newsId])

    const handleNotice = (newsId) => {
        history.push(`/notice/?newsId=${newsId}`)
    }

    const showFloatingNews = (newsId) => {
        const newFloatingNews = notices.find(notice => notice.noticeId === +newsId)
        const { noticePrivacy: { visibleToEmployee, visibleToStudent } } = newFloatingNews;
        if (visibleToEmployee || visibleToStudent) {
            if ((isStudent(loginUser) && visibleToStudent) || (isEmployee(loginUser) && visibleToEmployee)) {
                setFloatingNews(newFloatingNews)
                setShowNews(true)
            }
        }
        else {
            setFloatingNews(newFloatingNews)
            setShowNews(true)
        }

    }

    const hideFloatingNews = () => {
        setShowNews(false)
        history.push("/notice")
        setFloatingNews(null)
    }


    const handleElementPerPage = e => {
        setCurrentPage(1)
        setNoticePerPage(e.target.value)
    }

    return (
        <div className="notice-page">
            <Navbar></Navbar>
            {
                (showNews && floatingNews !== null)
                &&
                <FloatNews hideFloatingNews={hideFloatingNews} floatingNews={floatingNews} ></FloatNews>

            }
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        {/* <TextEditor placeholder={"hasan"}></TextEditor> */}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row ">
                    <div className="col-md mt-5">
                        <h3 className="text-center text-info">News Update</h3>
                        <div className="all-news row p-3 mx-auto">
                            {
                                pageNotices.map((notice, index) => <NoticeCard key={index} handleNotice={handleNotice} notice={notice}></NoticeCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <div>
                        <select className="elementPerPage" defaultValue={noticePerPage} onChange={handleElementPerPage}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                        </select>
                    </div>
                    {
                        currentPage !== 1
                            ?
                            <li className="page-item previous-btn" onClick={() => setCurrentPage(currentPage - 1)}>Previous</li>
                            :
                            <li className="page-item disabled-btn previous-btn">Previous</li>

                    }
                    {
                        emptyArray.map((pageNumber) => <li key={pageNumber} className={`page-item ${currentPage === pageNumber && "active"}`} onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</li>)
                    }
                    {
                        currentPage !== emptyArray.length
                            ?
                            <li className="page-item next-btn" onClick={() => setCurrentPage(currentPage + 1)}>Next</li>
                            :
                            <li className="page-item next-btn disabled-btn">Next</li>

                    }
                </ul>
            </nav>
            <Footer></Footer>
        </div>
    );
};

export default NoticeBoard;