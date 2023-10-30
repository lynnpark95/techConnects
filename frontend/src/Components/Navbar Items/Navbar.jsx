import * as React from "react";

import Drawer from "@mui/material/Drawer";

import Toolbar from "@mui/material/Toolbar";
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
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Drawer sx={navStyles.drawer} variant="permanent" anchor="left">
      <Toolbar />
      <div style={{ display: "center" }}>
        <img src="lama.jpg" alt="logo" />
      </div>
      <div style={{ display: "flex", marginLeft: "100px" }}>
        <PersonIcon />
        <Link to="/settings" style={{ textDecoration: "none" }}>
          <SettingsIcon
            sx={{ paddingLeft: "20px", color: "rgba(255, 255, 255, 0.7)" }}
          />
        </Link>
        <NotificationsIcon sx={{ paddingLeft: "20px" }} />
      </div>
      <Divider />
      {/* Search bar */}
      <div>
        <InputBase
          placeholder="Search here.."
          sx={{
            ml: 0,
            flex: 1,
            width: "400px",
            backgroundColor: "white",
            padding: "4px",
            marginTop: 5,
          }}
          // You can add onChange and other props for search functionality
        />
      </div>
      <List
        sx={{
          marginTop: 5,
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
