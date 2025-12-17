import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WarningIcon from '@mui/icons-material/Warning'; // For Prevention
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { logout } from '../../Redux/Auth/Action'; // Assuming logout action exists

const DrawerList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const menu = [
        { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
        { name: "Prévention", path: "/admin/prevention", icon: <WarningIcon /> },
    ];

    return (
        <List>
            {menu.map((item, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton onClick={() => navigate(item.path)}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
}

export default DrawerList;
