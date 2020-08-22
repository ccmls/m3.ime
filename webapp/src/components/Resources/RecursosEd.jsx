import React, { useState, useEffect } from 'react';
import './Recursos.css';
import { Container, Row, Col, Button } from 'reactstrap';
import RecursosEdSearch from './RecursosEdSearch';
import RecursosEdFiltros from './RecursosEdFiltros';
import upArrow from '../../assets/up-arrow.svg';
import m3_resources from '../../xml/m3_resources.js'
import Pagination from './Pagination';

function RecursosEd() {

    // State para controlar a busca
    const [searchValue, setSearchValue] = useState("");

    // State para controlar os recursos que serão renderizados
    const [filteredResourcesArray, setFilteredResourcesArray] = useState([])

    // State pra controlar o colapse dos filtros
    const [filtrosOpen, setFiltrosOpen] = useState(false);

    // 
    useEffect(() => {
        setFilteredResourcesArray(prevState => resourcesArray.filter(element => element.m3_media_id.toLowerCase().includes(searchValue.toLowerCase()) || element.title.toLowerCase().includes(searchValue.toLowerCase()) || element.synopsis.toLowerCase().includes(searchValue.toLowerCase()) || element.objectives.toLowerCase().includes(searchValue.toLowerCase())))
    }, [searchValue])

    // Função para o botão de scroll to top
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


    // Parser
    const parser = new DOMParser();
    const parsedResources = parser.parseFromString(m3_resources,"text/xml");

    const rawResourcesArray = [...parsedResources.getElementsByTagName("m3_resource")]
    console.log(rawResourcesArray)
    const resourcesArray = rawResourcesArray.map(rawResource => ({
        title: rawResource.childNodes[7].textContent,
        m3_media_id: rawResource.childNodes[3].textContent,
        topic: rawResource.childNodes[35].textContent,
        serie: rawResource.childNodes[5].textContent,
        synopsis: rawResource.childNodes[11].textContent,
        objectives: rawResource.childNodes[13].textContent,
        tags: rawResource.childNodes[33].textContent,
    }))


    // Função pra renderizar os recursos
    function renderResources(resourcesToRender) {
        return resourcesToRender.map(resource => {
            return (
                <div className="resources-card">
                    <Row className= "resources-row">
                            <Col className= "resources-col">
                                <h2> {resource.title} </h2>
                                <div  style={{marginTop: "10px"}}>
                                    <p style={{color: "#ee2d32"}}> {resource.topic} </p>
                                </div>
                            </Col>
                            <Col className= "resources-col">
                                <p style={{marginLeft: "auto"}}> {resource.m3_media_id} </p>
                            </Col>
                    </Row>
                    <Row className= "resources-row">
                        <Col md="5" sm="12" className= "resources-col">
                            <p> {resource.synopsis} </p>
                        </Col>
                        <Col md="4" sm="12" className= "resources-col">
                            <h6> Objetivos: </h6>
                            <p> {resource.objectives} </p>
                        </Col>
                        <Col md="3" sm="12" className= "resources-col">
                            <h6> Conteúdos: </h6>
                            <p> {resource.tags} </p>
                        </Col>
                    </Row>
                </div>
        )})
    }
    

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
                            <RecursosEdSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
                            <Button className="button" onClick={() => setFiltrosOpen(!filtrosOpen)} style={{marginLeft: "10px"}}> 
                                <p>
                                    FILTRAR
                                </p> 
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row className="home-row">
                    <Col style={{padding: "0px 47px"}}>
                        <RecursosEdFiltros filtrosOpen={filtrosOpen} numberOfResults={filteredResourcesArray.length}/>
                    </Col>
                </Row>

                {renderResources(filteredResourcesArray)}

                <div className="divider" style={{marginTop: "30px"}}/>
            </Container>
        </>
    )
}

export default RecursosEd