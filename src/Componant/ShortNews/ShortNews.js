import React from 'react';
import { allNews } from '../../Data/fakedata';
import LinkButton from '../Linkbutton/LinkButton';
import NewsCard from '../NewsCard/NewsCard';
import NoNewsAvailable from '../NoNewsAvailable/NoNewsAvailable';

const ShortNews = () => {
    return (
        <div className="col mx-auto">
            <h3 className="text-center text-muted">News's</h3>
            {allNews.length
                ?
                <div>
                    {
                        allNews.slice(0, 3).map((news, key) => <NewsCard key={key} news={news}></NewsCard>)
                    }
                    <LinkButton link="/notice" buttonText="See more News" color="primary" variant="outlined"></LinkButton>
                </div>
                :
                <NoNewsAvailable data="New's"></NoNewsAvailable>
            }
        </div>
    );
};

export default ShortNews;