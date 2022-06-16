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
  NotificationManager,
} from "react-notifications";
import { useEffect } from "react";
import { activeStatus, isStudent } from "./Functions/autoFunctions";
import Userlist from "./Pages/Userlist/Userlist";
import SideNav from "./Componant/SideNav/SideNav";
import NoticeDetails from "./Pages/NoticeDetails/NoticeDetails";
import AppointSeat from "./Pages/AppointSeat/AppointSeat";
import CreateUser from "./Pages/CreateUser/CreateUser";

export const UserContext = createContext();
export const DataContext = createContext();

function App() {
  const oldUser = JSON.parse(localStorage.getItem("user")) || null;
  const [loginUser, setLoginUser] = useState(oldUser);
  const imageLoad = images;
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (loginUser?.notifications?.length > 0 && isStudent(loginUser)) {
      NotificationManager.info(
        "You have new notification to check",
        "Reminder",
        3000
      );
    }
  }, [loginUser]);

  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      <DataContext.Provider value={[imageLoad, [show, setShow]]}>
        <NotificationContainer />
        <Router>
          {activeStatus(loginUser) && <SideNav></SideNav>}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/profile">
              <Profile></Profile>
            </Route>

            <Route path="/applications">
              <Applications></Applications>
            </Route>

            <Route path="/userlist">
              <Userlist></Userlist>
            </Route>

            <Route path="/appoint-seat">
              <AppointSeat></AppointSeat>
            </Route>

            <Route path="/create-user">
              <CreateUser></CreateUser>
            </Route>

            <Route path="/login/:user">
              <Login></Login>
            </Route>

            {/* <Route path="/cPanelLogin">
              <CPanelLogin></CPanelLogin>
            </Route> */}

            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

            <Route path="/faq">
              <FAQ></FAQ>
            </Route>

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
