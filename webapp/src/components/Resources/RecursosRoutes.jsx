import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import RecursosEd from './RecursosEd';

function RecursosRoutes() {
    return (
        <Switch>
            <Route exact path="/recursos">
                <RecursosEd/>
            </Route>
            <Route path="/recursos/:idRecurso">
                <p>chamar aqui a pagina de detalhes de um recurso!!!!!!</p>
            </Route>
        </Switch>
    )
}

export default RecursosRoutes