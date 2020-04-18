import React from 'react';
import './TopHeader.css';
import blocosHeader from '../assets/blocos-header.png'
import logos from '../assets/logos.png'

function TopHeader() {
    return (
        <div className="TopHeader">
            <h1>
                Recursos educacionais multimídia 
                <br></br>
                para a matemática do ensino médio.
            </h1>

            <img src={blocosHeader} className="Blocos-Header" alt="blocos-header" />

            <img src={logos} className="Logos" alt="logos" />
        </div>
    )
}

export default TopHeader