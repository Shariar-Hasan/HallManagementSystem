
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home/Home"
import Profile from "./Pages/Profile/Profile"
import Apply from "./Pages/Apply/Apply"
import Login from "./Pages/Login/Login"
import NotAvailable from "./Pages/NotAvailable/NotAvailable"
import Gallery from "./Pages/Gallery/Gallery"
import FAQ from "./Pages/FAQ/FAQ"
import Dashboard from "./Pages/Dashboard/Dashboard"
import NoticeBoard from "./Pages/NoticeBoard/NoticeBoard"
import CPanelLogin from './Pages/CPanelLogin/CPanelLogin';

import './App.css';
import { createContext, useState } from 'react';
import { images } from './Data/fakedata';


export const UserContext = createContext()
export const DataContext = createContext()


function App() {
  const [loginUser, setLoginUser] = useState(null)
  const imageLoad = images;
  const [show, setShow] = useState(false);

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

            <Route path="/apply">
              <Apply></Apply>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/cPanelLogin">
              <CPanelLogin></CPanelLogin>
            </Route>

            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

            <Route path="/faq">
              <FAQ></FAQ>
            </Route>

            <Route path="/gallery">
              <Gallery ></Gallery>
            </Route>

            <Route path="/notice">
              <NoticeBoard></NoticeBoard>
            </Route>

            <Route path="*">
              <NotAvailable message={"You have choosen a wrong path"} errorCode={404}></NotAvailable>
            </Route>
          </Switch>
        </Router>

      </DataContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
