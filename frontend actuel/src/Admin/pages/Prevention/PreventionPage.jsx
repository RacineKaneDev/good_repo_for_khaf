import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { api } from '../../../config/api';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPreventions } from '../../../Redux/Prevention/Action';

const PreventionPage = () => {
    const dispatch = useDispatch();
    const { preventions, isLoading } = useSelector(state => state.prevention);

    useEffect(() => {
        dispatch(getAllPreventions());
    }, [dispatch]);
    
    // Use Redux state preventions instead of local alerts state
    // Replace alerts.map with preventions.map in JSX below (I will use multi-replace or just rewrite the component slightly if needed, but here replace content)
    const alerts = preventions;

    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 2 }}>Tableau de bord Prévention</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {alerts.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>{row.createdAt}</TableCell>
                                <TableCell>{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default PreventionPage;
