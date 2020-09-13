import React from 'react';
import './ExtraLinks.css';
import { Container, Row, Col } from 'reactstrap';
// IMAGENS:
import iconColaboradores from '../../assets/icons - ExtraLinks/icon-colaboradores.png';

function Colaboradores() {
    return (
        <Container className="extra-links-container">
            
            {/* Título */}
            <Row className="extra-links-row">
                <h2 className="extra-links-col"> 
                    Colaboradores do projeto
                </h2>
            </Row>

            {/* Ícone e Textos */}
            <Row className="extra-links-row">
                <Col md="2" sm="12" className="extra-links-col">
                    <img src={iconColaboradores} className="extra-links-icon" alt="justificativa pedagógica"/>
                </Col>

                <Col md="10" sm="12" className="extra-links-col">
                    <p>
                        A coleção M³ foi desenvolvida por profissionais de diversas áreas, com dedicações de tempo e 
                        energia distintos, mas todos com muito entusiasmo pelas potencialidades para o ensino e a 
                        aprendizagem da Matemática do Ensino Médio no Brasil.
                        <br/>
                        <br/>
                        Podemos destacar as coordenações gerais e das mídias, a saber:
                        <br/>
                        <b>Samuel Rocha de Oliveira</b>, coordenador geral acadêmico;
                        <br/>
                        <b>Leonardo Barichello</b>, coordenador dos experimentos e softwares;
                        <br/>
                        <b>Sarah Yakhni</b>, coordenadora dos vídeos;
                        <br/>
                        <br/>
                        E como suporte para os experimentos e softwares, tivemos:
                        <br/>
                        <b>Fabrício de Paula Silva</b>;
                        <br/>
                        <b>Rita Santos Guimarães</b>;
                        <br/>
                        <b>Matias Rodrigues Costa</b>.
                        <br/>
                        <br/>
                        Mas a lista de todos os participantes do projeto segue abaixo (se você participou e não consta 
                        aqui, favor nos avisar):
                    </p>
                </Col>
            </Row>

            {/* Seção com os nomes dos colaboradores */}
            <Row className="extra-links-colab-row">

                {/* Projeto Gráfico */}
                <Col lg="2" md="6" sm="12" className="extra-links-colab-col">
                    <h6> Projeto gráfico </h6>
                    <p>
                        <br/>
                        <span style={{color: "#ee2d32"}}>CONCEPÇÃO GERAL</span>
                        <br/>
                        Samuel Oliveira
                        <br/>
                        <br/>
                        <span style={{color: "#ee2d32"}}>PROJETO ORIGINAL</span>
                        <br/>
                        <a href="http://www.preface.com.br" target="_blank" rel="noopener noreferrer"> Preface Design </a>
                        <br/>
                        <br/>
                        <span style={{color: "#ee2d32"}}>REVISÃO DE LAYOUT <br/> & CÓDIGO</span>
                        <br/>
                        <a href="https://linktr.ee/ccmls" target="_blank" rel="noopener noreferrer"> Camila Porfírio </a>
                    </p>
                </Col>

                {/* Professores da Unicamp */}
                <Col lg="3" md="6" sm="12" className="extra-links-colab-col">
                    <h6> Professores da Unicamp </h6>
                    <p>
                        <br/>com as respectivas Unidades:
                        <br/>Adolfo Maia Júnior, IMECC
                        <br/>Alberto Vazquez Saa, IMECC
                        <br/>Anamaria Gomide, IC
                        <br/>Ângela Fátima Soligo, FE
                        <br/>Antonio Carlos do Patrocínio, IMECC
                        <br/>Antonio Miguel, FE
                        <br/>Claudina Izepe Rodrigues, IMECC
                        <br/>Cristiano Torezzan, FCA
                        <br/>Dicesar Lass Fernandez, IMECC
                        <br/>Edmundo Capelas de Oliveira, IMECC
                        <br/>Eliane Quelho Frota Rezende, IMECC
                        <br/>Ernesto Kemp, IFGW
                        <br/>Fernanda M. P. Freire, IEL
                        <br/>Heloisa Vieira Rocha, NICS Joni Meyer, IMECC 
                        <br/>Jônatas Manzolli, IA 
                        <br/>José Eduardo Ribeiro De Paiva, IA 
                        <br/>José Plínio de Oliveira Santos, IMECC
                        <br/>Laura Letícia Ramos Rifo, IMECC
                        <br/>Marcelo Firer, IMECC
                        <br/>Maria Lúcia Bontorim de Queiroz, IMECC
                        <br/>Maria Zoraide Martins Costa Soares, IMECC
                        <br/>Otília T. Wiermann Paques, IMECC
                        <br/>Raul Thomáz Oliveira do Valle, IA
                        <br/>Rosa Maria Machado, COTIL
                        <br/>Samuel Rocha de Oliveira, IMECC
                        <br/>Sueli Irene Rodrigues Costa, IMECC
                    </p>
                </Col>

                {/* Estudantes Colaboradores */}
                <Col lg="3" md="6" sm="12" className="extra-links-colab-col">
                    <h6> Estudantes Colaboradores </h6>
                    <p>
                        <br/>Augusto Fidalgo Yamamoto
                        <br/>Alan Bondesan De Maria
                        <br/>Bianca Ortelã Andre Novo
                        <br/>Carolina Bonturi
                        <br/>Clenio da Silva Brandao
                        <br/>Cristiano Torezzan
                        <br/>Daniel Sarmento Abrahão
                        <br/>Daniel Schowantz Silva
                        <br/>Fabricio de Paula Silva
                        <br/>Felipe Alonso Martins
                        <br/>Felipe Mascagna Bittencourt Lima
                        <br/>Fernando Gallo
                        <br/>Fernando Martins Collaço
                        <br/>Filipe Eiji Oshiro
                        <br/>Gabriel Jube Ribeiro Queiroz
                        <br/>Gabriel Minoru Ishida
                        <br/>Guilherme Pereira Paulovic
                        <br/>Guilherme Villalba Zardetto
                        <br/>Igor Luís de Moura Sousa
                        <br/>Jean Piton Gonçalves
                        <br/>João Vitor Bota
                        <br/>João Marcelo Vieira Santa Maria
                        <br/>José Felipe Blasco
                        <br/>Kauan Pastini Paula Leite
                        <br/>Lucas Ogasawara de Oliveira
                        <br/>Lucas Vignoli Reis
                        <br/>Luís Antonio Rodrigues
                        <br/>Luiz Fernando Giolo Alves
                        <br/>Marcelo Daros Carneiro
                        <br/>Marcos Singulano Ponzoni
                        <br/>Maria Sílvia S. de Castro Henriques
                        <br/>Mariana da Rocha Correa Silva
                        <br/>Mariana Maria Rodrigues Aiub
                        <br/>Marilia Franceschinelli De Souza
                        <br/>Marina Barreto Passos
                        <br/>Mário Mitsuo Akita
                        <br/>Matheus André Coletto
                        <br/>Matias Rodrigues Costa
                        <br/>Michelly Guerra Costa
                        <br/>Newton Toshio Ouchi
                        <br/>Rafael Câmara de Almeida
                        <br/>Rafael Santos de Oliveira Alves
                        <br/>Renata Lussier Spagnol
                        <br/>Rene Moreira de Castro
                        <br/>Rodrigo Iamarino Caravita
                        <br/>Ronaldo Barbosa
                        <br/>Tânia Mara Marques
                        <br/>Thaisa Aluani
                    </p>
                </Col>

                {/* Pesquisadores e Colaboradores */}
                <Col lg="4" md="6" sm="12" className="extra-links-colab-col">
                    <h6> Pesquisadores e Colaboradores </h6>
                    <p>
                        <br/>Adriana Ramos
                        <br/>Agueda Aparecida da Cruz Borges
                        <br/>Agnaldo Monteiro Farias
                        <br/>Álvaro Bufarah Júnior
                        <br/>Álison Marcelo van-der Laan Mello
                        <br/>Ana Cecília Agua de Melo
                        <br/>Angela Annunciato
                        <br/>Antônio Carlos de Andrade Campello Jr
                        <br/>Caluã de Lacerda Pataca
                        <br/>Carlos Roberto Da Silva
                        <br/>Celi Aparecida Espasandin Lopes
                        <br/>Cleber da Silveira Campos
                        <br/>Daniel Alves Brazil
                        <br/>Deborah Martins Raphael
                        <br/>Delano Medeiros Beder
                        <br/>Douglas Mendes
                        <br/>Eduardo Colli
                        <br/>Fábio Diaz Camaneiro
                        <br/>Frederico Gualberto de Souza
                        <br/>Ernanda Mitsue Satake
                        <br/>Gustavo Henrique Torrezan
                        <br/>João Vitor Bota
                        <br/>Joice Lee Otsuka
                        <br/>Joni de Almeida Amorim
                        <br/>Júnior César Alves Soares
                        <br/>Karina Kosicki Bellotti
                        <br/>Liene Nunes Saddi
                        <br/>Lourival Pereira Martins
                        <br/>Lucas Vignoli Reis
                        <br/>Marcelo de Melo
                        <br/>Marcelo Morandi
                        <br/>Márcio Augusto Diniz
                        <br/>Márcia Maria de Faria Bechara
                        <br/>Maria Inês Sparrapan Muniz
                        <br/>Mariana da Rocha Correa Silva
                        <br/>Mariana Maria Rodrigues Aiub
                        <br/>Mariana Sacrini Ayres Ferraz
                        <br/>Marta Moraes Nehring
                        <br/>Matias Rodrigues Costa
                        <br/>Maurício Yoshikazu Sumita
                        <br/>Miriam Sampieri Santinho
                        <br/>Patrícia Manoja Roman
                        <br/>Pedro Ferraz Villela
                        <br/>Raphael de Oliveira Garcia
                        <br/>Roberto Limberger
                        <br/>Ronaldo Barbosa
                        <br/>Sheila Morais de Almeida
                        <br/>Valdemir Leal Da Rocha
                        <br/>Vanessa Silva Pereira Araújo
                        <br/>Wilson Roberto Rodrigues
                    </p>
                </Col>
            
            </Row>

            <div className="divider" style={{marginTop: "30px"}}/>

        </Container>
    )
}

export default Colaboradores