
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
// import { student } from './Data/fakedata';


export const UserContext = createContext()


function App() {
  const [loginUser, setLoginUser] = useState(null)
  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <Navbar></Navbar>

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

          <Route path="/notAvailable">
            <NotAvailable></NotAvailable>
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
            <Gallery></Gallery>
          </Route>

          <Route path="/notice">
            <NoticeBoard></NoticeBoard>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
