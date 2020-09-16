import React, { useState, useEffect, useCallback } from 'react';
import './Recursos.css';
import { Container, Row, Col, Button, UncontrolledTooltip } from 'reactstrap';
import RecursosEdSearch from './RecursosEdSearch';
import RecursosEdFiltros from './RecursosEdFiltros';
import { filtersMapping } from './FiltersMapping';
import upArrow from '../../assets/up-arrow.svg';
import m3_resources from '../../xml/m3_resources.js'
import { useHistory, useLocation } from 'react-router-dom';
// IMAGENS:
import iconExperimentos from '../../assets/icons - Home/icon-experimentos.png';
import iconVideos from '../../assets/icons - Home/icon-videos.png';
import iconSoftwares from '../../assets/icons - Home/icon-softwares.png';
import iconAudios from '../../assets/icons - Home/icon-audios.png';

function RecursosEd() {

    // State para controlar os recursos que serão renderizados
    const [filteredResourcesArray, setFilteredResourcesArray] = useState([]);

    // State pra controlar o botão collapse dos filtros
    const [filtrosOpen, setFiltrosOpen] = useState(false);

    //State para controlar os filtros que estão sendo aplicados
    const [filters, setFilters] = useState("");

    // O history funciona como uma pilha para armazenar as rotas e o location contém as informações da rota atual
    const history = useHistory();
    const location = useLocation();
    let params = new URLSearchParams(location.search);
    let searchValue = params.get("search");
    let filterValue = params.get("filter");

    
    // Função para os filtros
    useEffect(() => {
        if (!filterValue) {
            setFilters("");
        } else {
            setFilters(filterValue);
        }
    }, [filterValue]);


    // Função para mudar a rota referente aos filtros (ele altera tudo que vem imediatamente depois de ?search=blabla&filter=)
    function URLtoggler(filter) {
        let auxFilter = "";
        if (!filterValue) {
            auxFilter = filter;
        } else if (filterValue.includes(filter)) {
            const filterValuesArray = filterValue.split(" ");
            filterValuesArray.splice(filterValuesArray.indexOf(filter), 1);
            auxFilter = filterValuesArray.join(" ");
        } else {
            auxFilter = filterValue.concat(" " + filter);
        }

        if (!auxFilter) {
            history.push(location.pathname);
        } else if (searchValue) {
            history.push(location.pathname.concat("?search=" + searchValue + "&filter=" + auxFilter));
        } else {
            history.push(location.pathname.concat("?filter=" + auxFilter));
        }
    }

    // Função para a busca e aplicação dos filtros
    useEffect(() => {
        var returnArray = resourcesArray;
        if (!searchValue) {
            searchValue = "";
        }
        searchValue.split(' ').forEach(
            function(value) {
                returnArray = returnArray.filter(element =>
                    element.media.toLowerCase().includes(value.toLowerCase()) ||
                    element.title.toLowerCase().includes(value.toLowerCase()) ||
                    element.synopsis.toLowerCase().includes(value.toLowerCase()) ||
                    element.objectives.toLowerCase().includes(value.toLowerCase()) ||
                    element.tags.toLowerCase().includes(value.toLowerCase()) ||
                    element.theme.toLowerCase().includes(value.toLowerCase()) ||
                    element.serie.toLowerCase().includes(value.toLowerCase())
                )
            }
        )
        
        if (filterValue) {
            filterValue.split(' ').forEach(
                function(value) {
                    returnArray = returnArray.filter(element => 
                        element.media.toLowerCase().includes(filtersMapping[value].toLowerCase()) ||
                        element.tags.toLowerCase().includes(filtersMapping[value].toLowerCase())
                    )
                }
            )
        }

        setFilteredResourcesArray(prevState => returnArray)
    }, [searchValue, filterValue])

 
    // Função para o botão de scroll to top
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


    // RECURSOS:
    // Parser
    const parser = new DOMParser();
    const parsedResources = parser.parseFromString(m3_resources,"text/xml");

    // Array com todos os recursos
    const rawResourcesArray = [...parsedResources.getElementsByTagName("m3_resource")];
    // console.log("Recursos", rawResourcesArray);
    const resourcesArray = rawResourcesArray.map(rawResource => ({
        id: rawResource.childNodes[1].textContent,
        media: rawResource.childNodes[3].textContent,
        serie: rawResource.childNodes[5].textContent,
        title: rawResource.childNodes[7].textContent,
        synopsis: rawResource.childNodes[11].textContent,
        objectives: rawResource.childNodes[13].textContent,
        tags: rawResource.childNodes[19].textContent,
        theme: rawResource.childNodes[21].textContent,
    }))


    // Função pra renderizar os recursos
    function renderResources(resourcesToRender) {
        // Constante com o array de cards criado
        const resources = resourcesToRender.map(resource => {
            return (
                <div className="resources-card" onClick={() => history.push(`/recursos/${resource.id}`)}>

                    <Row className= "resources-row">
                            {/* Título, tema e série */}
                            <Col md="10" sm="12" className="resources-col">
                                <h2> {resource.title} </h2>
                                <div  style={{marginTop: "10px", marginBottom: "-15px"}}>
                                    {
                                        // Lembrar que dei replace no banco de <serie></serie> para <serie>null</serie>
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
                            
                            {/* Mídia */}
                            <Col md="2" sm="12" className= "resources-col icon-alignment">
                                {/* Experimentos */}
                                {
                                    resource.media === "Experimento"?
                                        <>
                                            <img id="exp-icon" className="midia-icon" src={iconExperimentos} alt="experimentos"/>
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
                                            <img id="vid-icon" className="midia-icon" src={iconVideos} alt="videos"/>
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
                                            <img id="sof-icon" className="midia-icon" src={iconSoftwares} alt="software"/>
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
                                            <img id="aud-icon" className="midia-icon" src={iconAudios} alt="audios"/>
                                            <UncontrolledTooltip placement="bottom" target="aud-icon">
                                                Áudio
                                            </UncontrolledTooltip>
                                        </>
                                    :
                                        null
                                }
                            </Col>
                    </Row>

                    {/* Sinopse, objetivos e conteúdos */}
                    <Row className= "resources-row">
                        <Col md="5" sm="12" className= "resources-col">
                            <p> {resource.synopsis} </p>
                        </Col>

                        <Col md="4" sm="12" className= "resources-col">
                            <h6> Objetivos: </h6>
                            <ol style={{margin: "0px", paddingInlineStart: "20px"}}>
                                {resource.objectives.split(';').map((element, index) => 
                                    {
                                        if (index != resource.objectives.split(';').length - 1) {
                                            return <p><li>{element};</li></p>
                                        } else {
                                            return <p><li>{element}</li></p>
                                        }
                                    }
                                )}
                            </ol>
                        </Col>

                        <Col md="3" sm="12" className= "resources-col">
                            <h6> Conteúdos: </h6>
                            <ul style={{margin: "0px", paddingInlineStart: "20px"}}>
                            {resource.tags.split(';').map((element, index) => 
                                {
                                    if (index != resource.tags.split(';').length - 1) {
                                        return <p><li>{element};</li></p>
                                    } else {
                                        return <p><li>{element}.</li></p>
                                    }
                                }
                            )}
                        </ul>
                        </Col>
                    </Row>
                </div>
            )
        })
        return resources
    }
    

    return (
        <>
            {/* Botão de scroll to top */}
            <div className="scroll-to-top-button" onClick={() => topFunction()}>
                <img src={upArrow} alt="scroll to top"/>
            </div>


            <Container className="home-container">

                {/* Busca + filtros */}
                <Row className="home-row">
                    <Col className="home-col">
                        <h2> 
                            Encontre os recursos certos para sua aula: 
                        </h2>
                    </Col>
                </Row>
                <Row className="home-row">
                    <Col className="home-col" style={{marginBottom: "5px"}}>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <Button className="button" onClick={() => setFiltrosOpen(!filtrosOpen)} style={{marginRight: "10px"}}> 
                                <p> FILTRAR </p> 
                            </Button>
                            <RecursosEdSearch setSearchValue={(value) => {
                                if (value.length === 0) {
                                    history.push(`/recursos`);
                                } else {
                                    if (filters === "") {
                                        history.push(`/recursos?search=${value}`);
                                    } else {
                                        history.push(`/recursos?search=${value}&filter=${filters}`)
                                    }
                                    
                                }    
                            }}/>
                        </div>
                    </Col>
                </Row>
                <Row className="home-row">
                    <Col style={{padding: "0px 47px"}}>
                        <RecursosEdFiltros filtrosOpen={filtrosOpen} numberOfResults={filteredResourcesArray.length} filters={filters} URLtoggler={URLtoggler}/>
                    </Col>
                </Row>

                {/* Cards com os recursos */}
                {renderResources(filteredResourcesArray)}

                {/* Caso a busca/filtragem não encontre resultado */}
                {(filteredResourcesArray.length === 0)?
                    <div style={{marginTop: "60px", marginBottom: "30px", marginLeft: "20px"}}>
                        <h6> A sua pesquisa não encontrou nenhum resultado. </h6>
                            <br/>
                        <p> 
                            Sugestões:
                            <br/>
                            • Certifique-se de que nenhuma palavra contém erros ortográficos.
                            <br/>
                            • Tente utilizar outras palavras-chave.
                            <br/>
                            • Tente palavras-chave mais gerais. 
                            <br/>
                        </p>
                    </div>
                    : 
                    null
                }

                <div className="divider" style={{marginTop: "30px"}}/>
            </Container>
        </>
    )
}

export default RecursosEd