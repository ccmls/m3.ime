import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useHistory } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import classNames from 'classnames';

function Header() {

    // States para controlar os botões de dropdown:
    const [midiaDropdownOpen, setMidiaDropdownOpen] = useState(false);
    const [probDropdownOpen, setProbDropdownOpen] = useState(false);
    const [geoDropdownOpen, setGeoDropdownOpen] = useState(false);
    const [numDropdownOpen, setNumDropdownOpen] = useState(false);
    const [outrosDropdownOpen, setOutrosDropdownOpen] = useState(false);


    // O history funciona como uma pilha para armazenar as rotas
    const history = useHistory();

    
    // Função para que a barra vermelha da header fique fixa na tela:
    function changeClasses() {
            if(window.scrollY > 164.8) {
                document.getElementById("red-header").classList.add("red-header-fixed");
                document.getElementById("tam-header").classList.add("show-tam-header");
            } else {
                document.getElementById("red-header").classList.remove("red-header-fixed");
                document.getElementById("tam-header").classList.remove("show-tam-header");
            }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeClasses);
        
        return () => {
            window.removeEventListener("scroll", changeClasses);
        }
    }, []);

    return(
        <div className="header" id="red-header">
            <ul>
                {/* Início */}
                <Link to="/">
                    <li className="header-dropdown-toggle"> 
                        Início 
                    </li>
                </Link>

                {/* Botão dropdown com as Mídias */}
                <li>
                    <Dropdown
                        onMouseOver={() => setMidiaDropdownOpen(true)} 
                        onMouseLeave={() => setMidiaDropdownOpen(false)} 
                        isOpen={midiaDropdownOpen} 
                        toggle={() => setMidiaDropdownOpen(!midiaDropdownOpen)}
                    >
                        <DropdownToggle 
                            className={classNames("header-dropdown-toggle", midiaDropdownOpen? "dropdownOpen":"")}> 
                            Mídias
                        </DropdownToggle>
                        <DropdownMenu className="header-dropdown-menu">
                            <DropdownItem onClick={() => history.push("/recursos?filter=experimentos")}> Experimentos </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=videos")}> Vídeos </DropdownItem>
                            <DropdownItem onClick={() => history.push("/recursos?filter=softwares")}> Softwares </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=audios")}> Áudios </DropdownItem> 
                        </DropdownMenu>
                    </Dropdown>
                </li>
                
                 {/* Botão dropdown com os conteúdos de Números e Funções */}
                <li> 
                    <Dropdown 
                        onMouseOver={() => setNumDropdownOpen(true)} 
                        onMouseLeave={() => setNumDropdownOpen(false)}
                        isOpen={numDropdownOpen} 
                        toggle={() => setNumDropdownOpen(!numDropdownOpen)}
                    >
                        <DropdownToggle className={classNames("header-dropdown-toggle", numDropdownOpen? "dropdownOpen":"")}> 
                            Números e funções
                        </DropdownToggle>
                        <DropdownMenu className="header-dropdown-menu">
                            <DropdownItem onClick={() => history.push("/recursos?filter=logicaERaciocinioLogico")}> Lógica e raciocínio lógico </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=operacoesEmConjuntosNumericos")}> Operações em conjuntos numéricos </DropdownItem>
                            <DropdownItem onClick={() => history.push("/recursos?filter=desigualdades")}> Desigualdades </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=divisibilidadeFatoracao")}> Divisibilidade, fatoração </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=razoesEProporcoes")}> Razões e proporções </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=porcentagemEJuros")}> Porcentagem e juros </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=matematicaFinanceira")}> Matemática Financeira </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=relacoesDeDependenciaEntreGrandezas")}> Relações de dependência entre grandezas </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=SequenciasEProgressoes")}> Sequências e progressões </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=graficosEFuncoes")}> Gráficos e funções </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=funcoesDo1GrauFuncoesLinearesFuncoesAfim")}> Funções do 1º grau / Funções lineares / Funções afim </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=funcoesDo2GrauFuncoesQuadraticas")}> Funções do 2º grau / Funções quadráticas </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=polinomiosEFuncoesPolinomiais")}> Polinômios e funções polinomiais </DropdownItem> 
                            
                            <DropdownItem onClick={() => history.push("/recursos?filter=funcoesExponenciaisELogaritmicas")}> Funções exponenciais e logarítmicas </DropdownItem> 
                            
                            <DropdownItem onClick={() => history.push("/recursos?filter=relacoesNoCicloTrigonometricoEFuncoesTrigonometricas")}> Relações no ciclo trigonométrico e funções trigonométricas </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=sistemasDeEquacoes")}> Sistemas de equações </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=matrizes")}> Matrizes </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=determinante")}> Determinante </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </li>
                
                {/* Botão dropdown com os conteúdos de Geometria e Medidas */}
                <li>
                    <Dropdown
                        onMouseOver={() => setGeoDropdownOpen(true)} 
                        onMouseLeave={() => setGeoDropdownOpen(false)}
                        isOpen={geoDropdownOpen} 
                        toggle={() => setGeoDropdownOpen(!geoDropdownOpen)}
                    >
                        <DropdownToggle className={classNames("header-dropdown-toggle", geoDropdownOpen? "dropdownOpen":"")}> 
                            Geometria e medidas
                        </DropdownToggle>
                        <DropdownMenu className="header-dropdown-menu">
                                <DropdownItem onClick={() => history.push("/recursos?filter=caracteristicasDasFigurasGeometricasPlanasEEspaciais")}> Características das figuras geométricas planas e espaciais </DropdownItem> 
                                <DropdownItem onClick={() => history.push("/recursos?filter=grandezasUnidadesDeMedidaEEscalas")}> Grandezas, unidades de medida e escalas </DropdownItem>
                                <DropdownItem onClick={() => history.push("/recursos?filter=comprimentosAreasEVolumes")}> Comprimentos, áreas e volumes </DropdownItem> 
                                <DropdownItem onClick={() => history.push("/recursos?filter=angulos")}> Ângulos </DropdownItem>
                                
                                <DropdownItem onClick={() => history.push("/recursos?filter=simetriasDeFigurasPlanasOuEspaciais")}> Simetrias de figuras planas ou espaciais </DropdownItem>
                                <DropdownItem onClick={() => history.push("/recursos?filter=congruenciaESemelhancaDeTriangulos")}> Congruência e semelhança de triângulos </DropdownItem> 
                                <DropdownItem onClick={() => history.push("/recursos?filter=teoremaDeTales")}> Teorema de Tales </DropdownItem>
                                <DropdownItem onClick={() => history.push("/recursos?filter=relacoesMetricasNosTriangulos")}> Relações métricas nos triângulos </DropdownItem> 
                                <DropdownItem onClick={() => history.push("/recursos?filter=trigonometriaDoAnguloAgudo")}> Trigonometria do ângulo agudo </DropdownItem>  
                                <DropdownItem onClick={() => history.push("/recursos?filter=geometriaEspacial")}> Geometria Espacial </DropdownItem> 
                                <DropdownItem onClick={() => history.push("/recursos?filter=geometriaAnalitica")}> Geometria Analítica </DropdownItem>
                                <DropdownItem onClick={() => history.push("/recursos?filter=planoCartesiano")}> Plano cartesiano </DropdownItem> 
                                <DropdownItem onClick={() => history.push("/recursos?filter=retas")}> Retas </DropdownItem>
                                <DropdownItem onClick={() => history.push("/recursos?filter=circunferencias")}> Circunferências </DropdownItem>
                                <DropdownItem onClick={() => history.push("/recursos?filter=paralelismoEPerpendicularidade")}> Paralelismo e perpendicularidade </DropdownItem> 
                        </DropdownMenu>
                    </Dropdown>
                </li>  
                
                {/* Botão dropdown com os conteúdos de Análise de Dados e Probabilidade */}
                <li>
                    <Dropdown 
                        onMouseOver={() => setProbDropdownOpen(true)} 
                        onMouseLeave={() => setProbDropdownOpen(false)}
                        isOpen={probDropdownOpen} 
                        toggle={() => setProbDropdownOpen(!probDropdownOpen)}
                    >
                        <DropdownToggle className={classNames("header-dropdown-toggle", probDropdownOpen? "dropdownOpen":"")}> 
                            Análise de dados e probabilidade
                        </DropdownToggle>
                        <DropdownMenu className="header-dropdown-menu">
                            <DropdownItem onClick={() => history.push("/recursos?filter=representacaoEAnaliseDeDados")}> Representação e análise de dados </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=mediasModaEMediana")}> Médias, moda e mediana </DropdownItem>
                            <DropdownItem onClick={() => history.push("/recursos?filter=desviosEVariancia")}> Desvios e variância </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=planejamentoDeExperimentos")}> Planejamento de experimentos </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=elementosDeAmostragem")}> Elementos de amostragem </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=probabilidade")}> Probabilidade </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=principiosDeContagem")}> Princípios de contagem </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=arranjoPermutacaoECombinacao")}> Arranjo, permutação e combinação </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=binomioDeNewtonETrianguloDePascal")}> Binômio de Newton e triângulo de Pascal </DropdownItem> 
                        </DropdownMenu>
                    </Dropdown>
                </li>

                {/* Botão dropdown com as Tópicos Avançados e Temas Transversais */}
                <li>
                    <Dropdown
                        onMouseOver={() => setOutrosDropdownOpen(true)} 
                        onMouseLeave={() => setOutrosDropdownOpen(false)} 
                        isOpen={outrosDropdownOpen} 
                        toggle={() => setOutrosDropdownOpen(!outrosDropdownOpen)}
                    >
                        <DropdownToggle 
                            className={classNames("header-dropdown-toggle", outrosDropdownOpen? "dropdownOpen":"")}> 
                            Outros
                        </DropdownToggle>
                        <DropdownMenu className="header-dropdown-menu" right>
                            <DropdownItem onClick={() => history.push("/recursos?filter=grafos")}> Grafos </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=criptografia")}> Criptografia </DropdownItem>
                            
                            <DropdownItem onClick={() => history.push("/recursos?filter=numerosComplexos")}> Números Complexos </DropdownItem>
                            <DropdownItem onClick={() => history.push("/recursos?filter=conicas")}> Cônicas </DropdownItem>
                            <DropdownItem onClick={() => history.push("/recursos?filter=historiaDaMatematica")}> História da Matemática </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=outros")}> Números Outros </DropdownItem>  
                        </DropdownMenu>
                    </Dropdown>
                </li>
            </ul>
        </div>
    )
}

export default Header
