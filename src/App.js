import { BrowserRouter as Router, Link, Route, Switch, useHistory } from "react-router-dom";
import { createBrowserHistory } from 'history';

import { Container } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import { Home, Walks } from "./pages";
import { NavBar } from "./components";

export default function App() {
    return (
        <Router>
            <div>
                <NavBar />

                <Container maxWidth="lg">
                    <Switch>
                        <Route path="/passeios">
                            <Walks />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Container>
            </div>
        </Router>
    );
}
