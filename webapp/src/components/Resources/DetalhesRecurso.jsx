import React, { useState, useEffect } from 'react';
import './Recursos.css';
import { Container, Row, Col, Button } from 'reactstrap';
import RecursosEdSearch from './RecursosEdSearch';
import { useHistory } from 'react-router-dom';

function DetalhesRecurso() {

    // Objeto das rotas que representa o histórico (ele funciona como uma pilha para armazenar as rotas)
    const history = useHistory()

    return (
        <Container className="home-container">
            {/* Voltar + Busca*/}
            <Row className="home-row">
                <Col className="home-col">
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <Button className="button" style={{marginRight: "10px"}} onClick={() => history.goBack()}> 
                            <p> VOLTAR </p> 
                        </Button>
                        <RecursosEdSearch setSearchValue={(value) => history.push(`/recursos?search=${value}`)}/>
                    </div>
                </Col>
            </Row>

            {/* Cabeçalho: título, tema, série e mídia */}
            <Row className= "home-row">
                <Col className= "home-col">
                    <h2> Título do Recurso </h2>
                    <div  style={{marginTop: "10px"}}>
                        <p style={{color: "#ee2d32", textTransform: "uppercase"}}> Tema tema tema tema </p>
                    </div>
                </Col>
                <Col className= "home-col">
                    <p style={{marginLeft: "auto"}}> imagem da mídia </p>
                </Col>
            </Row>
            <div className="divider" style={{marginTop: "-15px", marginBottom: "30px"}}/>

            <Row className="home-row">
                {/* Card de sinopse, objetivos, conteúdos, créditos */}
                <Col md="5" sm="12" className= "home-col">
                    <div className="details-card">
                        <h3> Sinopse </h3>
                        <p> 
                            Inserir aqui o texto da sinopse e inserir aqui o texto 
                            da sinopse e inserir aqui o texto 
                            da sinopse e inserir aqui o texto 
                            da sinopse e inserir aqui o texto 
                            da sinopse.
                        </p>
                        <h3> Objetivos </h3>
                        <p> 
                            Inserir aqui o texto dos objetivos e inserir aqui o texto 
                            dos objetivos e inserir aqui o texto 
                            dos objetivos e inserir aqui o texto 
                            dos objetivos e inserir aqui o texto 
                            dos objetivos.
                        </p>
                        <h3> Conteúdos </h3>
                        <p> 
                            Inserir aqui o texto dos conteúdos e inserir aqui o texto 
                            dos conteúdos e inserir aqui o texto 
                            dos conteúdos e inserir aqui o texto 
                            dos conteúdos e inserir aqui o texto 
                            dos conteúdos.
                        </p>
                        <h3> Créditos </h3>
                        <p style={{paddingBottom: "20px"}}> 
                            Autores
                            <br/>
                            CONTEÚDO Sueli Irene Rodrigues Costa
                            <br/>
                            ROTEIRO Roberto Limberger
                            <br/>
                            GUIA Sueli Irene Rodrigues Costa e Claudina Izepe Rodrigues
                        </p>
                    </div>
                </Col>
                <Col md="7" sm="12" className= "home-col">
                </Col>
            </Row>


            <div className="divider" style={{marginTop: "30px"}}/>
        </Container>
    )
}

export default DetalhesRecurso