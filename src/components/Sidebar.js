import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import CategoryIcon from "@mui/icons-material/Category";
import GroupIcon from "@mui/icons-material/Group";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ContactsIcon from "@mui/icons-material/Contacts";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import avatar from "../image/avatar.png";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import "./sidebar.css";
import { Typography } from "@mui/material";

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div style={{ paddingLeft: "10px" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          position: "relative",
        }}
      >
        <Link to="/home">
          <HomeIcon
            style={{
              color: "#619EE9",
              fontSize: "38px",
              position: "absolute",
              top: "30px",
              left: "25px",
            }}
          />
        </Link>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            display: "flex",
            width: "70%",
            padding: "14px 25px",
            borderRadius: "10px",
            background: "#EDEFF1",
            cursor: "pointer",
            margin: "100px 0px 20px 0px",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={avatar}
            style={{ marginRight: "30px" }}
          />
          <Typography>Jaydon Frankie</Typography>
        </Box>
      </Box>
      <List component="nav" aria-labelledby="nested-list-subheader">
        <Link to="/home">
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </Link>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LocalMallIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 5 }}>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItemButton>
            <Link to="/products">
              <ListItemButton sx={{ pl: 5 }}>
                <ListItemIcon>
                  <ShoppingBasketIcon />
                </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
        <Link to="/order">
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
        </Link>
        <Link to="/users">
          <ListItemButton>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </Link>
        <ListItemButton>
          <ListItemIcon>
            <ContactsIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Form" />
        </ListItemButton>
        <Link to="/login">
          <ListItemButton>
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItemButton>
        </Link>

        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <Link to="/login">
          <ListItemButton>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </Link>
      </List>
    </div>
  );
};

export default Sidebar;
