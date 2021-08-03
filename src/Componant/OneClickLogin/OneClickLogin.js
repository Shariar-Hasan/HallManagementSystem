import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { student } from '../../Data/fakedata';

const OneClickLogin = () => {
    const [, setLoginUser] = useContext(UserContext)

    return (
        <div>
            <button onClick={() => setLoginUser(student)} className="btn btn-primary m-1">Student Logged In</button>
            <button onClick={() => setLoginUser(null)} className="btn btn-primary m-1">Student Logged out</button>
        </div>
    );
};

export default OneClickLogin;