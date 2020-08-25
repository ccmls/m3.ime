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
import './Header.css';

function HeaderMobile() {

    // State para controlar os botões de collapse:
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
                                <DropdownItem> Experimentos </DropdownItem> 
                                <DropdownItem> Vídeos </DropdownItem>
                                <DropdownItem> Softwares </DropdownItem> 
                                <DropdownItem> Áudios </DropdownItem> 
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        {/* Botão dropdown com os conteúdos de Análise de Dados e Probabilidade */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="header-dropdown-toggle-mobile">
                                Análise de dados e probabilidade
                            </DropdownToggle>
                            <DropdownMenu right className="header-dropdown-menu header-dropdown-menu-mobile">
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
                        </UncontrolledDropdown>

                        {/* Botão dropdown com os conteúdos de Geometria e Medidas */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="header-dropdown-toggle-mobile">
                                Geometria e medidas
                            </DropdownToggle>
                            <DropdownMenu right  className="header-dropdown-menu header-dropdown-menu-mobile">
                                <DropdownItem> Geometria Plana </DropdownItem> 
                                <DropdownItem> Trigonometria </DropdownItem>
                                <DropdownItem> Geometria Espacial </DropdownItem> 
                                <DropdownItem> Geometria Analítica </DropdownItem> 
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        {/* Botão dropdown com os conteúdos de Números e Funções */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="header-dropdown-toggle-mobile">
                                Números e funções
                            </DropdownToggle>
                            <DropdownMenu right className="header-dropdown-menu header-dropdown-menu-mobile">
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