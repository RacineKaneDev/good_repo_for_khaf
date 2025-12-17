import React from 'react'
import { Avatar, Badge, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useNavigate } from 'react-router-dom';




const PreventionNavbar = () => {

   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  return (
    <div className={`z-50  px-6  flex items-center justify-between  py-2 fixed top-0 left-0 right-0 bg-white`}>
      <div className="flex items-center gap-10">
        <h1 onClick={() => navigate("/")}
          className="cursor-pointer font-bold lg:text-2xl "
        >
          NdankNdank
        </h1>
        <div className="lg:flex items-center gap-5 hidden">
          <h1 onClick={() => navigate("/prevention")} className="cursor-pointer hover:text-primary-color">Prevention</h1>
        </div>
         <div className="lg:flex items-center gap-5 hidden">
          <h1 onClick={() => navigate("/")} className="cursor-pointer hover:text-primary-color">Financement</h1>
        </div>
      </div>
      <div className="flex items-center gap-3 md:gap-6">
       

        <IconButton onClick={() => navigate("/prevention/notifications")}>
          <Badge badgeContent={3} color="secondary">
            {/* <MailIcon color="action" /> */}
            <NotificationsActiveIcon color="primary" />
          </Badge>
        </IconButton>

        
         {false ? <div className="flex gap-1 items-center">
            <h1 className="text-lg font-semibold hidden lg:block">Racine</h1>

            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar sx={{ bgcolor: "green" }}>
                R
              </Avatar>
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {/* <MenuItem onClick={handleMenuClick("/profile")}>Profile</MenuItem> */}
              <MenuItem onClick={() => {
                navigate("/prevention/MesPreventions")
                handleClose()}}>
                Mes Preventions
              </MenuItem>
      
              <MenuItem>Logout</MenuItem>
            </Menu>
          </div>
         : 
          <IconButton>
            <AccountCircleIcon sx={{ fontSize: "45px", color: "green" }} />
          </IconButton>
        }
      </div>
    </div>
  )

}

export default PreventionNavbar