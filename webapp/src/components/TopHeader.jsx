import React from 'react';
import './TopHeader.css';
import header from '../assets/header.png'

function TopHeader() {
    return (
        <div className="TopHeader">
            <img src={header} className="ImagemTopHeader" alt="header" />
        </div>
    )
}

export default TopHeader