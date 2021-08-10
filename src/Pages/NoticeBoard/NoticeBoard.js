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
import { notices } from '../../Data/fakedata';
import { isEmployee, isStudent } from '../../Functions/autoFunctions';



function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const NoticeBoard = () => {
    const [showNews, setShowNews] = useState(false)
    const [floatingNews, setFloatingNews] = useState(null)
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



    return (
        <div className="notice-page">

            <Navbar></Navbar>
            {
                (showNews && floatingNews !== null)
                &&
                <FloatNews hideFloatingNews={hideFloatingNews} floatingNews={floatingNews} ></FloatNews>

            }

            <div className="container">
                <div className="row ">
                    <div className="col-md">
                        <h3 className="text-center text-info">News Update</h3>
                        <div className="all-news row p-3 mx-auto">
                            {
                                notices.map((notice, index) => <NoticeCard key={index} handleNotice={handleNotice} notice={notice}></NoticeCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NoticeBoard;