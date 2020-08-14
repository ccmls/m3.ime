import React, { useState } from 'react';
import './Recursos.css';
import { Container, Row, Col, Button } from 'reactstrap';
import RecursosEdSearch from './RecursosEdSearch';
import RecursosEdFiltros from './RecursosEdFiltros';
import upArrow from '../../assets/up-arrow.svg';
import m3_resources from '../../xml/m3_resources.js'
import Pagination from './Pagination';

function RecursosEd() {

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    const [filtrosOpen, setFiltrosOpen] = useState(false);

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
                        <h2> 
                            Encontre os recursos certos para sua aula: 
                        </h2>
                    </Col>
                </Row>
                <Row className="home-row">
                    <Col className="home-col">
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <RecursosEdSearch/>
                            <Button className="button" onClick={() => setFiltrosOpen(!filtrosOpen)} style={{marginLeft: "25px"}}> 
                                <p>
                                    FILTRAR
                                </p> 
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row className="home-row">
                    <Col style={{padding: "0px 47px"}}>
                        <RecursosEdFiltros filtrosOpen={filtrosOpen}/>
                    </Col>
                </Row>

                {/* 2º seção: lista de recursos */}
                <Row className="home-row">
                    <Col className="home-col">
                        <Pagination/>
                    </Col>
                </Row>

                <div className="divider" style={{marginTop: "30px"}}/>
            </Container>
        </>
    )
}

export default RecursosEd