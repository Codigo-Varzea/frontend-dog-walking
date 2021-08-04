import { Router, Link, Route, Switch, useHistory } from "react-router-dom";
import { createBrowserHistory } from 'history';

import { makeStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

import { Home, Walks } from "./pages";

const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

export default function App() {
    const classes = useStyles();

    function navigateTo(path) {
        history.push(path);
    }

    return (
        <Router history={history}>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Desafio Dog Hero
                        </Typography>

                        <IconButton
                            edge="start"
                            className={classes.button}
                            color="inherit"
                            aria-label="menu"
                            onClick={() => navigateTo('/')}
                        >
                            <HomeIcon />
                        </IconButton>

                        <IconButton
                            edge="start"
                            className={classes.button}
                            color="inherit"
                            aria-label="menu"
                            onClick={() => navigateTo('/passeios')}
                        >
                            <FormatListBulletedIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Switch>
                    <Route path="/passeios">
                        <Walks />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
