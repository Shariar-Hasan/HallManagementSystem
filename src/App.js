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
import { NotificationManager } from "react-notifications";
import { useEffect } from "react";
import { isStudent } from "./Functions/autoFunctions";
import Userlist from "./Pages/Userlist/Userlist";

export const UserContext = createContext();
export const DataContext = createContext();

function App() {
  const oldUser = localStorage.getItem("user") || {};
  const [loginUser, setLoginUser] = useState(JSON.parse(oldUser) );
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
        <Router>
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

            <Route path="/notice">
              <NoticeBoard></NoticeBoard>
            </Route>
            <Route path="/upload-notice">
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
