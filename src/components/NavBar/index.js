import React from 'react';

import { useHistory } from 'react-router-dom';

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

import useStyles from './styles';

export default function NavBar() {
    const classes = useStyles();

    const history = useHistory();

    function navigateTo(path) {
        history.push(path);
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Desafio Dog Hero
                </Typography>

                <IconButton
                    color="inherit"
                    onClick={() => navigateTo('/')}
                >
                    <HomeIcon />
                </IconButton>

                <IconButton
                    color="inherit"
                    onClick={() => navigateTo('/passeios')}
                >
                    <FormatListBulletedIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}