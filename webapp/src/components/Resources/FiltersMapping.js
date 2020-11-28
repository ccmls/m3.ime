export function cleanFilterText( filterText )
{
	filterText = filterText.replace(/tag:/g,'');
	filterText = filterText.replace(/media:/g,'');
	filterText = filterText.replace(/serie:/g,'');

	return filterText;
}

// Objeto com o mapeamento de filtros (associa a string da URL ao nome do filtro)
// Formato do filtro: [campo_de_busca]:[expressão] 
// Mais de um filtro pode ser separado por ","
export const filtersMapping = {
    // Mídias
    experimentos: "media:Experimento",
    videos: "media:Vídeo",
    softwares: "media:Software",
    audios: "media:Áudio",
    // Análise de Dados e Probabilidade
    representacaoEAnaliseDeDados: "tag:Representação e análise de dados",
    mediasModaEMediana: "tag:Médias, tag:moda, tag:mediana",
    desviosEVariancia: "Desvios e variância",
    planejamentoDeExperimentos: "tag:Planejamento de experimentos",
    elementosDeAmostragem: "Elementos de amostragem",
    probabilidade: "Probabilidade",
    principiosDeContagem: "contagem",
    arranjoPermutacaoECombinacao: "tag:Arranjo, tag:permutação, tag:combinação",
    binomioDeNewtonETrianguloDePascal: "tag:Binômio de Newton, tag:triângulo de Pascal",
    // Geometria e Medidas
    caracteristicasDasFigurasGeometricasPlanasEEspaciais: "tag:Características das figuras geométricas planas e espaciais",
    grandezasUnidadesDeMedidaEEscalas: "tag:Grandezas, tag:unidades de medida, tag:escalas",
    comprimentosAreasEVolumes: "tag:Comprimentos, tag:áreas, tag:volumes",
    angulos: "tag:Ângulos",
    simetriasDeFigurasPlanasOuEspaciais: "tag:Simetria",
    congruenciaESemelhancaDeTriangulos: "tag:Congruência, tag:semelhança",
    teoremaDeTales: "tag:Teorema de Tales",
    relacoesMetricasNosTriangulos: "tag:Relações métricas",
    trigonometriaDoAnguloAgudo: "tag:Trigonometria do ângulo agudo",
    geometriaEspacial: "tag:Geometria Espacial",
    geometriaAnalitica: "tag:Geometria Analítica",
    planoCartesiano: "tag:Plano cartesiano",
    retas: "tag:Retas",
    circunferencias: "tag:Circunferências",
    paralelismoEPerpendicularidade: "tag:Paralelismo, tag:perpendicularidade",
    // Números e Funções
    logicaERaciocinioLogico: "tag:Lógica",
    operacoesEmConjuntosNumericos: "tag:conjuntos numéricos",
    desigualdades: "tag:Desigualdade",
    divisibilidadeFatoracao: "tag:Divisibilidade",
    razoesEProporcoes: "tag:Razões e proporções",
    porcentagemEJuros: "tag:Porcentagem e juros",
    matematicaFinanceira: "tag:Matemática Financeira",
    relacoesDeDependenciaEntreGrandezas: "tag:dependência",
    SequenciasEProgressoes: "tag:Sequências",
    graficosEFuncoes: "tag:Gráficos",
    funcoesDo1GrauFuncoesLinearesFuncoesAfim: "tag:Funções afim",
    funcoesDo2GrauFuncoesQuadraticas: "tag:Funções quadráticas",
    polinomiosEFuncoesPolinomiais: "tag:Polinômios",
    funcoesExponenciaisELogaritmicas: "tag:Funções exponenciais e logarítmicas",
    relacoesNoCicloTrigonometricoEFuncoesTrigonometricas: "tag:ciclo trigonométrico",
    sistemasDeEquacoes: "tag:Sistemas de equações",
    matrizes: "tag:Matrizes",
    determinante: "tag:Determinante",
    // Tópicos Avançados e Temas Transversais
    grafos: "tag:Grafos",
    criptografia: "tag:Criptografia",
    numerosComplexos: "tag:Números Complexos",
    conicas: "tag:Cônicas",
    historiaDaMatematica: "tag:História da Matemática",
    outros: "tag:Outros",
	// Series
	serieMatematicaNaEscola: "serie:Matemática na Escola",
	serieAtividades: "serie:Atividades",
	serieProfissoes: "serie:Profissões",
	serieEstimativas: "serie:Estimativas",
	serieProblemasESolucoes: "serie:Problemas e Soluções",
	serieOQueE: "serie:O que é?",
	serieCultura: "serie:Cultura",
	serieCumpadis: "serie:Cumpadis",
	serieMatema: "serie:Matema",
	serieRadio: "serie:Radio"
}
