import React from 'react';
import './ExtraLinks.css';
import { Container, Row, Col } from 'reactstrap';
// IMAGENS:
import iconHistorico from '../../assets/icons - ExtraLinks/icon-historico.png';

function Historico() {
    return (
        <Container className="extra-links-container">

            {/* Título */}
            <Row className="extra-links-row">
                <h2 className="extra-links-col"> 
                    Histórico
                </h2>
            </Row>

            {/* Ícone e Textos */}
            <Row className="extra-links-row">
                <Col md="2" sm="12" className="extra-links-col">
                    <img src={iconHistorico} className="extra-links-icon" alt="justificativa pedagógica"/>
                </Col>

                <Col md="10" sm="12" className="extra-links-col">
                    <h3>
                        O Início
                    </h3>
                    <p>
                        <br/>
                        Esta coleção nasceu de uma chamada de Edital do MEC e MCT para o desenvolvimento e produção 
                        de recursos educacionais em mídias digitais em 2007 agora conhecido como CONDIGITAL. Todos 
                        recursos foram desenvolvidos por uma grande equipe de profissionais de diversas áreas durante 
                        aproximadamente quatro anos, com tempos de dedicação individual variáveis.
                    </p>

                    <h3 style={{marginTop: "60px"}}>
                        A Publicação
                    </h3>
                    <p>
                        <br/>
                        Entre 2010 e 2011 os recursos da coleção começaram a ser publicados na internet, tanto 
                        neste portal quanto 
                        no <a href="https://www.youtube.com/user/matematicamultimidia/featured" target="_blank" rel="noopener noreferrer">Youtube</a> e
                        em canais parceiros.
                    </p>

                    <h3 style={{marginTop: "60px"}}>
                        Divulgação
                    </h3>
                    <p>
                        <br/>
                        A partir de 2011 uma série de cursos, entitulada <b>M@tmidias</b>, foi oferecida para os professores
                        da rede pública do Estado de São Paulo para que estes possam conhecer os recursos da coleção M3
                        e utilizá-los de maneira integrada ao currículo oficial do Estado.
                        <br/>
                        Além deste curso, outras oficinas, cursos de extensão e palestras são regularmente oferecida por 
                        membros da equipe e entuasiastas da coleção M3.
                    </p>

                    <h3 style={{marginTop: "60px"}}>
                        Uma Primeira Avaliação
                    </h3>
                    <p>
                        <br/>
                        Em 2019, Leonardo Barichello organizou um questionário que contou com cerca de 150 respostas sobre 
                        os usos que estão sendo feitos da coleção.
                        <br/>
                        As respostas indicaram não apenas que a coleção continua sendo usada por todo o Brasil, mas também 
                        identificou algumas ações que podem aumentar ainda mais o alcance da coleção.
                    </p>

                    <h3 style={{marginTop: "60px"}}>
                        Renovação
                    </h3>
                    <p>
                        <br/>
                        Em 2020 algumas ações para renovação da coleção M3 tiveram início.
                        <br/>
                        A primeira delas foi a postagem dos áudios no <a href="https://www.youtube.com/playlist?list=PLMx2Ts2fcD_UcsyTDaQ_UHqbjy-el4CAn" target="_blank" rel="noopener noreferrer">Youtube</a>.
                        <br/>
                        A segunda foi uma rodada de atualizações nos sofwtares que deve fazer com que vários voltem a funcionar!
                    </p>
                </Col>
            </Row>

            <div className="divider" style={{marginTop: "30px"}}/>

        </Container>
    )
}

export default Historico