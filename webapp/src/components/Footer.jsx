import React from 'react';
import './Footer.css';
import copyrights from '../assets/copyrights.png'

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

            
            <br/><br/><br/>
        </>    
    )
}

export default Footer