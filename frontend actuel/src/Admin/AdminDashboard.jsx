import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminRoutes from '../../Routes/AdminRoutes';
import DrawerList from '../components/DrawerList';
import { Box, CssBaseline, Drawer, Toolbar, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const drawerWidth = 240;

const AdminDashboard = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <DrawerList />
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Routes>
                    <Route path="/*" element={<AdminRoutes />} />
                </Routes>
            </Box>
        </Box>
    );
};

export default AdminDashboard;
