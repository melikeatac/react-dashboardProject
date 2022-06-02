import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import avatar from "../image/avatar.png";
import ukflag from "../image/ukflag.ico";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        minHeight: "80px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          padding: "0px",
          margin: "0px",
        }}
      >
        <SearchIcon style={{ cursor: "pointer" }} />
        <Box style={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              paddingRight: "10px",
            }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                style={{ position: "relative" }}
              >
                <img
                  style={{ width: "30px", height: "40px" }}
                  src={ukflag}
                ></img>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                padding: "0px 20px 0px 10px",
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 20,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Typography>English</Typography>
              <img style={{ width: "30px", height: "35px" }} src={ukflag}></img>
            </MenuItem>
            <MenuItem>
              <Typography>German</Typography>
              <img style={{ width: "30px", height: "35px" }} src={ukflag}></img>
            </MenuItem>
            <MenuItem>
              <Typography>French</Typography>
              <img style={{ width: "30px", height: "35px" }} src={ukflag}></img>
            </MenuItem>
          </Menu>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              paddingRight: "10px",
            }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                style={{ position: "relative" }}
              >
                <NotificationsIcon style={{ fontSize: "30px" }} />
                <span
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "20px",
                    background: "red",
                    borderRadius: "50%",
                    color: "#ffffff",
                    fontSize: "12px",
                    padding: "2px 5px",
                    textAlign: "center",
                  }}
                >
                  2
                </span>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                padding: "0px 20px 0px 10px",
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 20,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography>Jaydon Frankie</Typography>
              <Typography>demo@minimals.cc</Typography>
            </MenuItem>
            <Divider style={{ border: "0.5px dashed lightGray" }} />

            <MenuItem>
              <Link to="/home">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/profile">Profile</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/settings">Settings</Link>
            </MenuItem>
            <Divider style={{ border: "0.5px dashed lightGray" }} />
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              paddingRight: "10px",
            }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }} src={avatar}></Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                padding: "0px 20px 0px 10px",
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 20,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography>Jaydon Frankie</Typography>
              <Typography>demo@minimals.cc</Typography>
            </MenuItem>
            <Divider style={{ border: "0.5px dashed lightGray" }} />

            <MenuItem>
              <Link to="/home">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/profile">Profile</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/settings">Settings</Link>
            </MenuItem>
            <Divider style={{ border: "0.5px dashed lightGray" }} />
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
