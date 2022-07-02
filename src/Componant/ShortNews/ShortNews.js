import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import LinkButton from '../Linkbutton/LinkButton';
import NewsCard from '../NewsCard/NewsCard';
import NoNewsAvailable from '../NothingAvailable/NothingAvailable';

const ShortNews = ({ headerText, noticeFor, privacy }) => {

    if (privacy) {
         noticeFor = noticeFor.filter(n => n.visibleToEveryone === false)
    }
    else{
        noticeFor = noticeFor.filter(n => n.visibleToEveryone === true)
    }
    return (
        <div className="col-12 mx-auto my-3">
            <h3 className="text-center text-info">{headerText}</h3>
            {noticeFor.length
                ?
                <div>
                    {
                        noticeFor.slice(0, 3).map((news, key) => <NewsCard key={key} news={news}></NewsCard>)
                    }
                    <LinkButton link="/notice" buttonText={`See More ${headerText}`} color="primary" variant="outlined"></LinkButton>
                </div>
                :
                <NoNewsAvailable data={`No ${headerText} Available`}></NoNewsAvailable>
            }

        </div>
    );
};

export default ShortNews;