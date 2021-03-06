import React from 'react';
import './App.css';
import Main from "./pages/Main";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <>
                <Switch>
                    <Route path="/" component={Main} exact/>
                    <Route path="/about" component={About} exact/>
                    <Redirect to="/"/>
                </Switch>
            </>
        </BrowserRouter>
    );
}

export default App;
