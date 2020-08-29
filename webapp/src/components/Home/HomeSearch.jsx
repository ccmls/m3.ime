import React, { useState } from 'react';
import './HomeSearch.css';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';
// IMAGENS:
import search from '../../assets/icons - Home/search.svg'

function HomeSearch() {

    // State para controlar a busca
    const [searchText, setSearchText] = useState("");


    // Objeto das rotas que representa o histórico (ele funciona como uma pilha para armazenar as rotas)
    const history = useHistory()

    // Função para que a busca seja feita tanto apertando o botão quanto dando 'enter'no teclado
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            if (searchText.length === 0) {
                history.push(`/recursos`)
            } else {
                history.push(`/recursos?search=${searchText}`)
            }
        }
    }

    return (
        <>
            {/* Título */}
            <h2> 
                Encontre os recursos certos para sua aula: 
            </h2>
            
            {/* Texto */}
            <p className="home-p">
                Este é o site da coleção Matemática Multimídia, 
                um conjunto com mais de 300 recursos educacionais 
                de Matemática para o Ensino Médio.
                <br/>
                Você pode acompanhar as atualizações referentes ao portal 
                no nosso Twitter, @matematicam3. Clique ao lado para se 
                redirecionar diretamente ao nosso perfil e ficar por dentro 
                das últimas novidades!
                <br/>
                <br/>
                Para encontrar um recurso que atenda ao que você procura, use a 
                busca ao lado ou selecione uma mídia ou tema.
            </p>
            
            {/* Barra de busca */}
            <InputGroup>
                <Input className="home-input" placeholder="Procure algum termo (tema, conteúdo, etc.)" onChange={(event) => setSearchText(event.target.value)} onKeyPress={event => handleKeyDown(event)}/>
                <InputGroupAddon addonType="append">
                    <Button className="search-button" onClick={() => {
                        if (searchText.length === 0) {
                            history.push(`/recursos`)
                        } else {
                            history.push(`/recursos?search=${searchText}`)
                        }
                    }}>
                        <img src={search} alt="search" className="search-icon"/>
                    </Button>
                </InputGroupAddon>
            </InputGroup>
        </>
    )
}

export default HomeSearch