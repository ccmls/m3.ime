import React from 'react';
import './TopHeader.css';
// IMAGENS:
import header from '../../assets/header.png'

function TopHeader() {
    return (
        // Imagem dos blocos + logotipo na header
        <div className="TopHeader">
            <img src={header} className="imagem-topheader" alt="header" />
        </div>
    )
}

export default TopHeader