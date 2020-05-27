import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Header from './components/Header'
import TopHeader from './components/TopHeader'
import Footer from './components/Footer'
import Home from './components/Home'
import Justificativa from './components/Justificativa'
import Colaboradores from './components/Colaboradores'
import Historico from './components/Historico'

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
            <Route exact path="/principal">
                <Redirect to="/"/>
            </Route>

            {/* RECURSOS */}
            <Route path="/recursos">

            </Route>

            {/* JUSTIFICATIVA PEDAGÓGICA */}
            <Route path="/principal/justificativa">
                <Justificativa/>
            </Route>

            {/* COLABORADORES */}
            <Route path="/principal/colaboradores">
                <Colaboradores/>
            </Route>

            {/* HISTÓRICO */}
            <Route path="/principal/historico">
                <Historico/>
            </Route>

            {/* FOOTER */}
            <div>
                <Footer/>
            </div>
        
    </Router>
  );
}

export default App;
