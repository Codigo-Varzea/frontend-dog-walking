import React from "react";

import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";

import { EnhancedTableHead } from "../../components";

export default function Walks() {
    const rows = [
        {
            id: 1,
            date: "21/03/2021 12:00",
            status: 'AGUARDANDO',
            pets: "Spike, Billy",
            price: 45.0,
            duration: "30 minutos",
        },
        {
            id: 2,
            date: "21/03/2021 12:00",
            pets: "Spike, Billy",
            status: 'AGUARDANDO',
            price: 45.0,
            duration: "30 minutos",
        },
        {
            id: 3,
            date: "21/03/2021 12:00",
            pets: "Spike, Billy",
            status: 'EM PASSEIO',
            price: 45.0,
            duration: "30 minutos",
        },
        {
            id: 4,
            date: "21/03/2021 12:00",
            pets: "Spike, Billy",
            status: 'FINALIZADO',
            price: 45.0,
            duration: "30 minutos",
        },
        {
            id: 5,
            date: "21/03/2021 12:00",
            pets: "Spike, Billy",
            status: 'FINALIZADO',
            price: 45.0,
            duration: "30 minutos",
        },
        {
            id: 6,
            date: "21/03/2021 12:00",
            pets: "Spike, Billy",
            status: 'AGUARDANDO',
            price: 45.0,
            duration: "30 minutos",
        },
    ];

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3">Passeios</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="body1">
                        Visualize os passeios criados para os cachorros nesta
                        página
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <TableContainer>
                        <Table
                            aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Data de Agendamento</TableCell>
                                    <TableCell align="right">Status</TableCell>
                                    <TableCell align="right">Pets</TableCell>
                                    <TableCell align="right">Preço</TableCell>
                                    <TableCell align="right">Duração</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.date}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.status}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.pets}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.price}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.duration}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    );
}
