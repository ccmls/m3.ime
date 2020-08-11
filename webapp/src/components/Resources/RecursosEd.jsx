import React from 'react';
import './Recursos.css';
import { Container, Row, Col } from 'reactstrap';
import RecursosEdSearch from './RecursosEdSearch';
import RecursosEdFiltros from './RecursosEdFiltros';
import upArrow from '../../assets/up-arrow.svg';
import m3_resources from '../../xml/m3_resources.js'

function RecursosEd() {

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    const parser = new DOMParser();
    console.log("aaaa", m3_resources)
    const parsedResources = parser.parseFromString(m3_resources,"text/xml");
    console.log("aaassssssssa", parsedResources)
    

    return (
        <>
            {/* Botão de scroll to top */}
            <div className="scroll-to-top-button" onClick={() => topFunction()}>
                <img src={upArrow} alt="scroll to top"/>
            </div>


            <Container className="home-container">

                {/* 1º seção: busca + filtros */}
                <Row className="home-row">
                    <Col className="home-col">
                        <RecursosEdSearch/> <br/> <RecursosEdFiltros/>
                    </Col>
                </Row>

                <div className="divider" style={{marginTop: "30px"}}/>

            </Container>
        </>
    )
}

export default RecursosEd