import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
function App() {
  return (
    <Router>
     <Navbar/>
      <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/Services" component={Services}></Route>
          <Route exact path="/contacts" component={Contact}></Route>
          <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
