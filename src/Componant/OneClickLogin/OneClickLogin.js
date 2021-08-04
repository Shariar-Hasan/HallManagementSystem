import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { employee, student } from '../../Data/fakedata';

const OneClickLogin = () => {
    const [, setLoginUser] = useContext(UserContext)

    return (
        <div>
            <button onClick={() => setLoginUser(student)} className="btn btn-primary m-1">Student Login Button</button>
            <button onClick={() => setLoginUser(null)} className="btn btn-primary m-1">Log out</button>
            <button onClick={() => setLoginUser(employee)} className="btn btn-primary m-1">Employee Login Button</button>
        </div>
    );
};

export default OneClickLogin;