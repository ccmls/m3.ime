import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

function RecursosEdSearch() {
    return (
        <>
            <h2> 
                Encontre os recursos certos para sua aula: 
            </h2>

            <br/>
            
            <InputGroup>
                <Input className="home-input" placeholder="Procure algum termo (tema, conteúdo, etc.)"/>
                <InputGroupAddon addonType="append">
                    <Button className="button">
                        <p>PESQUISAR</p>
                    </Button>
                </InputGroupAddon>
            </InputGroup>
        </>
    )
}

export default RecursosEdSearch