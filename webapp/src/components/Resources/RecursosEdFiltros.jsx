import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function RecursosEdFiltros({filtrosOpen, numberOfResults, filters, setFilters}) {

    console.log("AAAAAAAAAA", filters)
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
                                        <p onClick={() => setFilters(prevState => ({...prevState, experimentos:!prevState.experimentos}))}> Experimentos </p> 
                                        <br/>
                                        <p onClick={() => setFilters(prevState => ({...prevState, videos:!prevState.videos}))}> Vídeos </p> 
                                        <br/>
                                        <p onClick={() => setFilters(prevState => ({...prevState, softwares:!prevState.softwares}))}> Softwares </p>
                                        <br/>
                                        <p onClick={() => setFilters(prevState => ({...prevState, audios:!prevState.audios}))}> Áudios </p>
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