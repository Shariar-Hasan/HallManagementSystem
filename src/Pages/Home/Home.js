
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Banner from '../../Componant/Banner/Banner';
import DividerLeft from '../../Componant/DividerLeft/DividerLeft';
import DividerRight from '../../Componant/DividerRight/DividerRight';
import OneClickLogin from '../../Componant/OneClickLogin/OneClickLogin';
const Home = () => {
    const [loginUser,] = useContext(UserContext)

    return (
        <div>
            <OneClickLogin></OneClickLogin>
            <Banner></Banner>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-9 my-3">
                        <DividerLeft></DividerLeft>
                    </div>
                    <div className="col-md-3 my-3">
                        <DividerRight></DividerRight>
                    </div>
                </div>
            </div>
            {/* <div className="fake-line"></div> */}
        </div>
    );
};

export default Home;