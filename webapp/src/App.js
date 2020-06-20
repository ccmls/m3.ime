import React, {useEffect, useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import TopHeader from './components/TopHeader'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import Justificativa from './components/ExtraLinks/Justificativa'
import Colaboradores from './components/ExtraLinks/Colaboradores'
import Historico from './components/ExtraLinks/Historico'

function App() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if(window.innerWidth > 960) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
        })
    }, []);

  return (
    <Router>
        <ScrollToTop />
            {/* HEADER */}
            <div>
                {isMobile? null:<TopHeader/>}
                {isMobile? null:<Header/>}
                {isMobile? null:<div className="tam-header" id="tam-header"/>}
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
                {isMobile? null:<Footer/>}
            </div>

    </Router>
  );
}

export default App;
