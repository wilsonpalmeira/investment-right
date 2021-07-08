import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from './Home'
import CasosPraticos from './CasosPraticos'
import PoliticaApp from './PoliticaApp'
import Ajuda from './Ajuda'
import Sobre from './Sobre'
//import styles from '../css/styles.css'
//import Icon from "../img/icon.png"


export default function App() {
  return (
    <Router class="jumbotron jumbotron-fluid">

      <div class="container">
{/*      <CardImg top src={Icon} alt="Right Investment" /> */}
        <nav  class="navbar navbar-expand-lg navbar-light bg-success">
          <ul class="navbar-nav"> 
            <li>
              <Link to="/"  className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/Ajuda" className="nav-link">Ajuda</Link>
            </li>                
            <li>
              <Link to="/CasosPraticos" className="nav-link">Casos Práticos</Link>
            </li>
            <li>
              <Link to="/PoliticaApp" className="nav-link">Política de Privacidade</Link>
            </li>  
            <li>
              <Link to="/Sobre" className="nav-link">Sobre</Link>
            </li>                 
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Ajuda">
            <Ajuda />
          </Route>            
          <Route path="/CasosPraticos">
            <CasosPraticos />
          </Route>
          <Route path="/PoliticaApp">
            <PoliticaApp />
          </Route>    
          <Route path="/Sobre">
            <Sobre />
          </Route>                   
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

