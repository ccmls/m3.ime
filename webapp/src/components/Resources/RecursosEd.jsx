import React from 'react';
import './Recursos.css';
import { Container, Row, Col } from 'reactstrap';
import m3_resources from '../../xml/m3_resources.js'

function RecursosEd() {

    const parser = new DOMParser();
    console.log("aaaa", m3_resources)
    const parsedResources = parser.parseFromString(m3_resources,"text/xml");
    console.log("aaassssssssa", parsedResources)
    

    return (
        <p>aaaa</p>
    )
}

export default RecursosEd