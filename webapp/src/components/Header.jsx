import React, { useState } from 'react';
import './Header.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import classNames from 'classnames';

function Header() {

    const [midiaDropdownOpen, setMidiaDropdownOpen] = useState(false);
    const [probDropdownOpen, setProbDropdownOpen] = useState(false);
    const [geoDropdownOpen, setGeoDropdownOpen] = useState(false);
    const [numDropdownOpen, setNumDropdownOpen] = useState(false);

    return(
        <div className="header">
            <ul>
                <li className="header-dropdown-toggle"> Início </li>
                <li>
                    {/* Botão dropdown com as Mídias */}
                    <Dropdown
                        onMouseOver={() => setMidiaDropdownOpen(true)} 
                        onMouseLeave={() => setMidiaDropdownOpen(false)} 
                        isOpen={midiaDropdownOpen} 
                        toggle={() => setMidiaDropdownOpen(!midiaDropdownOpen)}
                    >
                        <DropdownToggle className={classNames("header-dropdown-toggle", midiaDropdownOpen? "dropdownOpen":"")}> 
                            Mídias
                        </DropdownToggle>
                        <DropdownMenu className="header-dropdown-menu">
                            <DropdownItem> Experimentos </DropdownItem> 
                            <DropdownItem> Vídeos </DropdownItem>
                            <DropdownItem> Softwares </DropdownItem> 
                            <DropdownItem> Áudios </DropdownItem> 
                        </DropdownMenu>
                    </Dropdown>
                </li>
                <li>
                    {/* Botão dropdown com os conteúdos de Análise de Dados e Probabilidade */}
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
                            <DropdownItem> Arranjo, Permutação e Combinação </DropdownItem> 
                            <DropdownItem> Combinações cíclicas e com simetrias </DropdownItem>
                            <DropdownItem> Binômio de Newton e Triângulo de Pascal </DropdownItem> 
                            <DropdownItem> Grafos </DropdownItem> 
                            <DropdownItem> Probabilidade </DropdownItem> 
                            <DropdownItem> Estatística </DropdownItem> 
                            <DropdownItem> Interpretação de gráficos e dados </DropdownItem> 
                            <DropdownItem> Planejamento de Experimentos </DropdownItem> 
                            <DropdownItem> Elementos de Amostragem </DropdownItem> 
                        </DropdownMenu>
                    </Dropdown>
                </li> 
                <li>
                    {/* Botão dropdown com os conteúdos de Geometria e Medidas */}
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
                            <DropdownItem> Geometria Plana </DropdownItem> 
                            <DropdownItem> Trigonometria </DropdownItem>
                            <DropdownItem> Geometria Espacial </DropdownItem> 
                            <DropdownItem> Geometria Analítica </DropdownItem> 
                        </DropdownMenu>
                    </Dropdown>
                </li>  
                <li> 
                    {/* Botão dropdown com os conteúdos de Números e Funções */}
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
                            <DropdownItem> Conjuntos, Lógica e Números </DropdownItem> 
                            <DropdownItem> Relações e Funções </DropdownItem>
                            <DropdownItem> Razão e Proporção </DropdownItem> 
                            <DropdownItem> Função Afim </DropdownItem> 
                            <DropdownItem> Função Quadrática </DropdownItem> 
                            <DropdownItem> Função Exponencial </DropdownItem> 
                            <DropdownItem> Função Logaritmo </DropdownItem> 
                            <DropdownItem> Sequências </DropdownItem> 
                            <DropdownItem> Funções trigonométricas </DropdownItem> 
                            <DropdownItem> Sistemas Lineares </DropdownItem> 
                            <DropdownItem> Matrizes </DropdownItem> 
                            <DropdownItem> Polinômios e Números Complexos </DropdownItem> 
                            <DropdownItem> Matemática Financeira </DropdownItem> 
                        </DropdownMenu>
                    </Dropdown>
                </li>
            </ul>
        </div>
    )
}

export default Header