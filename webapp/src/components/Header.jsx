import React from 'react';
import './Header.css';
import youtube from '../assets/youtube.svg'

function Header() {
    return(
        <div className="Header">
            <ul>
                <li> Início </li>
                <li> Recursos Educacionais </li>
                <li> Justificativa Pedagógica </li> 
                <li> Histórico </li>  
                <li> Colaboradores </li>
                <li> <img src={youtube} className="Youtube-logo" alt="youtube" /> </li>  
            </ul>
        </div>
    )
}

export default Header