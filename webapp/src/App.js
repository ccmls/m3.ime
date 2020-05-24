import React from 'react';
import './App.css';
import Header from './components/Header'
import TopHeader from './components/TopHeader'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
            <TopHeader/>
            <Header/>
        </div>
        <Route exact path="/"> 
            <Home/>
        </Route>
        <Route path="/recursos">
        
        </Route>
    </Router>
  );
}

export default App;
