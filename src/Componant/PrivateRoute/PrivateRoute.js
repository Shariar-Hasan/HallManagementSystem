import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../App";
const PrivateRoute = ({ children, ...rest }) => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
      loginUser !== null  ? ( //(Object.keys(loginUser).length)
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login/student",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
