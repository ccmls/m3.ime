import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { useHistory, useLocation } from "react-router-dom";
import './Header.css';
import { useEffect } from 'react';

function HeaderMobile() {

    // O history funciona como uma pilha para armazenar as rotas
    const history = useHistory();
    const location = useLocation();


    // State para controlar os botões de collapse:
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        setIsOpen(false);
    }, [location.search])

    return(
        <div>
            <Navbar fixed="top" dark expand="lg">
                <NavbarBrand href="/" className="header-dropdown-toggle-mobile">MATEMÁTICA MULTIMÍDIA</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {/* Início */}
                        <NavItem>
                            <NavLink href="/" className="header-dropdown-toggle-mobile">Início</NavLink>
                        </NavItem>

                        {/* Botão dropdown com as Mídias */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="header-dropdown-toggle-mobile">
                                Mídias
                            </DropdownToggle>
                            <DropdownMenu right className="header-dropdown-menu header-dropdown-menu-mobile">
                                <DropdownItem onClick={() => history.push("/recursos?filter=experimentos")}> Experimentos </DropdownItem> 
                                <DropdownItem onClick={() => history.push("/recursos?filter=videos")}> Vídeos </DropdownItem>
                                <DropdownItem onClick={() => history.push("/recursos?filter=softwares")}> Softwares </DropdownItem> 
                                <DropdownItem onClick={() => history.push("/recursos?filter=audios")}> Áudios </DropdownItem> 
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        {/* Botão dropdown com os conteúdos de Análise de Dados e Probabilidade */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="header-dropdown-toggle-mobile">
                                Análise de dados e probabilidade
                            </DropdownToggle>
                            <DropdownMenu right className="header-dropdown-menu header-dropdown-menu-mobile">
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
                        </UncontrolledDropdown>

                        {/* Botão dropdown com os conteúdos de Geometria e Medidas */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="header-dropdown-toggle-mobile">
                                Geometria e medidas
                            </DropdownToggle>
                            <DropdownMenu right  className="header-dropdown-menu header-dropdown-menu-mobile">
                                <DropdownItem onClick={() => history.push("/recursos?filter=geometriaPlana")}> Geometria Plana </DropdownItem> 
                                <DropdownItem onClick={() => history.push("/recursos?filter=trigonometria")}> Trigonometria </DropdownItem>
                                <DropdownItem onClick={() => history.push("/recursos?filter=geometriaEspacial")}> Geometria Espacial </DropdownItem> 
                                <DropdownItem onClick={() => history.push("/recursos?filter=geometriaAnalitica")}> Geometria Analítica </DropdownItem> 
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        {/* Botão dropdown com os conteúdos de Números e Funções */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="header-dropdown-toggle-mobile">
                                Números e funções
                            </DropdownToggle>
                            <DropdownMenu right className="header-dropdown-menu header-dropdown-menu-mobile">
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
                        </UncontrolledDropdown>

                        {/* Links Extras */}
                        <NavItem>
                            <NavLink href="/principal/justificativa" className="header-dropdown-toggle-mobile">Justificativa Pedagógica</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/principal/colaboradores" className="header-dropdown-toggle-mobile">Colaboradores</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/principal/historico" className="header-dropdown-toggle-mobile">Histórico</NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default HeaderMobile