import React from 'react';
import Counter from '../Counter/Counter';
import HorizontalCard from '../HorizontalCard/HorizontalCard';
import Carosel from './../Carosel/Carosel'
const DividerLeft = () => {
    return (
        <div className="row">
            <div className="col-12">
                <HorizontalCard></HorizontalCard>
                <Counter></Counter>
                <Carosel></Carosel>
            </div>
        </div>
    );
};

export default DividerLeft;