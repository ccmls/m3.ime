import React, { useState } from 'react';
import './RecursosEdFiltros.css';
import { Col, Row } from 'reactstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function RecursosEdFiltros() {

    const [filtrosOpen, setFiltrosOpen] = useState(false);

    return (
        <>
            <Button className="button" onClick={() => setFiltrosOpen(!filtrosOpen)}> 
                <p>
                    FILTRAR
                </p> 
            </Button>
            <Collapse isOpen={filtrosOpen}>
                <Card style={{borderColor: "#f5f5f5", backgroundColor:"#f5f5f5"}}>
                    <CardBody>
                        <Row style={{margin:"0"}}>
                            <Col lg="2" md="6" sm="12">
                                <Row> <p><b>MÍDIA</b></p> </Row>
                            </Col>

                            <Col lg="4" md="6" sm="12">
                                <Row> <p><b>ANÁLISE DE DADOS E PROBABILIDADE</b></p> </Row>
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
                                <Row> <p><b>GEOMETRIA E MEDIDAS</b></p> </Row>
                            </Col>

                            <Col lg="3" md="6" sm="12">
                                <Row> <p><b>NÚMEROS E FUNÇÕES</b></p> </Row>
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
        </>
    )
}

export default RecursosEdFiltros