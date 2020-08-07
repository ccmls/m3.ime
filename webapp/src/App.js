import React, {useEffect, useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import TopHeader from './components/TopHeader';
import Footer from './components/Footer';
import FooterMobile from './components/FooterMobile';
import Home from './components/Home/Home';
import RecursosEd from './components/Resources/RecursosEd';
import Justificativa from './components/ExtraLinks/Justificativa';
import Colaboradores from './components/ExtraLinks/Colaboradores';
import Historico from './components/ExtraLinks/Historico';

function App() {

    // Função para renderizar header+footer versão desktop OU mobile
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
            if(window.innerWidth > 960) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }

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
                {isMobile? <HeaderMobile/>:<Header/>}
                {isMobile? <div className="tam-header-mobile"/>:<div className="tam-header" id="tam-header"/>}
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
                <RecursosEd/>
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
                {isMobile? <FooterMobile/>:<Footer/>}
            </div>

    </Router>
  );
}

export default App;
