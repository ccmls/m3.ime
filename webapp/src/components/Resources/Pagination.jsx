import React from 'react';
import { Button } from 'reactstrap';

function Pagination() {
    return(
        <>
            <p> Mostrando resultados de X a Y de um total de N, distribuídos entre W páginas. </p>
            <p> Filtranto por: Experimentos / Vídeos / Conjuntos, lógica e números / Matrizes  </p>

            <br/>

            <div style={{display: "flex", flexDirection: "row"}}>
                <Button className="button"> 
                    <p>
                        ANTERIORES
                    </p> 
                </Button>

                <Button className="button" style={{marginLeft: "auto"}}> 
                    <p>
                        PRÓXIMOS
                    </p> 
                </Button>
            </div>
        </>
    )
}

export default Pagination