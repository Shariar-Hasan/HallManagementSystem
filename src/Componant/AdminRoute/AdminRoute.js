import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../App";
const AdminRoute = ({ children, ...rest }) => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loginUser !== null  ? (
          loginUser?.authentication.isAdmin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/profile",
                state: { from: location },
              }}
            />
          )
        ) : (
          <Redirect
            to={{
              pathname: "/login/admin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
