import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Applications from "./Pages/Applications/Applications";
import Login from "./Pages/Login/Login";
import NotAvailable from "./Pages/NotAvailable/NotAvailable";
import Gallery from "./Pages/Gallery/Gallery";
import FAQ from "./Pages/FAQ/FAQ";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NoticeBoard from "./Pages/NoticeBoard/NoticeBoard";
import CPanelLogin from "./Pages/CPanelLogin/CPanelLogin";

import "./App.css";
import { createContext, useState } from "react";
import { images } from "./Data/fakedata";
import {
  NotificationContainer,
  toast,
} from "react-notifications";
import { useEffect } from "react";
import { activeStatus, isStudent } from "./Functions/autoFunctions";
import Userlist from "./Pages/Userlist/Userlist";
import SideNav from "./Componant/SideNav/SideNav";
import NoticeDetails from "./Pages/NoticeDetails/NoticeDetails";
import AppointSeat from "./Pages/AppointSeat/AppointSeat";
import CreateUser from "./Pages/CreateUser/CreateUser";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./Componant/PrivateRoute/PrivateRoute";
import AdminRoute from "./Componant/AdminRoute/AdminRoute";
import IssueBox from "./Pages/IssueBox/IssueBox";

export const UserContext = createContext();
export const DataContext = createContext();

function App() {
  const oldUser = JSON.parse(localStorage.getItem("user")) || null;
  const [loginUser, setLoginUser] = useState(oldUser);
  const imageLoad = images;
  const [show, setShow] = useState(false);
 

  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      <DataContext.Provider value={[imageLoad, [show, setShow]]}>
        <NotificationContainer />
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 3000,
            style: {
              background: "#363636",
              color: "#fff",
            }
          }}
        />
        <Router>
          {activeStatus(loginUser) && <SideNav></SideNav>}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <PrivateRoute path="/profile">
              <Profile></Profile>
            </PrivateRoute>

            <AdminRoute path="/applications">
              <Applications></Applications>
            </AdminRoute>

            <AdminRoute path="/userlist">
              <Userlist></Userlist>
            </AdminRoute>

            <AdminRoute path="/appoint-seat">
              <AppointSeat></AppointSeat>
            </AdminRoute>

            <PrivateRoute path="/change-password">
              <ChangePassword></ChangePassword>
            </PrivateRoute>

            <AdminRoute path="/create-user">
              <CreateUser></CreateUser>
            </AdminRoute>

            <Route path="/login/:user">
              <Login></Login>
            </Route>

            <PrivateRoute path="/faq">
              <FAQ></FAQ>
            </PrivateRoute>
            <PrivateRoute path="/issuebox">
              <IssueBox/>
            </PrivateRoute>

            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>

            <Route path="/notice/:nid">
              <NoticeDetails></NoticeDetails>
            </Route>

            <Route path="/notice">
              <NoticeBoard></NoticeBoard>
            </Route>

            <Route path="*">
              <NotAvailable
                message={"You have choosen a wrong path"}
                errorCode={404}
              ></NotAvailable>
            </Route>
          </Switch>
        </Router>
      </DataContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
