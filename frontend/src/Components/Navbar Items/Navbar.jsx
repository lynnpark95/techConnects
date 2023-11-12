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

const drawerWidth = 240;

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Drawer sx={navStyles.drawer} variant="permanent" anchor="left">
      <UserPanel />
      
      <div style={{ display: "center" }}>
        <img src="lama.jpg" alt="logo" />
      </div>

      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "90px" }}
      >
        <Link to="/general" style={{ textDecoration: "none" }}>
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
      <div>
        <InputBase
          placeholder="Search here.."
          sx={{
            ml: 0,
            flex: 1,
            width: "300px",
            backgroundColor: "white",
            padding: "4px",
            marginTop: 2,
            marginLeft: 1,
            borderRadius: "13px",
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
