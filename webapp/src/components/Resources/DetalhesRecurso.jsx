import React from 'react';
import './Recursos.css';
import { Container, Row, Col, Button, UncontrolledTooltip } from 'reactstrap';
import { useHistory, useParams } from 'react-router-dom';
import RecursosEdSearch from './RecursosEdSearch';
// React Twitter Embed:
// https://www.npmjs.com/package/react-twitter-embed
import { TwitterShareButton } from 'react-twitter-embed';
// XML
import m3_resources from '../../xml/m3_resources.js'
import files from '../../xml/files.js'
// IMAGENS:
import iconExperimentos from '../../assets/icons - Home/icon-experimentos.png';
import iconVideos from '../../assets/icons - Home/icon-videos.png';
import iconSoftwares from '../../assets/icons - Home/icon-softwares.png';
import iconAudios from '../../assets/icons - Home/icon-audios.png';

function DetalhesRecurso() {

    // O history funciona como uma pilha para armazenar as rotas e o params contém o id informado na rota atual
    const history = useHistory();
    const {idRecurso} = useParams();


    // INFORMAÇÕES SOBRE O RECURSO:
    // Parser
    const parser = new DOMParser();
    const parsedResources = parser.parseFromString(m3_resources,"text/xml");
    const parsedFiles = parser.parseFromString(files,"text/xml");

    // Array com todos os recursos
    const rawResourcesArray = [...parsedResources.getElementsByTagName("m3_resource")];
    const resourcesArray = rawResourcesArray.map(rawResource => ({
        id: rawResource.childNodes[1].textContent,
        media: rawResource.childNodes[3].textContent,
        serie: rawResource.childNodes[5].textContent,
        title: rawResource.childNodes[7].textContent,
        duration: rawResource.childNodes[9].textContent,
        synopsis: rawResource.childNodes[11].textContent,
        objectives: rawResource.childNodes[13].textContent,
        youtube_link: rawResource.childNodes[15].textContent,
        authors: rawResource.childNodes[17].textContent,
        tags: rawResource.childNodes[19].textContent,
        theme: rawResource.childNodes[21].textContent,
    }));

    // Array com todos os arquivos para download
    const rawFilesArray = [...parsedFiles.getElementsByTagName("file")];

    const filesArray = rawFilesArray.map(rawFile => ({
        id_resource: rawFile.childNodes[1].textContent,
        id_file: rawFile.childNodes[3].textContent,
        type: rawFile.childNodes[5].textContent,
        dirname: rawFile.childNodes[7].textContent,
        basename: rawFile.childNodes[9].textContent,
    }))


    // Objeto do recurso específico com todas as suas informações
    const resource = resourcesArray.find(resource => resource.id === idRecurso);


    // Array de objetos do recurso específico com todos os seus arquivos
    const resourceFiles = filesArray.filter(file => file.id_resource === idRecurso);

    
    // Função para diagramar os créditos no card
    function renderCredits() {
        const arrayCredits = resource.authors.split('\n').join(' ').split(' ');
        let title = false;
        let names = "";
        let namesAux = "";
        if (arrayCredits.includes("h2.")) {
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
                        <div key={element+index}>
                            <p> {namesAux} </p>
                            <h6 style={{paddingLeft: "20px", paddingTop: "15px"}}>{element}</h6>
                        </div>
                    )
                }
                else if (element[0] === "*") {
                    namesAux = names;
                    names = "";
                    return (
                        <div key={element+index}>
                            <p> {namesAux} </p>
                            <p style={{textTransform: "uppercase", paddingTop: "8px", marginBottom: "-8px !important"}}> {element.replaceAll("*", "")} </p>
                        </div>
                    )
                }
                else if (index === arrayCredits.length - 1) {
                    return <p key={element+index}> {names} </p>
                }
                else {
                    names = names.concat(" " + element);
                    return null;
                }
            }
            )
        } else {
            return <p style={{paddingTop: "15px"}}> {resource.authors} </p>
        }

        
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
                    <h1> {resource.title} </h1>
                    <div  md="10" sm="12" style={{marginTop: "10px"}}>
                        {
                            // Lembrar que dei replace no banco de <m3_serie_id></m3_serie_id> para <m3_serie_id>null</m3_serie_id>
                            resource.serie === "null"?
                                <p> 
                                    <span style={{color: "#ee2d32", textTransform: "uppercase"}} > {resource.theme}  </span>
                                </p>
                            :
                                <p> 
                                    <span style={{color: "#ee2d32", textTransform: "uppercase"}} > {resource.theme}  </span>
                                    <span> • Série: {resource.serie} </span> 
                                </p>
                        }
                    </div>
                </Col>

                <Col md="2" sm="12" className= "resources-col icon-alignment">
                    {/* Experimentos */}
                    {
                        resource.media === "Experimento"?
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
                        resource.media === "Vídeo"?
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
                        resource.media === "Software"?
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
                        resource.media === "Áudio"?
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

                {/* Card de duração, objetivos, conteúdos e créditos */}
                <Col md="5" sm="12" className= "home-col">
                    <div className="details-card">
                        <h3> Objetivos </h3>
                        <ol style={{margin: "0px"}}>
                            {resource.objectives.split(';').map((element, index) => 
                                {
                                    if (index !== resource.objectives.split(';').length - 1) {
                                        return <p key={element} style={{paddingLeft: "0px"}}><li>{element};</li></p>
                                    } else {
                                        return <p key={element} style={{paddingLeft: "0px"}}><li>{element}</li></p>
                                    }
                                }
                            )}
                        </ol>
                        
                        <h3> Conteúdos </h3>
                        <ul style={{margin: "0px"}}>
                            {resource.tags.split(';').map((element, index) => 
                                {
                                    if (index !== resource.tags.split(';').length - 1) {
                                        return <p key={element} style={{paddingLeft: "0px"}}><li>{element.toLowerCase()};</li></p>
                                    } else {
                                        return <p key={element} style={{paddingLeft: "0px"}}><li>{element.toLowerCase()}.</li></p>
                                    }
                                }
                            )}
                        </ul>

                        <h3> Duração </h3>
                        <p> {resource.duration} </p>
                    
                        <h3> Créditos </h3>
                        <div style={{paddingBottom: "20px", marginTop: "-14px"}}>
                            {renderCredits()}
                        </div>
                    </div>
                </Col>

                {/* Card com sinopse, arquivos e guia do professor */}
                {/* O card exibido depende de qual é a mídia do recurso específico */}
                <Col md="7" sm="12" className="downloads-area">
                    {/* Experimentos */}
                    {
                        resource.media === "Experimento"?
                            <DetalhesExperimento resource={resource} resourceFiles={resourceFiles}/>
                        :
                            null
                    }
                    {/* Vídeos */}
                    {
                        resource.media === "Vídeo"?
                            <DetalhesVideo resource={resource} resourceFiles={resourceFiles}/>
                        :
                            null
                    }
                    {/* Softwares */}
                    {
                        resource.media === "Software"?
                            <DetalhesSoftware resource={resource} resourceFiles={resourceFiles}/>
                        :
                            null
                    }
                    {/* Áudios */}
                    {
                        resource.media === "Áudio"?
                            <DetalhesAudio resource={resource}  resourceFiles={resourceFiles}/>
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

const DetalhesExperimento = ({resource, resourceFiles}) => {

    const dirnameType1 = resourceFiles.find(file => file.type === "1").dirname;
    const basenameType1 = resourceFiles.find(file => file.type === "1").basename;

    const dirnameType2 = resourceFiles.find(file => file.type === "2").dirname;
    const basenameType2 = resourceFiles.find(file => file.type === "2").basename;

    const dirnameType3 = resourceFiles.find(file => file.type === "3").dirname;
    const basenameType3 = resourceFiles.find(file => file.type === "3").basename;

    const dirnameType4 = resourceFiles.find(file => file.type === "4").dirname;
    const basenameType4 = resourceFiles.find(file => file.type === "4").basename;

    const dirnameType5 = resourceFiles.find(file => file.type === "5").dirname;
    const basenameType5 = resourceFiles.find(file => file.type === "5").basename;

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
                — <a href={`https://m3.ime.unicamp.br/${dirnameType1}/${basenameType1}`} target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para impressão </a>
                <br/>
                — <a href={`https://m3.ime.unicamp.br/${dirnameType2}/${basenameType2}`} target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para tela </a>
            </p>

            <h3 style={{paddingTop: "40px"}}> Guia do professor </h3>
            <p> 
                Duas versões. A primeira, adequada para impressão caseira.
                <br/>
                A segunda, para visualização em tela.
                <br/>
                — <a href={`https://m3.ime.unicamp.br/${dirnameType3}/${basenameType3}`} target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para impressão </a>
                <br/>
                — <a href={`https://m3.ime.unicamp.br/${dirnameType4}/${basenameType4}`} target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para tela </a>
            </p>

            <h3 style={{paddingTop: "40px"}}> Folha do aluno </h3>
            <p> 
                Apenas uma versão, que deve ser impressa, fotocopiada e distribuída aos alunos, mas que pode também ser visualizada em tela.
                <br/>
                — <a href={`https://m3.ime.unicamp.br/${dirnameType5}/${basenameType5}`} target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para impressão </a>
            </p>
        </>
    )
}

const DetalhesVideo = ({resource, resourceFiles}) => {

    const dirnameType6 = resourceFiles.find(file => file.type === "6").dirname;
    const basenameType6 = resourceFiles.find(file => file.type === "6").basename;

    const dirnameType7 = resourceFiles.find(file => file.type === "7").dirname;
    const basenameType7 = resourceFiles.find(file => file.type === "7").basename;

    return(
        <>
            <div className="iframe-container">
                <iframe
                    title={`https://www.youtube.com/embed/${resource.youtube_link}`}
                    width="560" 
                    height="315" 
                    src={`https://www.youtube.com/embed/${resource.youtube_link}`}
                    frameBorder="0" 
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
            </div>

            <h3 style={{paddingTop: "40px"}}> Sinopse </h3>
            <p> {resource.synopsis} </p>

            <h3 style={{paddingTop: "40px"}}> Vídeo </h3>
            <p> 
                — <a href={`https://m3.ime.unicamp.br/${dirnameType6}/${basenameType6}`} target="_blank" rel="noopener noreferrer" className= "downloads"> Baixar vídeo completo </a>
            </p>

            <h3 style={{paddingTop: "40px"}}> Guia do professor </h3>
            <p> 
                — <a href={`https://m3.ime.unicamp.br/${dirnameType7}/${basenameType7}`} target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para tela </a>
            </p>
        </>
    )
}

const DetalhesSoftware = ({resource, resourceFiles}) => {
    return(
        <>
            <a href={`https://m3.ime.unicamp.br/media/software/${resource.id}/`} target="_blank" rel="noopener noreferrer">
                <Button className="button" style={{paddingTop: "20px"}}> 
                    <p> ACESSAR O SOFTWARE </p> 
                </Button>
            </a>

            <h3 style={{paddingTop: "40px"}}> Sinopse </h3>
            <p> {resource.synopsis} </p>

            <h3 style={{paddingTop: "40px"}}> Guia do professor </h3>
            <p> 
                Duas versões. A primeira, adequada para impressão caseira.
                <br/>
                A segunda, para visualização em tela.
                <br/>
                — <a href={`https://m3.ime.unicamp.br/${resource.id}/guia/impressao.pdf`} target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para impressão </a>
                <br/>
                — <a href={`https://m3.ime.unicamp.br/${resource.id}/guia/tela.pdf`} target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para tela </a>
            </p>
        </>
    )
}

const DetalhesAudio = ({resource, resourceFiles}) => {

    const dirnameType7 = resourceFiles.find(file => file.type === "7").dirname;
    const basenameType7 = resourceFiles.find(file => file.type === "7").basename;

    const dirnameType8 = resourceFiles.find(file => file.type === "8").dirname;
    const basenameType8 = resourceFiles.find(file => file.type === "8").basename;

    const dirnameType9 = resourceFiles.find(file => file.type === "9").dirname;
    const basenameType9 = resourceFiles.find(file => file.type === "9").basename;

    return(
        <>  
            <h6> Primeiro módulo </h6>
            <audio controls style={{paddingTop: "10px"}}>
                <source src={`https://m3.ime.unicamp.br/${dirnameType8}/${basenameType8}`} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>

            <h6 style={{paddingTop: "20px"}}> Segundo módulo </h6>
            <audio controls style={{paddingTop: "10px"}}>
                <source src={`https://m3.ime.unicamp.br/${dirnameType9}/${basenameType9}`} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>

            <h3 style={{paddingTop: "40px"}}> Sinopse </h3>
            <p> {resource.synopsis} </p>

            <h3 style={{paddingTop: "40px"}}> Áudios </h3>
            <p> 
                — <a href={`https://m3.ime.unicamp.br/${dirnameType8}/${basenameType8}`} target="_blank" rel="noopener noreferrer" className= "downloads"> Primeiro módulo </a>
                <br/>
                — <a href={`https://m3.ime.unicamp.br/${dirnameType9}/${basenameType9}`} target="_blank" rel="noopener noreferrer" className= "downloads"> Segundo módulo </a>
            </p>

            <h3 style={{paddingTop: "40px"}}> Guia do professor </h3>
            <p> 
                — <a href={`https://m3.ime.unicamp.br/${dirnameType7}/${basenameType7}`} target="_blank" rel="noopener noreferrer" className= "downloads"> Versão para tela </a>
            </p>
        </>
    )
}

export default DetalhesRecurso