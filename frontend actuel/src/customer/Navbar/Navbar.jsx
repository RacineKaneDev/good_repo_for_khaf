import React, { use, useEffect } from 'react'
import { Avatar, Badge, Button, IconButton, Menu, MenuItem } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, logout } from '../../Redux/Auth/action';

const Navbar = () => {
    const dispatch = useDispatch();
    const { user, jwt } = useSelector(state => state.auth);
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if(token) {
            dispatch(getUser(token));
        }
    }, [dispatch, jwt]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleLogout = () => {
      dispatch(logout());
      handleClose();
      navigate('/');
  }

  return (
    <div className={`z-50  px-6  flex items-center justify-between  py-2 fixed top-0 left-0 right-0 bg-white shadow-md`}>
      <div className="flex items-center gap-10">
        <h1 onClick={() => navigate("/")}
          className="cursor-pointer font-bold lg:text-2xl text-green-700"
        >
          NdankNdank
        </h1>
        <div className="lg:flex items-center gap-5 hidden">
          <h1 onClick={() => navigate("/prevention")} className="cursor-pointer hover:text-green-600">Prevention</h1>
        </div>
         <div className="lg:flex items-center gap-5 hidden">
          <h1 onClick={() => navigate("/")} className="cursor-pointer hover:text-green-600">Financement</h1>
        </div>
      </div>
      <div className="flex items-center gap-3 md:gap-6">
        <Button onClick={() => navigate('/register')} variant="outlined" color="success">
          Devenir Partenaire
        </Button>

        <IconButton onClick={() => navigate("/notifications")}>
          <Badge badgeContent={0} color="secondary">
            {/* <MailIcon color="action" /> */}
            <NotificationsActiveIcon color="success" />
          </Badge>
        </IconButton>

        
         {user ? <div className="flex gap-1 items-center">
            <h1 className="text-lg font-semibold hidden lg:block">{user.fullName}</h1>

            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar sx={{ bgcolor: "green" }}>
                {user.fullName?.[0]?.toUpperCase()}
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
                navigate("/bookings")
                handleClose()}}>
                Mes réservations
              </MenuItem>
      
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
         : 
          <IconButton onClick={()=>navigate("/login")}>
            <AccountCircleIcon sx={{ fontSize: "45px", color: "green" }} />
          </IconButton>
        }
      </div>
    </div>
  )
}

export default Navbar