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
                            <Col lg="2" md="6" sm="12" style={{paddingTop: "20px"}}>
                                <Row> <h6>MÍDIA</h6> </Row>
                                <Row>
                                    <div>
                                        <br/>
                                        <p onClick={() => URLtoggler("experimentos")}> {filters.includes("experimentos") ? 
                                            <span style={{color: "#202020"}}> Experimentos⠀✕ </span> :'Experimentos'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("videos")}> {filters.includes("videos") ? 
                                            <span style={{color: "#202020"}}> Vídeos⠀✕ </span> :'Vídeos'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("softwares")}> {filters.includes("softwares") ? 
                                            <span style={{color: "#202020"}}> Softwares⠀✕ </span> :'Softwares'}
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("audios")}> {filters.includes("audios") ? 
                                            <span style={{color: "#202020"}}> Áudios⠀✕ </span> :'Áudios'} 
                                        </p>
                                    </div>
                                </Row>
                            </Col>

                            <Col lg="4" md="6" sm="12" style={{paddingTop: "20px"}}>
                                <Row> <h6>ANÁLISE DE DADOS E PROBABILIDADE</h6> </Row>
                                <Row> 
                                    <div>
                                        <br/>
                                        <p onClick={() => URLtoggler("arranjoPermutacaoECombinacao")}> {filters.includes("arranjoPermutacaoECombinacao") ? 
                                            <span style={{color: "#202020"}}> Arranjo, Permutação e Combinação⠀✕ </span> :'Arranjo, Permutação e Combinação'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("combinacoesCiclicasEComSimetrias")}> {filters.includes("combinacoesCiclicasEComSimetrias") ? 
                                            <span style={{color: "#202020"}}> Combinações cíclicas e com simetrias⠀✕ </span> :'Combinações cíclicas e com simetrias'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("binomioDeNewtonETrianguloDePascal")}> {filters.includes("binomioDeNewtonETrianguloDePascal") ? 
                                            <span style={{color: "#202020"}}> Binômio de Newton e Triângulo de Pascal⠀✕ </span> :'Binômio de Newton e Triângulo de Pascal'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("grafos")}> {filters.includes("grafos") ? 
                                            <span style={{color: "#202020"}}> Grafos⠀✕ </span> :'Grafos'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("probabilidade")}> {filters.includes("probabilidade") ? 
                                            <span style={{color: "#202020"}}> Probabilidade⠀✕ </span> :'Probabilidade'}
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("estatistica")}> {filters.includes("estatistica") ? 
                                            <span style={{color: "#202020"}}> Estatística⠀✕ </span> :'Estatística'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("interpretacaoDeGraficosEDados")}> {filters.includes("interpretacaoDeGraficosEDados") ? 
                                            <span style={{color: "#202020"}}> Interpretação de gráficos e dados⠀✕ </span> :'Interpretação de gráficos e dados'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("planejamentoDeExperimentos")}> {filters.includes("planejamentoDeExperimentos") ? 
                                            <span style={{color: "#202020"}}> Planejamento de Experimentos⠀✕ </span> :'Planejamento de Experimentos'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("elementosDeAmostragem")}> {filters.includes("elementosDeAmostragem") ? 
                                            <span style={{color: "#202020"}}> Elementos de Amostragem⠀✕ </span> :'Elementos de Amostragem'} 
                                        </p>
                                    </div>
                                </Row>
                            </Col>

                            <Col lg="3" md="6" sm="12" style={{paddingTop: "20px"}}>
                                <Row> <h6>GEOMETRIA E MEDIDAS</h6> </Row>
                                <Row> 
                                    <div>
                                        <br/>
                                        <p onClick={() => URLtoggler("geometriaPlana")}> {filters.includes("geometriaPlana") ? 
                                            <span style={{color: "#202020"}}> Geometria Plana⠀✕ </span> :'Geometria Plana'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("trigonometria")}> {filters.includes("trigonometria") ? 
                                            <span style={{color: "#202020"}}> Trigonometria⠀✕ </span> :'Trigonometria'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("geometriaEspacial")}> {filters.includes("geometriaEspacial") ? 
                                            <span style={{color: "#202020"}}> Geometria Espacial⠀✕ </span> :'Geometria Espacial'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("geometriaAnalitica")}> {filters.includes("geometriaAnalitica") ?
                                            <span style={{color: "#202020"}}> Geometria Analítica⠀✕ </span> :'Geometria Analítica'} 
                                        </p>   
                                    </div>
                                </Row>
                            </Col>

                            <Col lg="3" md="6" sm="12" style={{paddingTop: "20px"}}>
                                <Row> <h6>NÚMEROS E FUNÇÕES</h6> </Row>
                                <Row> 
                                    <div>
                                        <br/>
                                        <p onClick={() => URLtoggler("conjuntosLogicaENumeros")}> {filters.includes("conjuntosLogicaENumeros") ?
                                            <span style={{color: "#202020"}}> Conjuntos, Lógica e Números⠀✕ </span> :'Conjuntos, Lógica e Números'} 
                                        </p>   
                                        <br/>
                                        <p onClick={() => URLtoggler("relacoesEFuncoes")}> {filters.includes("relacoesEFuncoes") ?
                                            <span style={{color: "#202020"}}> Relações e Funções⠀✕ </span> :'Relações e Funções'} 
                                        </p>   
                                        <br/>
                                        <p onClick={() => URLtoggler("razaoEProporcao")}> {filters.includes("razaoEProporcao") ?
                                            <span style={{color: "#202020"}}> Razão e Proporção⠀✕ </span> :'Razão e Proporção'}
                                        </p> 
                                        <br/>
                                        <p onClick={() => URLtoggler("funcaoAfim")}> {filters.includes("funcaoAfim") ?
                                            <span style={{color: "#202020"}}> Função Afim⠀✕ </span> :'Função Afim'} 
                                        </p> 
                                        <br/>
                                        <p onClick={() => URLtoggler("funcaoQuadratica")}> {filters.includes("funcaoQuadratica") ?
                                            <span style={{color: "#202020"}}> Função Quadrática⠀✕ </span> :'Função Quadrática'}
                                        </p> 
                                        <br/>
                                        <p onClick={() => URLtoggler("funcaoExponencial")}> {filters.includes("funcaoExponencial") ?
                                            <span style={{color: "#202020"}}> Função Exponencial⠀✕ </span> :'Função Exponencial'} 
                                        </p> 
                                        <br/>
                                        <p onClick={() => URLtoggler("funcaoLogaritmo")}> {filters.includes("funcaoLogaritmo") ?
                                            <span style={{color: "#202020"}}> Função Logaritmo⠀✕ </span> :'Função Logaritmo'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("sequencias")}> {filters.includes("sequencias") ?
                                            <span style={{color: "#202020"}}> Sequências⠀✕ </span> :'Sequências'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("funcoestrigonometricas")}> {filters.includes("funcoestrigonometricas") ?
                                            <span style={{color: "#202020"}}> Funções trigonométricas⠀✕ </span> :'Funções trigonométricas'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("sistemasLineares")}> {filters.includes("sistemasLineares") ?
                                            <span style={{color: "#202020"}}> Sistemas Lineares⠀✕ </span> :'Sistemas Lineares'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("matrizes")}> {filters.includes("matrizes") ?
                                            <span style={{color: "#202020"}}> Matrizes⠀✕ </span> :'Matrizes'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("polinomiosENmerosComplexos")}> {filters.includes("polinomiosENmerosComplexos") ?
                                            <span style={{color: "#202020"}}> Polinômios e Números Complexos⠀✕ </span> :'Polinômios e Números Complexos'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("matematicaFinanceira")}> {filters.includes("matematicaFinanceira") ?
                                            <span style={{color: "#202020"}}> Matemática Financeira⠀✕ </span> :'Matemática Financeira'} 
                                        </p>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Collapse>
            <br/>
            <p> Mostrando {numberOfResults} resultados. </p>
            <p> Filtrando por: {filters}  </p>
        </>
    )
}

export default RecursosEdFiltros