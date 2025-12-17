import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { api } from '../../../config/api';

const PreventionPage = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        // Fetch all preventions/alerts for NN_admin
        // Adjust endpoint based on prevention-service logic
        api.get('/api/preventions/all') 
           .then(res => setAlerts(res.data))
           .catch(err => console.log(err));
    }, []);

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
