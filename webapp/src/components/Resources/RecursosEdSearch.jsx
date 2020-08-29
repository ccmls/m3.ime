import React, {useState} from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import search from '../../assets/icons - Home/search.svg'

function RecursosEdSearch({setSearchValue}) {

    // State para controlar a busca
    const [searchText, setSearchText] = useState("")

    // Função para que a busca seja feita tanto apertando o botão quanto dando 'enter'no teclado
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            setSearchValue(searchText)
        }
    }

    return (
        <>  
            <InputGroup>
                <Input className="home-input" placeholder="Procure algum termo (tema, conteúdo, etc.)" onChange={(event) => setSearchText(event.target.value)} onKeyPress={event => handleKeyDown(event)}/>
                <InputGroupAddon addonType="append">
                    <Button className="button" onClick={() => setSearchValue(searchText)}>
                        <img src={search} alt="search" className="search-icon"/>
                    </Button>
                </InputGroupAddon>
            </InputGroup>
        </>
    )
}

export default RecursosEdSearch