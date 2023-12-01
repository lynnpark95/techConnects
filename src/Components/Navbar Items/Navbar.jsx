import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InputBase from "@mui/material/InputBase"; // Import InputBase
import { mainNavbarItems } from "./NavbarListItems";
import { navStyles } from "./navStyles";
import { useParams, useNavigate } from "react-router-dom";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import UserPanel from "../Pages/ChatPage/SidePanel/UserPanel";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box"; // Import the Box component
import { getAuth, signOut, updateProfile } from "firebase/auth";


const drawerWidth = 220;

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    handleLogout()
  };
  
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <Drawer sx={navStyles.drawer} variant="permanent" anchor="left">
      <Box
      bgcolor="red"
      borderRadius="4px"
      marginTop="20px"
      marginLeft="10px"
      marginBottom="10px"
      display="inline-block"
      width={'120px'}
      onClick={handleClick}
      style={{ cursor: 'pointer' }} 
    >
      <IconButton style={{ padding: "8px" }}>
        <LogoutIcon style={{ color: "white" }} />
      </IconButton>
      <span style={{ color: "white", marginLeft: "5px" }}>LOGOUT</span>
    </Box>

      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "110px" }}
      >
        <img
          src="../../logo.png"
          alt="logo"
          style={{ width: "100px", height: "100px" }}
        />
      </div>

      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "90px" }}
      >
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <PersonOutlineOutlinedIcon
            sx={{ fontSize: 36 }}
            style={{ color: "white" }}
          />
        </Link>

        <Link to="/settings" style={{ textDecoration: "none" }}>
          <SettingsOutlinedIcon
            sx={{ paddingLeft: "20px", fontSize: 50 }}
            style={{ color: "white" }}
          />
        </Link>

        <Link to="/notifications" style={{ textDecoration: "none" }}>
          <NotificationsOutlinedIcon
            sx={{ paddingLeft: "20px", fontSize: 50 }}
            style={{ color: "white" }}
          />
        </Link>
      </div>
      <Divider />
      {/* Search bar */}

      <List
        sx={{
          marginTop: 0,
        }}
      >
        {/* Your existing list items */}
        {mainNavbarItems.map((item, index) => (
          <ListItem key={item.id}>
            <ListItemButton onClick={() => navigate(item.route)}>
              <ListItemIcon sx={navStyles.icons}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} sx={navStyles.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Navbar;
