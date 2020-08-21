import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function RecursosEdFiltros({filtrosOpen, numberOfResults}) {
    return (
        <>
            <Collapse isOpen={filtrosOpen}>
                <Card style={{borderColor: "#f5f5f5", backgroundColor:"#f5f5f5"}}>
                    <CardBody>
                        <Row style={{margin:"0"}}>
                            <Col lg="2" md="6" sm="12">
                                <Row> <h6>MÍDIA</h6> </Row>
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
                            </Col>

                            <Col lg="3" md="6" sm="12">
                                <Row> <h6>NÚMEROS E FUNÇÕES</h6> </Row>
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