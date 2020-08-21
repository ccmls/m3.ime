import React from 'react';
import { Button } from 'reactstrap';

function Pagination() {
    return(
        <>
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