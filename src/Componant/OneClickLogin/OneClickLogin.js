import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { admin, emptyEmployee,  emptyStudent, student } from '../../Data/fakedata';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const OneClickLogin = () => {
    const [, setLoginUser] = useContext(UserContext)

    return (
        <div>
            <NotificationContainer />
            <button onClick={() => setLoginUser(student)} className="btn btn-primary m-1">Student Login Button</button>
            <button onClick={() => setLoginUser(emptyEmployee)} className="btn btn-primary m-1">Employee Login Button</button>
            <button onClick={() => setLoginUser(null)} className="btn btn-primary m-1">Log out</button>
            <button onClick={() => setLoginUser(admin)} className="btn btn-primary m-1">Admin Login Button</button>
            <button onClick={() => NotificationManager.info("temporary popup settings")} className="btn btn-primary m-1">Fake push info</button>
            <button onClick={() => NotificationManager.success("this is a success push notification")} className="btn btn-primary m-1">Fake push success</button>
            <button onClick={() => NotificationManager.error("this is an error message")} className="btn btn-primary m-1">Fake push error</button>
            <button onClick={() => NotificationManager.warning("this is your last warning beta")} className="btn btn-primary m-1">Fake Popup warning</button>
        </div>
    );
};

export default OneClickLogin;