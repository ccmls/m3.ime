import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Header from './components/Header'
import TopHeader from './components/TopHeader'
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
            <TopHeader></TopHeader>
            <Header></Header>
        </div>
        <Route exact path="/"> 
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    loading
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </Route>
        <Route path="/recursos">
        
        </Route>
    </Router>
  );
}

export default App;
