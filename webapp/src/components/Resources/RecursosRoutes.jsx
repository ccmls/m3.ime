import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import RecursosEd from './RecursosEd';
import DetalhesRecurso from './DetalhesRecurso';

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