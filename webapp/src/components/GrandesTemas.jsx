import React from 'react';
import './GrandesTemas.css';
import { Row, Col } from 'reactstrap';
import icontemasProb from '../assets/icontemas-prob.png';
import icontemasGeom from '../assets/icontemas-geom.png';
import icontemasNum from '../assets/icontemas-num.png';

function GrandesTemas() {
    return(
        <>
        <Row className="home-row">
            <h2 className="home-col" style={{marginBottom: "-20px"}}> 
                Os Grandes Temas
            </h2>
        </Row>
        {/* Análise de Dados e Probabilidade */}
        <Row className="home-row">
            <Col md="2" sm="12" className="home-col">
                <img src={icontemasProb} alt="análise de dados e probabilidade"/>
            </Col>
            <Col md="10" sm="12" className="home-col">
            <h3>
                <div className="title"> Análise de Dados e Probabilidade </div>
            </h3>
            <p>
                <br/>
                    Contempla as seguintes unidades temáticas: estatística probabilidade e contagem; que abordam os seguintes assuntos:
                    <br/>
                    - Arranjo, Permutação e Combinação
                    <br/>
                    - Combinações cíclicas e com simetrias
                    <br/>
                    - Binômio de Newton e Triângulo de Pascal
                    <br/>
                    - Grafos
                    <br/>
                    - Probabilidade
                    <br/>
                    - Estatística
                    <br/>
                    - Interpretação de gráficos e dados
                    <br/>
                    - Planejamento de Experimentos
                    <br/>
                    - Elementos de Amostragem
            </p>
            </Col>
        </Row>
        {/* Geometria e Medidas */}
        <Row className="home-row">
            <Col md="2" sm="12" className="home-col">
                <img src={icontemasGeom} alt="geometria e medidas"/>
            </Col>
            <Col md="10" sm="12" className="home-col">
                <h3>
                    <div className="title"> Geometria e Medidas </div>
                </h3>
                <p>
                    <br/>
                    Contempla as seguintes unidades temáticas: geometria plana, geometria espacial, geometria métrica e geometria analítica; que abordam os seguintes assuntos:
                    <br/>
                    - Geometria Plana
                    <br/>
                    - Trigonometria
                    <br/>
                    - Geometria Espacial
                    <br/>
                    - Geometria Analítica
                </p>
            </Col>
        </Row>
        {/* Números e Funções */}
        <Row className="home-row">
            <Col md="2" sm="12" className="home-col">
                <img src={icontemasNum} alt="números e funções"/>
            </Col>
            <Col md="10" sm="12" className="home-col">
                <h3>
                    <div className="title"> Números e Funções </div>
                </h3>
                <p>
                    <br/>
                    Contempla as seguintes unidades temáticas: Variação de grandezas e Trigonometria que abordam os seguintes assuntos com aplicações:
                    <br/>
                    - Conjuntos, Lógica e Números
                    <br/>
                    - Relações e Funções
                    <br/>
                    - Razão e Proporção
                    <br/>
                    - Função Afim
                    <br/>
                    - Função Quadrática
                    <br/>
                    - Função Exponencial
                    <br/>
                    - Função Logaritmo
                    <br/>
                    - Sequências
                    <br/>
                    - Funções trigonométricas
                    <br/>
                    - Sistemas Lineares
                    <br/>
                    - Matrizes
                    <br/>
                    - Polinômios e Números Complexos
                    <br/>
                    - Matemática Financeira
                </p>
            </Col>
        </Row>
        </>
    )
}

export default GrandesTemas