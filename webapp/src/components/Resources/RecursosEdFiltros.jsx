import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { useLocation } from 'react-router-dom';

function RecursosEdFiltros({filtrosOpen, numberOfResults, filters, URLtoggler}) {

    const location = useLocation()
    return (
        <>
            <Collapse isOpen={filtrosOpen}>
                <Card style={{borderColor: "#f5f5f5", backgroundColor:"#f5f5f5"}}>
                    <CardBody>
                        <Row style={{margin:"0"}}>
                            <Col lg="2" md="6" sm="12">
                                <Row> <h6>MÍDIA</h6> </Row>
                                <Row>
                                    <div>
                                        <br/>
                                        <p onClick={() => URLtoggler("experimentos")}> {filters.includes("experimentos") ? 
                                            <span style={{color: "#202020"}}> Experimentos⠀✕ </span> :'Experimentos'} </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("videos")}> {filters.includes("videos") ? 
                                            <span style={{color: "#202020"}}> Vídeos⠀✕ </span> :'Vídeos'} </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("softwares")}> {filters.includes("softwares") ? 
                                            <span style={{color: "#202020"}}> Softwares⠀✕ </span> :'Softwares'} </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("audios")}> {filters.includes("audios") ? 
                                            <span style={{color: "#202020"}}> Áudios⠀✕ </span> :'Áudios'} </p>
                                    </div>
                                </Row>
                            </Col>

                            <Col lg="4" md="6" sm="12">
                                <Row> <h6>ANÁLISE DE DADOS E PROBABILIDADE</h6> </Row>
                                <Row> 
                                    <p>
                                        <br/>
                                        Arranjo, Permutação e Combinação
                                        <br/><br/>
                                        Combinações cíclicas e com simetrias
                                        <br/><br/>
                                        Binômio de Newton e Triângulo de Pascal
                                        <br/><br/>
                                        Grafos
                                        <br/><br/>
                                        Probabilidade
                                        <br/><br/>
                                        Estatística
                                        <br/><br/>
                                        Interpretação de gráficos e dados
                                        <br/><br/>
                                        Planejamento de Experimentos
                                        <br/><br/>
                                        Elementos de Amostragem
                                    </p>
                                </Row>
                            </Col>

                            <Col lg="3" md="6" sm="12">
                                <Row> <h6>GEOMETRIA E MEDIDAS</h6> </Row>
                                <Row> 
                                    <p>
                                        <br/>
                                        Geometria Plana
                                        <br/><br/>
                                        Trigonometria
                                        <br/><br/>
                                        Geometria Espacial
                                        <br/><br/>
                                        Geometria Analítica
                                    </p>
                                </Row>
                            </Col>

                            <Col lg="3" md="6" sm="12">
                                <Row> <h6>NÚMEROS E FUNÇÕES</h6> </Row>
                                <Row> 
                                    <p>
                                        <br/>
                                        Conjuntos, Lógica e Números
                                        <br/><br/>
                                        Relações e Funções
                                        <br/><br/>
                                        Razão e Proporção
                                        <br/><br/>
                                        Função Afim
                                        <br/><br/>
                                        Função Quadrática
                                        <br/><br/>
                                        Função Exponencial
                                        <br/><br/>
                                        Função Logaritmo
                                        <br/><br/>
                                        Sequências
                                        <br/><br/>
                                        Funções trigonométricas
                                        <br/><br/>
                                        Sistemas Lineares
                                        <br/><br/>
                                        Matrizes
                                        <br/><br/>
                                        Polinômios e Números Complexos
                                        <br/><br/>
                                        Matemática Financeira
                                    </p>
                                </Row>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Collapse>
            <br/>
            <p> Mostrando {numberOfResults} resultados. </p>
            <p> Filtrando por: Experimentos / Vídeos / Conjuntos, lógica e números / Matrizes  </p>
        </>
    )
}

export default RecursosEdFiltros