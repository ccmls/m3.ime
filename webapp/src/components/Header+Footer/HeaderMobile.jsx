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
} from 'reactstrap';
import { useHistory, useLocation } from "react-router-dom";
import './Header.css';
import { useEffect } from 'react';
// IMAGEM:
import logom3mobile from '../../assets/logo-m3-mobile.png';

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
            <Navbar fixed="top" dark expand={false}>
                <NavbarBrand href="/" className="header-dropdown-toggle-mobile">
                    <img src={logom3mobile} alt="m3" style={{height: "30px", width: "auto", paddingRight: "15px"}}/>
                    MATEMÁTICA MULTIMÍDIA
                </NavbarBrand>
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

                        {/* Botão dropdown com os conteúdos de Números e Funções */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="header-dropdown-toggle-mobile">
                                Números e funções
                            </DropdownToggle>
                            <DropdownMenu right className="header-dropdown-menu header-dropdown-menu-mobile">
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
                        </UncontrolledDropdown>

                        {/* Botão dropdown com os conteúdos de Geometria e Medidas */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="header-dropdown-toggle-mobile">
                                Geometria e medidas
                            </DropdownToggle>
                            <DropdownMenu right  className="header-dropdown-menu header-dropdown-menu-mobile">
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
                        </UncontrolledDropdown>

                        {/* Botão dropdown com os conteúdos de Análise de Dados e Probabilidade */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="header-dropdown-toggle-mobile">
                                Análise de dados e probabilidade
                            </DropdownToggle>
                            <DropdownMenu right className="header-dropdown-menu header-dropdown-menu-mobile">
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
                        </UncontrolledDropdown>

                        {/* Botão dropdown com as Tópicos Avançados e Temas Transversais */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="header-dropdown-toggle-mobile">
                                Tópicos Avançados e Temas Transversais
                            </DropdownToggle>
                            <DropdownMenu right className="header-dropdown-menu header-dropdown-menu-mobile">
                                <DropdownItem onClick={() => history.push("/recursos?filter=grafos")}> Grafos </DropdownItem> 
                                <DropdownItem onClick={() => history.push("/recursos?filter=criptografia")}> Criptografia </DropdownItem>
                                <DropdownItem onClick={() => history.push("/recursos?filter=numerosComplexos")}> Números Complexos </DropdownItem>
                                <DropdownItem onClick={() => history.push("/recursos?filter=conicas")}> Cônicas </DropdownItem>
                                <DropdownItem onClick={() => history.push("/recursos?filter=historiaDaMatematica")}> História da Matemática </DropdownItem> 
                                <DropdownItem onClick={() => history.push("/recursos?filter=outros")}> Números Outros </DropdownItem>  
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