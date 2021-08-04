import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { notices } from '../../Data/fakedata';
import { activeStatus } from '../../Functions/autoFunctions';
import ShortNews from '../ShortNews/ShortNews';


const DividerRight = () => {
    const [loginUser,] = useContext(UserContext)
    return (
        <div className="row">
            <ShortNews headerText="News" noticeFor={notices} privacy={false}></ShortNews>
            {activeStatus(loginUser) &&  <ShortNews headerText="Notice" noticeFor={notices} privacy={true}></ShortNews>}
        </div>
    );
};

export default DividerRight;