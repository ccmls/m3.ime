import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from './components/Header'
import TopHeader from './components/TopHeader'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  return (
    <Router>

        {/* HEADER */}
        <div>
            <TopHeader/>
            <Header/>
            <div className="tam-header" id="tam-header"/>
        </div>

        {/* HOME */}
        <Route exact path="/"> 
            <Home/>
        </Route>

        {/* RECURSOS */}
        <Route path="/recursos">
        </Route>

        {/* FOOTER */}
        <div>
            <Footer/>
        </div>

    </Router>
  );
}

export default App;
