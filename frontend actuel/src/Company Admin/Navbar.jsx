import React from 'react'
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Badge from '@mui/material/Badge';
import NotificationsActive from '@mui/icons-material/NotificationsActive';





const Navbar = ({DrawerList}) => {


   const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <div className="h-[10vh] flex items-center justify-between px-5 border-b">
      <div className="flex items-center gap-3 ">
        <IconButton onClick={() => toggleDrawer(true)} color="primary">
          <MenuIcon color="primary" />
        </IconButton>

        <h1
          onClick={() => navigate("/")}
          className="logo text-xl cursor-pointer"
        >
          NdankNdank
        </h1>
      </div>

      <IconButton onClick={() => navigate("/company-dashboard/notifications")}>
        <Badge
          color="secondary"
        >
          <NotificationsActive  color="primary" />
          <h6 className='text-xs'>financement</h6>
        </Badge>
      </IconButton>


      <IconButton onClick={() => navigate("/company-dashboard/PreventionNotifications")}>
        <Badge
          color="secondary"
        >
          <NotificationsActive color="primary" /> <h6 className='text-xs'>Prevention</h6>
        </Badge>
      </IconButton>

      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
}

export default Navbar