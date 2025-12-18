import React from 'react'
import DrawerList from '../../Company Admin/DrawerList';
import { useSelector } from 'react-redux';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddIcon from '@mui/icons-material/Add';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CategoryIcon from '@mui/icons-material/Category';
import NotificationsNoneOutlined from '@mui/icons-material/NotificationsNoneOutlined';
import AccountBox from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import WarningIcon from '@mui/icons-material/Warning';





const menu = [
  {
    name: "Dashboard",
    path: "/company-dashboard",
    icon: <DashboardIcon className="text-primary-color" />,
    activeIcon: <DashboardIcon className="text-white" />,
  },
  {
    name: "PreventionDashboard",
    path: "/company-dashboard/preventionDashboard",
    icon: <DashboardIcon className="text-primary-color" />,
    activeIcon: <DashboardIcon className="text-white" />,
  },
  {
    name: "Préventions",
    path: "/company-dashboard/preventions",
    icon: <WarningIcon className="text-primary-color" />,
    activeIcon: <WarningIcon className="text-white" />,
  },
  {
    name: "Réservations",
    path: "/company-dashboard/bookings",
    icon: <ShoppingBagIcon className="text-primary-color" />,
    activeIcon: <ShoppingBagIcon className="text-white" />,
  },
  {
    name: "Opportunités",
    path: "/company-dashboard/opportunities",
    icon: <InventoryIcon className="text-primary-color" />,
    activeIcon: <InventoryIcon className="text-white" />,
  },
  {
    name: "Ajouter Opportunité",
    path: "/company-dashboard/add-opportunity",
    icon: <AddIcon className="text-primary-color" />,
    activeIcon: <AddIcon className="text-white" />,
  },
  {
    name: "Paiements",
    path: "/company-dashboard/payment",
    icon: <AccountBalanceWalletIcon className="text-primary-color" />,
    activeIcon: <AccountBalanceWalletIcon className="text-white" />,
  },
  {
    name: "Transactions",
    path: "/company-dashboard/transactions",
    icon: <ReceiptIcon className="text-primary-color" />,
    activeIcon: <ReceiptIcon className="text-white" />,
  },
  {
    name: "Categories",
    path: "/company-dashboard/category",
    icon: <CategoryIcon className="text-primary-color" />,
    activeIcon: <CategoryIcon className="text-white" />,
  },
  {
    name: "Notifications",
    path: "/company-dashboard/notifications",
    icon: <NotificationsNoneOutlined className="text-primary-color" />,
    activeIcon: <NotificationsNoneOutlined className="text-white" />,
  },
  {
    name: "PreventionNotifications",
    path: "/company-dashboard/PreventionNotifications",
    icon: <NotificationsNoneOutlined className="text-primary-color" />,
    activeIcon: <NotificationsNoneOutlined className="text-white" />,
  },

];

const menu2 = [
  
  {
    name: "Compte",
    path: "/company-dashboard/account",
    icon: <AccountBox className="text-primary-color" />,
    activeIcon: <AccountBox className="text-white" />,
  },
  {
    name: "Déconnexion",
    path: "/",
    icon: <LogoutIcon className="text-primary-color" />,
    activeIcon: <LogoutIcon className="text-white" />,
  },
];

const CompanyDrawerList = ({toggleDrawer}) => {
  const { auth } = useSelector(store => store);
  const userRole = auth.user?.role;

  const filteredMenu = menu.filter(item => {
    if (item.name === "PreventionDashboard" || item.name === "Préventions" || item.name === "PreventionNotifications") {
      return userRole === "NN_ADMIN";
    }
    return true;
  });

  return <DrawerList menu={filteredMenu} menu2={menu2} toggleDrawer={toggleDrawer} />;
}

export default CompanyDrawerList