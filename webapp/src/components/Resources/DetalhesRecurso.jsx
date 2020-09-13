import React, { useState, useEffect } from 'react';
import './Recursos.css';
import { Container, Row, Col, Button, UncontrolledTooltip } from 'reactstrap';
import RecursosEdSearch from './RecursosEdSearch';
import { useHistory, useParams } from 'react-router-dom';
// React Twitter Embed:
// https://www.npmjs.com/package/react-twitter-embed
import { TwitterShareButton } from 'react-twitter-embed';
// XML
import m3_resources from '../../xml/m3_resources.js'
// IMAGENS:
import iconExperimentos from '../../assets/icons - Home/icon-experimentos.png';
import iconVideos from '../../assets/icons - Home/icon-videos.png';
import iconSoftwares from '../../assets/icons - Home/icon-softwares.png';
import iconAudios from '../../assets/icons - Home/icon-audios.png';

function DetalhesRecurso() {

    // O history funciona como uma pilha para armazenar as rotas e o params contém as informações da rota atual
    const history = useHistory()
    const {idRecurso} = useParams()
     


    // INFORMAÇÕES SOBRE O RECURSO:
    // Parser
    const parser = new DOMParser();
    const parsedResources = parser.parseFromString(m3_resources,"text/xml");

    // Array com todos os recursos
    const rawResourcesArray = [...parsedResources.getElementsByTagName("m3_resource")]
    console.log(rawResourcesArray)
    const resourcesArray = rawResourcesArray.map(rawResource => ({
        id: rawResource.childNodes[1].textContent,
        title: rawResource.childNodes[9].textContent,
        m3_media_id: rawResource.childNodes[3].textContent,
        topic: rawResource.childNodes[41].textContent,
        serie: rawResource.childNodes[5].textContent,
        synopsis: rawResource.childNodes[13].textContent,
        objectives: rawResource.childNodes[15].textContent,
        tags: rawResource.childNodes[37].textContent,
        duration: rawResource.childNodes[11].textContent,
        authors: rawResource.childNodes[35].textContent,
        youtube_link: rawResource.childNodes[33].textContent,
    }))

    // Objeto do recurso específico com todas as suas informações
    const resource = resourcesArray.find(resource => resource.id === idRecurso);

    // Função para diagramar os créditos no card
    function renderCredits() {
        const arrayCredits = resource.authors.split('\n').join(' ').split(' ')
        let title = false;
        let names = "";
        let namesAux = "";
        return arrayCredits.map((element, index) => 
            {
                if (element === "h2.") {
                    title = true;
                    return null;
                }
                else if (title) {
                    title = false;
                    namesAux = names;
                    names = "";
                    return (
                        <>
                            <p> {namesAux} </p>
                            <h6 style={{paddingLeft: "20px", paddingTop: "15px"}}>{element}</h6>
                        </>
                    )
                }
                else if (element[0] === "*") {
                    namesAux = names;
                    names = "";
                    return (
                        <>
                            <p> {namesAux} </p>
                            <p style={{textTransform: "uppercase", color: "#ee2d32", paddingTop: "8px"}}> {element.replaceAll("*", "")} </p>
                        </>
                    )
                }
                else if (index === arrayCredits.length - 1) {
                    return <p> {names} </p>
                }
                else {
                    names = names.concat(" " + element);
                    return null;
                }
            }
        )

    }


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
            <Row className= "resources-row">
                <Col className="resources-col">
                    <h2> {resource.title} </h2>
                    <div  md="10" sm="12" style={{marginTop: "10px"}}>
                        {
                            // Lembrar que dei replace no banco de <m3_serie_id></m3_serie_id> para <m3_serie_id>null</m3_serie_id>
                            resource.serie === "null"?
                                <p> 
                                    <span style={{color: "#ee2d32", textTransform: "uppercase"}} > {resource.topic}  </span>
                                </p>
                            :
                                <p> 
                                    <span style={{color: "#ee2d32", textTransform: "uppercase"}} > {resource.topic}  </span>
                                    <span> • Série: {resource.serie} </span> 
                                </p>
                        }
                    </div>
                </Col>

                <Col md="2" sm="12" className= "resources-col icon-alignment">
                    {/* Experimentos */}
                    {
                        resource.m3_media_id === "Experimento"?
                            <>
                                <img id="exp-icon" style={{height: "53px", width: "auto"}} src={iconExperimentos} alt="experimentos"/>
                                <UncontrolledTooltip placement="bottom" target="exp-icon">
                                    Experimento
                                </UncontrolledTooltip>
                            </>
                        :
                            null
                    }
                    {/* Vídeo */}
                    {
                        resource.m3_media_id === "Vídeo"?
                            <>
                                <img id="vid-icon" style={{height: "53px", width: "auto"}} src={iconVideos} alt="videos"/>
                                <UncontrolledTooltip placement="bottom" target="vid-icon">
                                    Vídeo
                                </UncontrolledTooltip>
                            </>
                        :
                            null
                    }
                    {/* Software */}
                    {
                        resource.m3_media_id === "Software"?
                            <>
                                <img id="sof-icon" style={{height: "53px", width: "auto"}} src={iconSoftwares} alt="software"/>
                                <UncontrolledTooltip placement="bottom" target="sof-icon">
                                    Software
                                </UncontrolledTooltip>
                            </>
                        :
                            null
                    }
                    {/* Áudio */}
                    {
                        resource.m3_media_id === "Áudio"?
                            <>
                                <img id="aud-icon" style={{height: "53px", width: "auto"}} src={iconAudios} alt="audios"/>
                                <UncontrolledTooltip placement="bottom" target="aud-icon">
                                    Áudio
                                </UncontrolledTooltip>
                            </>
                        :
                            null
                    }
                </Col>
            </Row>
            <div className="divider" style={{marginBottom: "30px"}}/>


            <Row className="home-row">

                {/* Card de sinopse, objetivos, conteúdos, créditos */}
                <Col md="5" sm="12" className= "home-col">
                    <div className="details-card">
                        <h3> Duração </h3>
                        <p> {resource.duration} </p>

                        <h3> Objetivos </h3>
                        <ol style={{margin: "0px"}}>
                            {resource.objectives.split(';').map((element) => 
                                <p style={{paddingLeft: "0px"}}><li>{element}</li></p>
                            )}
                        </ol>
                        
                        <h3> Conteúdos </h3>
                        <ul style={{margin: "0px"}}>
                            {/* TROCAR AQUI PRA ; ASSIM QUE EU ALTERAR O BANCO */}
                            {resource.tags.split(',').map((element) => 
                                <p style={{paddingLeft: "0px"}}><li>{element}</li></p>
                            )}
                        </ul>
                    
                        <h3> Créditos </h3>
                        <div style={{paddingBottom: "20px", marginTop: "-14px"}}>
                            {renderCredits()}
                        </div>
                    </div>
                </Col>

                {/* Card com arquivos, guia do professor e como usar */}
                {/* O card exibido depende de qual é a mídia do recurso específico */}
                <Col md="7" sm="12" className="downloads-area">
                    {/* Experimentos */}
                    {
                        resource.m3_media_id === "Experimento"?
                            <DetalhesExperimento resource={resource}/>
                        :
                            null
                    }
                    {/* Vídeos */}
                    {
                        resource.m3_media_id === "Vídeo"?
                            <DetalhesVideo resource={resource}/>
                        :
                            null
                    }
                    {/* Softwares */}
                    {
                        resource.m3_media_id === "Software"?
                            <DetalhesSoftware resource={resource}/>
                        :
                            null
                    }
                    {/* Áudios */}
                    {
                        resource.m3_media_id === "Áudio"?
                            <DetalhesAudio resource={resource}/>
                        :
                            null
                    }

                    {/* Botão de compartilhamento do twitter */}
                    <div className="centerContent" style={{paddingTop: "40px"}}>
                        <div className="selfCenter">
                            <TwitterShareButton url={`https://m3.ime.unicamp.br/recursos/${resource.id}`} options={{
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

const DetalhesExperimento = ({resource}) => {
    return(
        <>
            <h3 style={{paddingTop: "20px"}}> Sinopse </h3>
            <p> {resource.synopsis} </p>

            <h3 style={{paddingTop: "40px"}}> Roteiro do Experimento </h3>
            <p> 
                Duas versões. A primeira, adequada para impressão caseira.
                <br/>
                A segunda, para visualização em tela.
                <br/>
                — <a href="null" target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para impressão </a>
                <br/>
                — <a href="null" target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para tela </a>
            </p>

            <h3 style={{paddingTop: "40px"}}> Guia do professor </h3>
            <p> 
                Duas versões. A primeira, adequada para impressão caseira.
                <br/>
                A segunda, para visualização em tela.
                <br/>
                — <a href="null" target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para impressão </a>
                <br/>
                — <a href="null" target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para tela </a>
            </p>

            <h3 style={{paddingTop: "40px"}}> Folha do aluno </h3>
            <p> 
                Apenas uma versão, que deve ser impressa, fotocopiada e distribuída aos alunos, mas que pode também ser visualizada em tela.
                <br/>
                — <a href="null" target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para impressão </a>
            </p>
        </>
    )
}

const DetalhesVideo = ({resource}) => {
    return(
        <>
            <div class="iframe-container">
                <iframe 
                    width="560" 
                    height="315" 
                    src={`https://www.youtube.com/embed/${resource.youtube_link}`}
                    frameborder="0" 
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>

            <h3 style={{paddingTop: "40px"}}> Sinopse </h3>
            <p> {resource.synopsis} </p>

            <h3 style={{paddingTop: "40px"}}> Vídeo </h3>
            <p> 
                — <a href="null" target="_blank" rel="noopener noreferrer" className= "downloads"> Vídeo completo </a>
            </p>

            <h3 style={{paddingTop: "40px"}}> Guia do professor </h3>
            <p> 
                Apenas uma versão para visualização em tela.
                <br/>
                — <a href="null" target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para tela </a>
            </p>
        </>
    )
}

const DetalhesSoftware = ({resource}) => {
    return(
        <>
            <a href={`https://m3.ime.unicamp.br/media/software/${resource.id}/`} target="_blank" rel="noopener noreferrer">
                <Button className="button" style={{paddingTop: "20px"}}> 
                    <p> USAR NA INTERNET </p> 
                </Button>
            </a>
            <p style={{paddingTop: "10px"}}>
                Clique acima para entrar no software agora mesmo.
            </p>

            <h3 style={{paddingTop: "40px"}}> Sinopse </h3>
            <p> {resource.synopsis} </p>

            <h3 style={{paddingTop: "40px"}}> Guia do professor </h3>
            <p> 
                Duas versões. A primeira, adequada para impressão caseira.
                <br/>
                A segunda, para visualização em tela.
                <br/>
                — <a href="null" target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para impressão </a>
                <br/>
                — <a href="null" target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para tela </a>
            </p>
        </>
    )
}

const DetalhesAudio = ({resource}) => {
    return(
        <>  
            <h6> Primeiro módulo </h6>
            <audio controls style={{paddingTop: "10px"}}>
                <source src="horse.mp3" type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>

            <h6 style={{paddingTop: "20px"}}> Segundo módulo </h6>
            <audio controls style={{paddingTop: "10px"}}>
                <source src="horse.mp3" type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>

            <h3 style={{paddingTop: "40px"}}> Sinopse </h3>
            <p> {resource.synopsis} </p>

            <h3 style={{paddingTop: "40px"}}> Áudios </h3>
            <p> 
                — <a href="null" target="_blank" rel="noopener noreferrer" className= "downloads"> Primeiro módulo </a>
                <br/>
                — <a href="null" target="_blank" rel="noopener noreferrer" className= "downloads"> Segundo módulo </a>
            </p>

            <h3 style={{paddingTop: "40px"}}> Guia do professor </h3>
            <p> 
                Apenas uma versão para visualização em tela
                <br/>
                — <a href="null" target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para tela </a>
            </p>
        </>
    )
}

export default DetalhesRecurso