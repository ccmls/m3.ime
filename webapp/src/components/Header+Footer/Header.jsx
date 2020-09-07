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
                            <DropdownItem onClick={() => history.push("/recursos?filter=arranjoPermutacaoECombinacao")}> Arranjo, Permutação e Combinação </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=combinacoesCiclicasEComSimetrias")}> Combinações Cíclicas e com Simetrias </DropdownItem>
                            <DropdownItem onClick={() => history.push("/recursos?filter=binomioDeNewtonETrianguloDePascal")}> Binômio de Newton e Triângulo de Pascal </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=grafos")}> Grafos </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=probabilidade")}> Probabilidade </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=estatistica")}> Estatística </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=interpretacaoDeGraficosEDados")}> Interpretação de Gráficos e Dados </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=planejamentoDeExperimentos")}> Planejamento de Experimentos </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=elementosDeAmostragem")}> Elementos de Amostragem </DropdownItem> 
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
                            <DropdownItem onClick={() => history.push("/recursos?filter=geometriaPlana")}> Geometria Plana </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=trigonometria")}> Trigonometria </DropdownItem>
                            <DropdownItem onClick={() => history.push("/recursos?filter=geometriaEspacial")}> Geometria Espacial </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=geometriaAnalitica")}> Geometria Analítica </DropdownItem> 
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
                        <DropdownMenu className="header-dropdown-menu" right>
                            <DropdownItem onClick={() => history.push("/recursos?filter=conjuntosLogicaENumeros")}> Conjuntos, Lógica e Números </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=relacoesEFuncoes")}> Relações e Funções </DropdownItem>
                            <DropdownItem onClick={() => history.push("/recursos?filter=razaoEProporcao")}> Razão e Proporção </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=funcaoAfim")}> Função Afim </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=funcaoQuadratica")}> Função Quadrática </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=funcaoExponencial")}> Função Exponencial </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=funcaoLogaritmo")}> Função Logaritmo </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=sequencias")}> Sequências </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=funcoesTrigonometricas")}> Funções Trigonométricas </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=sistemasLineares")}> Sistemas Lineares </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=matrizes")}> Matrizes </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=polinomiosENumerosComplexos")}> Polinômios e Números Complexos </DropdownItem> 
                            <DropdownItem onClick={() => history.push("/recursos?filter=matematicaFinanceira")}> Matemática Financeira </DropdownItem> 
                        </DropdownMenu>
                    </Dropdown>
                </li>
            </ul>
        </div>
    )
}

export default Header