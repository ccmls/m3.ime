import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import RecursosEd from './RecursosEd';
import DetalhesRecurso from './DetalhesRecurso';

// Componente usado para controlar as rotas dos recursos (chamado em App.js)
function RecursosRoutes() {
    return (
        <Switch>
            <Route exact path="/recursos">
                <RecursosEd/>
            </Route>
            <Route path="/recursos/:idRecurso">
                <DetalhesRecurso/>
            </Route>
        </Switch>
    )
}

export default RecursosRoutes