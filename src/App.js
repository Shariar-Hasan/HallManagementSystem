
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Componant/Navbar/Navbar"
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
import Footer from './Componant/Footer/Footer'

import './App.css';
import { createContext, useState } from 'react';
import { images } from './Data/fakedata';
import DrawerBoard from './Componant/DrawerBoard/DrawerBoard';
// import { student } from './Data/fakedata';


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
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/profile">
              <Profile></Profile>
            </Route>

            <Route exact path="/apply">
              <Apply></Apply>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/cPanelLogin">
              <CPanelLogin></CPanelLogin>
            </Route>

            <Route exact path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

            <Route exact path="/faq">
              <FAQ></FAQ>
            </Route>

            <Route exact path="/gallery">
              <Gallery ></Gallery>
            </Route>

            <Route exact path="/notice">
              <NoticeBoard></NoticeBoard>
            </Route>

            <Route path="*">
              <NotAvailable></NotAvailable>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </DataContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
