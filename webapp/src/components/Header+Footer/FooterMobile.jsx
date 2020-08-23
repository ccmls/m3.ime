import React from 'react';
import './Footer.css';
import copyrights from '../../assets/copyrights.png'
import logoanchor from '../../assets/logo-anchor.png';
import logoyoutube from '../../assets/logo-youtube.png';
import logotwitter from '../../assets/logo-twitter.png';

function FooterMobile() {
    return(
        <>
            {/* Seção da Licença */}
            <div className="license license-mobile">
                <h6> LICENÇA </h6>
                <p> Esta obra está licenciada sob uma licença Creative Commons 
                    <img src={copyrights} className="copyrights" alt="copyrights"/>
                </p>
            </div>
            <div className="gov-mobile">
                <h6> Secretaria de Educação a Distância </h6>
                <h6> Ministério da Ciência e Tecnologia </h6>
                <h6> Ministério da Educação </h6>
                <h6> Governo Federal </h6>
            </div>

            <div style={{marginTop: "10px", backgroundColor: "#F5F5F5", borderRadius: "10px"}}>

                {/* Créditos */}
                <div className="credits credits-mobile" style={{paddingTop: "30px"}}>
                    <p>
                        Comentários ou sugestões?
                        <br/>
                        Fone: (55) 019 3521 5956
                        <br/>
                        E-mail: <a href="mailto:samuel@ime.unicamp.br" target="_blank" rel="noopener noreferrer"> samuel@ime.unicamp.br </a>
                        <br/>
                        <br/>
                        Site inicialmente desenhado pela <a href="http://www.preface.com.br" target="_blank" rel="noopener noreferrer"> Preface Design </a>
                        <br/>
                        <br/>
                        Redesenhado e reconstruído por <a href="http://c-mls.weebly.com/" target="_blank" rel="noopener noreferrer"> Camila Porfírio </a>
                    </p>
                </div>

                {/* Redes Sociais */}
                <div className="social-midia-mobile" style={{paddingBottom: "30px"}}>
                    <a href="https://anchor.fm/matematica-multimidia" target="_blank" rel="noopener noreferrer">
                        <img src={logoanchor} alt="anchor.fm" />
                    </a>

                    <a href="https://www.youtube.com/user/matematicamultimidia/featured" target="_blank" rel="noopener noreferrer">
                        <img src={logoyoutube} alt="youtube" />
                    </a>

                    <a href="https://twitter.com/matematicam3" target="_blank" rel="noopener noreferrer">
                        <img src={logotwitter} alt="twitter" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default FooterMobile