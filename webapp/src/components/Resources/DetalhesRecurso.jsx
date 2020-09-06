import React, { useState, useEffect } from 'react';
import './Recursos.css';
import { Container, Row, Col, Button } from 'reactstrap';
import RecursosEdSearch from './RecursosEdSearch';
import { useHistory } from 'react-router-dom';
import { TwitterShareButton } from 'react-twitter-embed';
// React Twitter Embed:
// https://www.npmjs.com/package/react-twitter-embed

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
                        <RecursosEdSearch setSearchValue={(value) => {
                            if (value.length === 0) {
                                history.push(`/recursos`)
                            } else {
                                history.push(`/recursos?search=${value}`)
                            }
                        }}/>
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
                <Col className= "home-col icon-alignment">
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
                        <h3> Duração </h3>
                        <p> 
                            Inserir aqui o texto.
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

                {/* Card com arquivos, guia do professor e como usar */}
                <Col md="7" sm="12" className="downloads-area">
                    <h3 style={{paddingTop: "20px"}}> Os arquivos </h3>
                    <p> 
                        Inserir aqui o texto da sinopse e inserir aqui o texto 
                        da sinopse e inserir aqui o texto 
                        da sinopse e inserir aqui o texto 
                        da sinopse e inserir aqui o texto 
                        da sinopse.
                    </p>
                    <h3 style={{paddingTop: "40px"}}> Guia do professor </h3>
                    <p> 
                        Duas versões. A primeira, adequada para impressão caseira.
                        A segunda, para visualização em tela:
                        <br/>
                        — <a href="https://anchor.fm/matematica-multimidia" target="_blank" rel="noopener noreferrer" className= "downloads"> versão para impressão </a>
                        <br/>
                        — <a href="https://anchor.fm/matematica-multimidia" target="_blank" rel="noopener noreferrer" className= "downloads"> versão para tela </a>
                    </p>
                    <h3 style={{paddingTop: "40px"}}> Como usar os arquivos? </h3>
                    <p> 
                    Aqui você pode baixar o vídeo e o seu respectivo Guia do Professor com alguns aprofundamentos de conteúdo e sugestões de atividades que podem ser utilizadas antes ou depois a exibição do vídeo.
                    <br/>
                    O vídeo de apresentação está no formato leve do YouTube, mas o vídeo original em formato mpg é de boa resolução e tem aproximadamente 100 Mb, portanto recomendamos que se faça primeiro o download para o seu computador e depois seja feita a visualização com, por exemplo, o software VLC. O Pacote completo é um arquivo comprimido (zip) com o vídeo em mpg e o Guia do Professor em pdf.
                        da sinopse.
                    </p>

                    <div className="centerContent" style={{paddingTop: "40px"}}>
                        <div className="selfCenter">
                        <TwitterShareButton url="https://m3.ime.unicamp.br/" options={{
                            text: '#M3',
                            via: 'matematicam3',
                            size: 'large',
                        }} placeholder="Loading" />
                        </div>
                    </div>
                </Col>
            </Row>


            <div className="divider" style={{marginTop: "30px"}}/>
        </Container>
    )
}

export default DetalhesRecurso