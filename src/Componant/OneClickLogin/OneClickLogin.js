import React, { useContext, useEffect } from "react";
import { UserContext } from "../../App";
import { admin, employee, student } from "../../Data/fakedata";
import {
  NotificationContainer,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const OneClickLogin = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  const setUserDataToLocalStorage = (user) => {
    setLoginUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  return (
    <div>
      <NotificationContainer />
      {!JSON.parse(localStorage.getItem("user")) ? (
        <>
          <button
            onClick={() => setUserDataToLocalStorage(student)}
            className="btn btn-primary m-1"
          >
            Student Login Button
          </button>
          <button
            onClick={() => setUserDataToLocalStorage(employee)}
            className="btn btn-primary m-1"
          >
            Employee Login Button
          </button>
          <button
            onClick={() => setUserDataToLocalStorage(admin)}
            className="btn btn-primary m-1"
          >
            Admin Login Button
          </button>
        </>
      ) : (
        <button
          onClick={() => setUserDataToLocalStorage(null)}
          className="btn btn-primary m-1"
        >
          Log out
        </button>
      )}
      
    </div>
  );
};

export default OneClickLogin;
