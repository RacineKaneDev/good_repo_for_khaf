import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';






const DrawerList = ({menu,menu2, toggleDrawer}) => {
  


    const location = useLocation();
    const navigate = useNavigate();

    

    const handleClick = (item)=> {
        navigate(item.path);
        if(toggleDrawer){
            toggleDrawer(false);
        }
    }
    return (
        <div className="h-full">
            <div
                className="flex flex-col  justify-between  h-full w-[300px] border-r py-5"
                
            >
                <div>
                    <div className="space-y-2">
                        {menu.map((item, index) => (
                            <div key={item.name}
                                onClick={() => handleClick(item)}
                                className="pr-9 cursor-pointer">
                                <p className={`${item.path === location.pathname ? "bg-primary-color text-white " : "text-primary-color"} flex items-center px-5 py-3 rounded-r-full`}>
                                    <ListItemIcon>{location.pathname === item.path ? item.activeIcon : item.icon}</ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-4">
                    <Divider />
                    <div className="space-y-2">
                        {menu2.map((item, index) => (
                            <div onClick={() => handleClick(item)} className="pr-9 cursor-pointer" key={item.name}>
                                <p className={`${item.path === location.pathname ? " bg-primary-color text-white " : "text-primary-color"} flex items-center px-5 py-3 rounded-r-full`}>
                                    <ListItemIcon>{location.pathname === item.path ? item.activeIcon : item.icon}</ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DrawerList