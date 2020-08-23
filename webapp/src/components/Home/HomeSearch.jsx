import React from 'react';
import './HomeSearch.css';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
// IMAGENS:
import search from '../../assets/icons - Home/search.svg'

function HomeSearch() {
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
                <Input className="home-input" placeholder="Procure algum termo (tema, conteúdo, etc.)"/>
                <InputGroupAddon addonType="append">
                    <Button className="search-button">
                        <img src={search} alt="search" className="search-icon"/>
                    </Button>
                </InputGroupAddon>
            </InputGroup>
        </>
    )
}

export default HomeSearch