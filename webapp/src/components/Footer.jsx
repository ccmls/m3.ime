import React from 'react';
import './Footer.css';
import copyrights from '../assets/copyrights.png'
import logoyoutube from '../assets/logo-youtube.png';
import logotwitter from '../assets/logo-twitter.png';

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

            {/* Créditos e Links Extras */}
            <div className="texts">
                <div className="credits">
                    <p>
                        Comentários ou sugestões?
                        <br/>
                        Fone: (55) 019 3521 5956
                        <br/>
                        E-mail: <a href="mailto:samuel@ime.unicamp.br" target="_blank" > samuel@ime.unicamp.br </a>
                        <br/>
                        <br/>
                        <br/>
                        Site inicialmente desenhado pela <a href="http://www.preface.com.br" target="_blank"> Preface Design </a>
                        <br/>
                        Redesenhado e reconstruído por <a href="http://c-mls.weebly.com/" target="_blank"> Camila Porfírio </a>
                    </p>
                </div>
                <div className="extra-links">
                    <p> Justificativa Pedagógica </p>
                    <p> Colaboradores </p>
                    <p>  Histórico </p>
                    <div className="social-midia">
                        <a href="https://www.youtube.com/user/matematicamultimidia/featured" target="_blank">
                            <img src={logoyoutube} alt="youtube" />
                        </a>
                        <a href="https://twitter.com/matematicam3" target="_blank">
                            <img src={logotwitter} alt="twitter" />
                        </a>
                    </div>
                </div>
            </div>
            
            <br/><br/><br/>
        </>    
    )
}

export default Footer