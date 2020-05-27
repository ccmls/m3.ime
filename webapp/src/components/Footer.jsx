import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import copyrights from '../assets/copyrights.png'
import logoyoutube from '../assets/logo-youtube.png';
import logotwitter from '../assets/logo-twitter.png';
import footer from '../assets/footer.png'

function Footer() {
    return (
        <>
            {/* Seção da Licença */}
            <div className="license">
                <h6> LICENÇA </h6>
                <p> Esta obra está licenciada sob uma licença Creative Commons </p>
                <img src={copyrights} className="copyrights" alt="copyrights" />
            </div>
            <div className="gov">
                <h6 className="first-item"> Secretaria de<br/>Educação a Distância </h6>
                <h6> Ministério da<br/>Ciência e Tecnologia </h6>
                <h6> Ministério<br/>da Educação </h6>
                <h6> Governo<br/>Federal </h6>
            </div>

            {/* Barra vermelha */}
            <div className="red-bar"/>

            {/* Imagem dos blocos */}
            <div className="blocos">
                <img src={footer} className="imagem-footer" alt="footer" />
            </div>

            {/* Créditos e Links Extras */}
            <div className="texts">
                <div className="credits">
                    <p>
                        Comentários ou sugestões?
                        <br/>
                        Fone: (55) 019 3521 5956
                        <br/>
                        E-mail: <a href="mailto:samuel@ime.unicamp.br" target="_blank" rel="noopener noreferrer"> samuel@ime.unicamp.br </a>
                        <br/>
                        <br/>
                        <br/>
                        Site inicialmente desenhado pela <a href="http://www.preface.com.br" target="_blank" rel="noopener noreferrer"> Preface Design </a>
                        <br/>
                        Redesenhado e reconstruído por <a href="http://c-mls.weebly.com/" target="_blank" rel="noopener noreferrer"> Camila Porfírio </a>
                    </p>
                </div>
                <div className="extra-links">
                    <Link to="/principal/justificativa">
                        <p> Justificativa Pedagógica </p>
                    </Link>

                    <Link to="/principal/colaboradores">
                        <p> Colaboradores </p>
                    </Link>

                    <Link to="/principal/historico">
                        <p>  Histórico </p>
                    </Link>   

                    <div className="social-midia">
                        <a href="https://www.youtube.com/user/matematicamultimidia/featured" target="_blank" rel="noopener noreferrer">
                            <img src={logoyoutube} alt="youtube" />
                        </a>

                        <a href="https://twitter.com/matematicam3" target="_blank" rel="noopener noreferrer">
                            <img src={logotwitter} alt="twitter" />
                        </a>
                    </div>
                </div>
            </div>
            
            {/* REMOVER ISSO AQUI DPS! */}
            <br/><br/><br/>
        </>    
    )
}

export default Footer