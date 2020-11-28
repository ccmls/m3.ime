import React from 'react';
import { Col, Row } from 'reactstrap';
import { Collapse, CardBody, Card } from 'reactstrap';
import { filtersMapping, cleanFilterText } from './FiltersMapping';



// Componente para o collapse de filtros que aparece na página de recursos
function RecursosEdFiltros({filtrosOpen, numberOfResults, filters, URLtoggler, clearFilters}) {
	
    return (
        <>
            <Collapse isOpen={filtrosOpen} className="filter-collapse">
                <Card style={{borderColor: "#f5f5f5", backgroundColor:"#f5f5f5"}}>
                    <CardBody className="filters-card-body">

                        {/* Mídias */}
                        <Row style={{paddingRight: "25px", paddingLeft: "25px", paddingBottom: "20px"}}> 
                            <h6 style={{paddingTop: "20px"}}>MÍDIA:</h6>

                            <p style={{paddingRight: "40px", paddingLeft: "40px", paddingTop: "20px"}} onClick={() => URLtoggler("experimentos")}> {filters.includes("experimentos") ? 
                                <span style={{color: "#202020"}}> Experimentos⠀✕ </span> :'Experimentos'} 
                            </p>
                            
                            <p style={{paddingRight: "40px", paddingTop: "20px"}} onClick={() => URLtoggler("videos")}> {filters.includes("videos") ? 
                                <span style={{color: "#202020"}}> Vídeos⠀✕ </span> :'Vídeos'} 
                            </p>
                            
                            <p style={{paddingRight: "40px", paddingTop: "20px"}} onClick={() => URLtoggler("softwares")}> {filters.includes("softwares") ? 
                                <span style={{color: "#202020"}}> Softwares⠀✕ </span> :'Softwares'}
                            </p>
                            
                            <p style={{paddingTop: "20px"}} onClick={() => URLtoggler("audios")}> {filters.includes("audios") ? 
                                <span style={{color: "#202020"}}> Áudios⠀✕ </span> :'Áudios'} 
                            </p>
                        </Row>

                        <hr style={{margin:"0"}}/>

                        <Row style={{margin:"0"}}>

                            {/* Números e Funções */}
                            <Col lg="3" md="6" sm="12" style={{paddingTop: "20px"}}>
                                <Row style={{paddingRight: "10px", paddingLeft: "10px"}}> <h6>NÚMEROS E FUNÇÕES  ⠀⠀⠀⠀⠀⠀⠀⠀</h6> </Row>
                                <Row style={{paddingRight: "10px", paddingLeft: "10px"}}> 
                                    <div>
                                        <br/>
                                        <p onClick={() => URLtoggler("logicaERaciocinioLogico")}> {filters.includes("logicaERaciocinioLogico") ?
                                            <span style={{color: "#202020"}}> Lógica e raciocínio lógico⠀✕ </span> :'Lógica e raciocínio lógico'} 
                                        </p>   
                                        <br/>
                                        <p onClick={() => URLtoggler("operacoesEmConjuntosNumericos")}> {filters.includes("operacoesEmConjuntosNumericos") ?
                                            <span style={{color: "#202020"}}> Operações em conjuntos numéricos⠀✕ </span> :'Operações em conjuntos numéricos'} 
                                        </p>   
                                        <br/>
                                        <p onClick={() => URLtoggler("desigualdades")}> {filters.includes("desigualdades") ?
                                            <span style={{color: "#202020"}}> Desigualdades⠀✕ </span> :'Desigualdades'}
                                        </p> 
                                        <br/>
                                        <p onClick={() => URLtoggler("divisibilidadeFatoracao")}> {filters.includes("divisibilidadeFatoracao") ?
                                            <span style={{color: "#202020"}}> Divisibilidade, fatoração⠀✕ </span> :'Divisibilidade, fatoração'} 
                                        </p> 
                                        <br/>
                                        <p onClick={() => URLtoggler("razoesEProporcoes")}> {filters.includes("razoesEProporcoes") ?
                                            <span style={{color: "#202020"}}> Razões e proporções⠀✕ </span> :'Razões e proporções'}
                                        </p> 
                                        <br/>
                                        <p onClick={() => URLtoggler("porcentagemEJuros")}> {filters.includes("porcentagemEJuros") ?
                                            <span style={{color: "#202020"}}> Porcentagem e juros⠀✕ </span> :'Porcentagem e juros'} 
                                        </p> 
                                        <br/>
                                        <p onClick={() => URLtoggler("matematicaFinanceira")}> {filters.includes("matematicaFinanceira") ?
                                            <span style={{color: "#202020"}}> Matemática Financeira⠀✕ </span> :'Matemática Financeira'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("relacoesDeDependenciaEntreGrandezas")}> {filters.includes("relacoesDeDependenciaEntreGrandezas") ?
                                            <span style={{color: "#202020"}}> Relações de dependência entre grandezas⠀✕ </span> :'Relações de dependência entre grandezas'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("SequenciasEProgressoes")}> {filters.includes("SequenciasEProgressoes") ?
                                            <span style={{color: "#202020"}}> Sequências e progressões⠀✕ </span> :'Sequências e progressões'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("graficosEFuncoes")}> {filters.includes("graficosEFuncoes") ?
                                            <span style={{color: "#202020"}}> Gráficos e funções⠀✕ </span> :'Gráficos e funções'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("funcoesDo1GrauFuncoesLinearesFuncoesAfim")}> {filters.includes("funcoesDo1GrauFuncoesLinearesFuncoesAfim") ?
                                            <span style={{color: "#202020"}}> Funções do 1º grau / Funções lineares / Funções afim⠀✕ </span> :'Funções do 1º grau / Funções lineares / Funções afim'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("funcoesDo2GrauFuncoesQuadraticas")}> {filters.includes("funcoesDo2GrauFuncoesQuadraticas") ?
                                            <span style={{color: "#202020"}}> Funções do 2º grau / Funções quadráticas⠀✕ </span> :'Funções do 2º grau / Funções quadráticas'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("polinomiosEFuncoesPolinomiais")}> {filters.includes("polinomiosEFuncoesPolinomiais") ?
                                            <span style={{color: "#202020"}}> Polinômios e funções polinomiais⠀✕ </span> :'Polinômios e funções polinomiais'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("funcoesExponenciaisELogaritmicas")}> {filters.includes("funcoesExponenciaisELogaritmicas") ?
                                            <span style={{color: "#202020"}}> Funções exponenciais e logarítmicas⠀✕ </span> :'Funções exponenciais e logarítmicas'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("relacoesNoCicloTrigonometricoEFuncoesTrigonometricas")}> {filters.includes("relacoesNoCicloTrigonometricoEFuncoesTrigonometricas") ?
                                            <span style={{color: "#202020"}}> Relações no ciclo trigonométrico e funções trigonométricas⠀✕ </span> :'Relações no ciclo trigonométrico e funções trigonométricas'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("sistemasDeEquacoes")}> {filters.includes("sistemasDeEquacoes") ?
                                            <span style={{color: "#202020"}}> Sistemas de equações⠀✕ </span> :'Sistemas de equações'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("matrizes")}> {filters.includes("matrizes") ?
                                            <span style={{color: "#202020"}}> Matrizes⠀✕ </span> :'Matrizes'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("determinante")}> {filters.includes("determinante") ?
                                            <span style={{color: "#202020"}}> Determinante⠀✕ </span> :'Determinante'} 
                                        </p>
                                        <br/>
                                    </div>
                                </Row>
                            </Col>

                            {/* Geometria e Medidas */}
                            <Col lg="3" md="6" sm="12" style={{paddingTop: "20px"}}>
                                <Row style={{paddingRight: "10px", paddingLeft: "10px"}}> <h6>GEOMETRIA E MEDIDAS ⠀⠀⠀⠀⠀⠀⠀</h6> </Row>
                                <Row style={{paddingRight: "10px", paddingLeft: "10px"}}> 
                                    <div>
                                        <br/>
                                        <p onClick={() => URLtoggler("caracteristicasDasFigurasGeometricasPlanasEEspaciais")}> {filters.includes("caracteristicasDasFigurasGeometricasPlanasEEspaciais") ? 
                                            <span style={{color: "#202020"}}> Características das figuras geométricas planas e espaciais⠀✕ </span> :'Características das figuras geométricas planas e espaciais'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("grandezasUnidadesDeMedidaEEscalas")}> {filters.includes("grandezasUnidadesDeMedidaEEscalas") ? 
                                            <span style={{color: "#202020"}}> Grandezas, unidades de medida e escalas⠀✕ </span> :'Grandezas, unidades de medida e escalas'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("comprimentosAreasEVolumes")}> {filters.includes("comprimentosAreasEVolumes") ? 
                                            <span style={{color: "#202020"}}> Comprimentos, áreas e volumes⠀✕ </span> :'Comprimentos, áreas e volumes'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("angulos")}> {filters.includes("angulos") ?
                                            <span style={{color: "#202020"}}> Ângulos⠀✕ </span> :'Ângulos'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("simetriasDeFigurasPlanasOuEspaciais")}> {filters.includes("simetriasDeFigurasPlanasOuEspaciais") ? 
                                            <span style={{color: "#202020"}}> Simetrias de figuras planas ou espaciais⠀✕ </span> :'Simetrias de figuras planas ou espaciais'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("congruenciaESemelhancaDeTriangulos")}> {filters.includes("congruenciaESemelhancaDeTriangulos") ? 
                                            <span style={{color: "#202020"}}> Congruência e semelhança de triângulos⠀✕ </span> :'Congruência e semelhança de triângulos'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("relacoesMetricasNosTriangulos")}> {filters.includes("relacoesMetricasNosTriangulos") ? 
                                            <span style={{color: "#202020"}}> Relações métricas nos triângulos⠀✕ </span> :'Relações métricas nos triângulos'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("trigonometriaDoAnguloAgudo")}> {filters.includes("trigonometriaDoAnguloAgudo") ? 
                                            <span style={{color: "#202020"}}> Trigonometria do ângulo agudo⠀✕ </span> :'Trigonometria do ângulo agudo'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("geometriaEspacial")}> {filters.includes("geometriaEspacial") ? 
                                            <span style={{color: "#202020"}}> Geometria Espacial⠀✕ </span> :'Geometria Espacial'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("geometriaAnalitica")}> {filters.includes("geometriaAnalitica") ?
                                            <span style={{color: "#202020"}}> Geometria Analítica⠀✕ </span> :'Geometria Analítica'} 
                                        </p> 
                                        <br/>
                                        <p onClick={() => URLtoggler("planoCartesiano")}> {filters.includes("planoCartesiano") ? 
                                            <span style={{color: "#202020"}}> Plano cartesiano⠀✕ </span> :'Plano cartesiano'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("retas")}> {filters.includes("retas") ? 
                                            <span style={{color: "#202020"}}> Retas⠀✕ </span> :'Retas'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("circunferencias")}> {filters.includes("circunferencias") ? 
                                            <span style={{color: "#202020"}}> Circunferências⠀✕ </span> :'Circunferências'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("paralelismoEPerpendicularidade")}> {filters.includes("paralelismoEPerpendicularidade") ?
                                            <span style={{color: "#202020"}}> Paralelismo e perpendicularidade⠀✕ </span> :'Paralelismo e perpendicularidade'} 
                                        </p> 
                                        <br/>
                                    </div>
                                </Row>
                            </Col>

                            {/* Análise de Dados e Probabilidade */}
                            <Col lg="3" md="6" sm="12" style={{paddingTop: "20px"}}>
                                <Row style={{paddingRight: "10px", paddingLeft: "10px"}}> <h6>ANÁLISE DE DADOS E PROBABILIDADE</h6> </Row>
                                <Row style={{paddingRight: "10px", paddingLeft: "10px"}}> 
                                    <div>
                                        <br/>
                                        <p onClick={() => URLtoggler("representacaoEAnaliseDeDados")}> {filters.includes("representacaoEAnaliseDeDados") ? 
                                            <span style={{color: "#202020"}}> Representação e análise de dados⠀✕ </span> :'Representação e análise de dados'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("mediasModaEMediana")}> {filters.includes("mediasModaEMediana") ? 
                                            <span style={{color: "#202020"}}> Médias, moda e mediana⠀✕ </span> :'Médias, moda e mediana'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("desviosEVariancia")}> {filters.includes("desviosEVariancia") ? 
                                            <span style={{color: "#202020"}}> Desvios e variância⠀✕ </span> :'Desvios e variância'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("planejamentoDeExperimentos")}> {filters.includes("planejamentoDeExperimentos") ? 
                                            <span style={{color: "#202020"}}> Planejamento de experimentos⠀✕ </span> :'Planejamento de experimentos'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("elementosDeAmostragem")}> {filters.includes("elementosDeAmostragem") ? 
                                            <span style={{color: "#202020"}}> Elementos de amostragem⠀✕ </span> :'Elementos de amostragem'}
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("probabilidade")}> {filters.includes("probabilidade") ? 
                                            <span style={{color: "#202020"}}> Probabilidade⠀✕ </span> :'Probabilidade'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("principiosDeContagem")}> {filters.includes("principiosDeContagem") ? 
                                            <span style={{color: "#202020"}}> Princípios de contagem⠀✕ </span> :'Princípios de contagem'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("arranjoPermutacaoECombinacao")}> {filters.includes("arranjoPermutacaoECombinacao") ? 
                                            <span style={{color: "#202020"}}> Arranjo, permutação e combinação⠀✕ </span> :'Arranjo, permutação e combinação'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("binomioDeNewtonETrianguloDePascal")}> {filters.includes("binomioDeNewtonETrianguloDePascal") ? 
                                            <span style={{color: "#202020"}}> Binômio de Newton e triângulo de Pascal⠀✕ </span> :'Binômio de Newton e triângulo de Pascal'} 
                                        </p>
                                        <br/>
                                    </div>
                                </Row>
                            </Col>
                            
                            {/* Tópicos Avançados e Temas Transversais */}
                            <Col lg="3" md="6" sm="12" style={{paddingTop: "20px"}}>
                                <Row style={{paddingRight: "10px", paddingLeft: "10px"}}> <h6>TÓPICOS AVANÇADOS E TEMAS TRANSVERSAIS</h6> </Row>
                                <Row style={{paddingRight: "10px", paddingLeft: "10px"}}>
                                    <div>
                                        <br/>
                                        <p onClick={() => URLtoggler("grafos")}> {filters.includes("grafos") ? 
                                            <span style={{color: "#202020"}}> Grafos⠀✕ </span> :'Grafos'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("criptografia")}> {filters.includes("criptografia") ? 
                                            <span style={{color: "#202020"}}> Criptografia⠀✕ </span> :'Criptografia'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("numerosComplexos")}> {filters.includes("numerosComplexos") ? 
                                            <span style={{color: "#202020"}}> Números Complexos⠀✕ </span> :'Números Complexos'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("conicas")}> {filters.includes("conicas") ? 
                                            <span style={{color: "#202020"}}> Cônicas⠀✕ </span> :'Cônicas'} 
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("historiaDaMatematica")}> {filters.includes("historiaDaMatematica") ? 
                                            <span style={{color: "#202020"}}> História da Matemática⠀✕ </span> :'História da Matemática'}
                                        </p>
                                        <br/>
                                        <p onClick={() => URLtoggler("outros")}> {filters.includes("outros") ? 
                                            <span style={{color: "#202020"}}> Outros⠀✕ </span> :'Outros'} 
                                        </p>
                                        <br/>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Collapse>

            <br/>
            
            <p> Mostrando {numberOfResults} resultados. </p>
			<p>
            { /*filters? <p> Filtrando por: {filters.split(" ").map(element => filtersMapping[element]).join(" / ") } </p> : null */}
            { filters ? <span> Filtrando por: {
				filters.split(" ").map(element => ( <span key={cleanFilterText(filtersMapping[element])} > {cleanFilterText(filtersMapping[element])} 
				<span style={{cursor: "pointer"}} onClick={() => URLtoggler(element)}> ✕</span>
				&nbsp; &nbsp; </span>))
				} </span> : null }
			 { filters  ? ( filters.split(" ").length===2 ? <span> ( <span style={{cursor: "pointer", color: "red"}} onClick={() => clearFilters()}>Limpar Tudo</span> ) </span>: null) : null }
			</p>
        </>
    )
}



export default RecursosEdFiltros
