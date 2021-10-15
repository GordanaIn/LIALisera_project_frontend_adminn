import React from 'react';

import './App.css';


import {HashRouter as Router, Route,  Switch} from 'react-router-dom'



import AcceptUser from "./adminClient/sections/pages/AcceptUser";
import NavBar from './adminClient/sections/components/headerComponents/navbar/NavBar';
import Footer from './adminClient/sections/components/headerComponents/Footer';
import Support from "./adminClient/sections/pages/Support";
import EditOrDeleteUser from "./adminClient/sections/pages/EditOrDeleteUser";
import Profile from "./adminClient/sections/pages/Profile";
import SearchOrAddUser from "./adminClient/sections/pages/SearchOrAddUser";
import LandingPage from "./adminClient/sections/pages/LandingPage";



function App() {
  return (
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/home" component={LandingPage}/>
          <Route exact path="/acceptUser" component={AcceptUser}/>
          <Route exact path="/searchOrAddUser" component={SearchOrAddUser}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/editOrDeleteUser" component={EditOrDeleteUser}/>
          <Route exact path="/support" component={Support}/>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
