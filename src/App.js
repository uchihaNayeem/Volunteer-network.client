import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Event from './components/Event/Event';



export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
   <Router>
     <Switch>

       <Route path="/home">
         <Header></Header>
         <Home></Home>
       </Route>

       <Route exact path="/">
         <Header></Header>
         <Home></Home>
       </Route>

       <Route path="/login">
         <Header></Header>
         <Login></Login>
       </Route>

       <PrivateRoute path="/book/:bedType">
              <Event></Event>
       </PrivateRoute>

       <Route path="*">
            <NotFound></NotFound>
       </Route>


     </Switch>
   </Router>

   </UserContext.Provider>
  );
}

export default App;
