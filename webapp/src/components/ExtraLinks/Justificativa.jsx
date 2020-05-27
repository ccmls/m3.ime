import React from 'react';
import './ExtraLinks.css';
import { Container, Row, Col } from 'reactstrap';
// IMAGENS:
import iconJustificativa from '../../assets/icons - ExtraLinks/icon-justificativa.png';


function Justificativa() {
    return (
        <Container className="extra-links-container">

            {/* Título */}
            <Row className="extra-links-row">
                <h2 className="extra-links-col"> 
                    Justificativa Pedagógica
                </h2>
            </Row>

            {/* Ícone e Textos */}
            <Row className="extra-links-row">
                <Col md="2" sm="12" className="extra-links-col">
                    <img src={iconJustificativa} className="extra-links-icon" alt="justificativa pedagógica"/>
                </Col>

                <Col md="10" sm="12" className="extra-links-col">
                    <p>
                        Os recursos educacionais dessa coleção abordam praticamente todo o conteúdo de matemática do 
                        ensino médio do Brasil de forma variada e cabe ao professor, em acordo com sua coordenação 
                        pedagógica e direção escolar, escolher os itens que melhor se enquadrem no seu programa, 
                        respeitando as características do professor e a realidade dos seus alunos.
                        <br/>
                        Os recursos favorecem a interação social, ao propor a formação de grupos para realização das 
                        atividades, mas sempre com a mediação do professor na sala de aula.
                    </p>

                    <h3 style={{marginTop: "60px"}}>
                        As Mídias
                    </h3>
                    <p>
                        <br/>
                        Os vídeos exploram desde aspectos introdutórios e históricos de um tópico até aplicações 
                        e usos avançados.
                        <br/>
                        Os áudios seguem formatos variados, mas todos com maior ênfase em motivar o estudos do que 
                        em aspectos mais técnios e formais.
                        <br/>
                        Os áudios seguem formatos variados, mas todos com maior ênfase em motivar o estudos do que 
                        em aspectos mais técnios e formais.
                    </p>

                    <h3 style={{marginTop: "60px"}}>
                        Artigos
                    </h3>
                    <p>
                        <br/>
                        Se você procura uma referência mais acadêmica, o coordenador degral da coleção, prof. Dr. 
                        Samuel Rocha de Oliveira, escreveu o texto <a href="https://econtents.bc.unicamp.br/inpec/index.php/cef/article/view/9199" target="_blank" rel="noopener noreferrer">  
                        Desafios e possibilidades de uso de conteúdos digitais 
                        no ensino e na aprendizagem de matemática: o caso da coleção M3.
                        </a>
                    </p>
                </Col>
            </Row>

            <div className="divider" style={{marginTop: "30px"}}/>

        </Container>
    )
}

export default Justificativa