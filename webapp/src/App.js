import React, {useEffect, useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
// Header+Footer
import ScrollToTop from './components/Header+Footer/ScrollToTop';
import Header from './components/Header+Footer/Header';
import HeaderMobile from './components/Header+Footer/HeaderMobile';
import TopHeader from './components/Header+Footer/TopHeader';
import Footer from './components/Header+Footer/Footer';
import FooterMobile from './components/Header+Footer/FooterMobile';
// Home
import Home from './components/Home/Home';
// Recursos
import RecursosRoutes from './components/Resources/RecursosRoutes';
//ExtraLinks
import Justificativa from './components/ExtraLinks/Justificativa';
import Colaboradores from './components/ExtraLinks/Colaboradores';
import Historico from './components/ExtraLinks/Historico';

function App() {

    // Função para renderizar header+footer versão desktop OU mobile
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
            if(window.innerWidth > 1024) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }

        window.addEventListener("resize", () => {
            if(window.innerWidth > 1024) {
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
                <RecursosRoutes/>
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
