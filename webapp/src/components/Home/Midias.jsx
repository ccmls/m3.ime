import React, { useState } from 'react';
import './Midias.css';
import { Row, Col } from 'reactstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import iconExperimentos from '../../assets/icons - Home/icon-experimentos.png';
import iconVideos from '../../assets/icons - Home/icon-videos.png';
import iconSoftwares from '../../assets/icons - Home/icon-softwares.png';
import iconAudios from '../../assets/icons - Home/icon-audios.png';


function Midias() {

    // States para controlar os botões de collapse:
    const [videosOpen, setVideosOpen] = useState(false);
    const [audiosOpen, setAudiosOpen] = useState(false);

    return(
        <>

        {/* Título */}
        <Row className="home-row">
            <h2 className="home-col" style={{marginBottom: "-20px"}}> 
                As Mídias
            </h2>
        </Row>
        
        {/* Experimentos */}
        <Row className="home-row">
            <Col md="2" sm="12" className="home-col">
                <img src={iconExperimentos} alt="experimentos"/>
            </Col>
            <Col md="10" sm="12" className="home-col">
                <h3>
                    <div className="filter-link"> Experimentos </div>
                </h3>
                <p>
                    <br/>
                    Atividades práticas instigantes que podem ser feitas em uma ou duas aulas em que se constrói algum conceito 
                    ou formalização matemática. Em geral, eles seguem a ideia de um experimento científico: geração e coleta de 
                    dados, análise e conclusão (ou formalização matemática, no nosso caso).
                    <br/>
                    Esses experimentos contam com um roteiro metodológico para o professor, uma folha de acompanhamento para os 
                    alunos e um guia com informações adicionais ou complementares para o professor.
                </p>
            </Col>
        </Row>
        
        {/* Vídeos */}
        <Row className="home-row">
            <Col md="2" sm="12" className="home-col">
                <img src={iconVideos} alt="vídeos"/>
            </Col>
            <Col md="10" sm="12" className="home-col">
                <h3>
                    <div className="filter-link"> Vídeos </div>
                </h3>
                <p>
                    <br/>
                    180 programas áudio-visuais de dez minutos produzidos para serem parte das atividades presenciais na 
                    sala de aula ao longo dos três anos do ensino médio.
                    <br/>
                    O professor deve apresentar o vídeo no contexto de seu programa didático e para isso deve consultar 
                    o respectivo "Guia do Professor".
                </p>
                <div>
                    {/* Botão de collapse */}
                    <Button className="collapse-button" onClick={() => setVideosOpen(!videosOpen)}> 
                        <p>
                            Dividem-se em três séries
                        </p> 
                    </Button>
                    <Collapse isOpen={videosOpen}>
                        <Card style={{borderColor: "#f5f5f5", height: "305px", overflowY: "scroll"}}>
                            <CardBody>
                                <p>
                                    <b> Matemática na Escola </b>
                                    <br/>
                                    A série Matemática na Escola aborda o conteúdo de matemática do ensino médio através de 
                                    situações, ficções e contextualizações. Os programas desta série usualmente são informativos 
                                    e introdutórios de um assunto a ser estudado em sala de aula pelo professor. Os programas são 
                                    ricos em representações gráficas para dar suporte ao conteúdo mais matemático e pequenos documentários 
                                    trazem informações interdisciplinares.
                                    <br/>
                                    <br/>
                                    <b> Atividades </b>
                                    <br/>
                                    A série Atividades apresenta em vídeo os principais passos de alguns experimentos que o professor pode 
                                    desenvolver com a sua turma.
                                    <br/>
                                    <br/>
                                    <b> Profissões </b>
                                    <br/>               
                                    A série Qual é a sua profissão? apresenta uma série de entrevistas com profissionais. São duas 
                                    entrevistas espontâneas intercaladas em cada programa, no ambiente de trabalho dos profissionais e 
                                    aborda as características, o cotidiano, as possibilidades de mercado e a formação de cada profissional.
                                </p>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </Col>
        </Row>
        
        {/* Softwares */}
        <Row className="home-row">
            <Col md="2" sm="12" className="home-col">
                <img src={iconSoftwares} alt="softwares"/>
            </Col>
            <Col md="10" sm="12" className="home-col">
                <h3>
                    <div className="filter-link"> Softwares </div>
                </h3>
                <p>
                    <br/>
                    Estamos trabalhando na atualização dos softwares para que eles funcionem em navegadores modernos.
                </p>
            </Col>
        </Row>
        
        {/* Áudios */}
        <Row className="home-row">
            <Col md="2" sm="12" className="home-col">
                <img src={iconAudios} alt="áudios"/>
            </Col>
            <Col md="10" sm="12" className="home-col">
                <h3>
                    <div className="filter-link"> Áudios </div>
                </h3>
                <p>
                    <br/>
                    Programas de áudio divididos em duas partes de cinco minutos cada um, que podem ser ouvidos em grupo 
                    ou individualmente.
                    <br/>
                    O professor deve apresentar o áudio no contexto de seu programa didático e para isso deve consultar 
                    o respectivo guia do professor.
                </p>
                <div>
                    {/* Botão de collapse */}
                    <Button className="collapse-button" onClick={() => setAudiosOpen(!audiosOpen)}>
                        <p>
                            Dividem-se em sete séries
                        </p>
                    </Button>
                    <Collapse isOpen={audiosOpen}>
                        <Card style={{borderColor: "#f5f5f5", height: "305px", overflowY: "scroll"}}>
                            <CardBody>
                                <p>
                                    <b> Estimativas </b>
                                    <br/>
                                    A ideia da série é incentivar os alunos a fazerem estimativas numéricas.
                                    <br/>
                                    <br/>
                                    <b> Problemas e Soluções </b>
                                    <br/>
                                    Problemas e Soluções A série Problemas e Soluções trata de problemas típicos de matemática 
                                    do ensino médio contextualizados por uma ficção. Em cada programa um ou dois problemas são 
                                    interpretados no primeiro bloco de cinco minutos, ao final do qual o leitor é convidado a tentar 
                                    resolver. No contexto da sala de aula, o professor então tem a oportunidade de discutir os métodos 
                                    ou as formas possíveis de resolver o problema. O segundo bloco do programa apresenta as soluções e 
                                    alguns comentários ou informações adicionais.
                                    <br/>
                                    <br/>
                                    <b> O que é? </b>
                                    <br/>
                                    A proposta da série “O que é?” é fazer uma discussão introdutória e sem grandes aprofundamentos 
                                    de alguns conceitos do currículo de Matemática do Ensino Médio que contenham palavras “incomuns” 
                                    fora do contexto da Matemática.
                                    <br/>
                                    <br/>
                                    <b> Cultura </b>
                                    <br/>
                                    A série Cultura foi concebida com o objetivo de proporcionar aos alunos a oportunidade de fazer 
                                    paralelos significativos entre Literatura, Cultura Geral e Matemática, para que ele, além de poder 
                                    observar resoluções de problemas de matemática, também se sentisse estimulado a buscar as referências 
                                    literárias e expandir seu conhecimento em diversas áreas.
                                    <br/>
                                    <br/>
                                    <b> Cumpadis </b>
                                    <br/>
                                    A série Cumpadis apresenta programas descontraídos de variedades que usualmente abordam uma informação 
                                    ou notícia de conhecimentos gerais, na conversa livre, parcialmente rimada, com comentários de conteúdo 
                                    matemático da comadre Margarida. Os temas não são tratados em profundidade e todas as informações devem ser 
                                    verificadas em pesquisa em fontes variadas. A série tem o objetivo de provocar uma discussão, mencionar alguns 
                                    aspectos matemáticos, mas oferecem oportunidade de o professor trabalhar assuntos interdisciplinares em sala de 
                                    aula ou em atividades extraclasse.
                                    <br/>
                                    <br/>
                                    <b> Matema </b>
                                    <br/>
                                    A série Mátema levanta aspectos históricos dos fundamentos da matemática. O contexto da ficção tem o objetivo de 
                                    tornar o programa interessante para o ensino médio e para adolescentes, uma vez que faz uso do estereótipo do Joãozinho, 
                                    da Sofia e da professora. Em geral, os assuntos são mais elaborados do que os que são vistos nos programas de ensino médio. 
                                    No entanto, o programa traz ricas informações e tem o devido cuidado com as definições e conclusões matemáticas
                                    <br/>
                                    <br/>
                                    <b> Radio </b>
                                    <br/>               
                                    A série Rádio Cangália apresenta programas descontraídos de variedades que usualmente abordam uma informação ou notícia 
                                    de conhecimentos gerais, com comentários de um professor de matemática. Os temas não são tratados em profundidade, mas 
                                    oferecem oportunidade de o professor trabalhar assuntos interdisciplinares em sala de aula ou em atividades extraclasse. 
                                    O programa pode trazer também uma piada ou uma frase célebre, sem preocupações maiores além de oferecer motivos de discussão 
                                    em torno de um conteúdo e reforçar a descontração.
                                </p>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </Col>
        </Row>
        </>
    )
}

export default Midias