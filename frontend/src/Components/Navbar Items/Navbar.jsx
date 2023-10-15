import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search"; // Import SearchIcon
import InputBase from "@mui/material/InputBase"; // Import InputBase
import { mainNavbarItems } from "./NavbarListItems"
import { navStyles } from "./navStyles";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams, useNavigate } from "react-router-dom";



const drawerWidth = 240;

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      sx={navStyles.drawer}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <div style={{display: "center"}}>
        <img src="lama.jpg" alt="logo" />
      </div>
      <div style={{ display: "flex",  marginLeft: '100px' }}>
          <SearchIcon />
          <SearchIcon sx={{paddingLeft: '20px'}}/>
          <SearchIcon sx={{paddingLeft: '20px'}}/>
        </div>
      <Divider />
      {/* Search bar */}
      <div>
        <InputBase 
          placeholder= "Search here.."
          sx={{ ml: 0, flex: 1, width: '400px', backgroundColor: 'white', padding: '4px', marginTop: 5 }}
          // You can add onChange and other props for search functionality
        />
      </div>
      <List 
      sx={{
        marginTop: 5
      }}>
        {/* Your existing list items */}
        {mainNavbarItems.map((item, index) => (
          <ListItem key={item.id}>
            <ListItemButton onClick={() => navigate(item.route)}>
              <ListItemIcon sx={navStyles.icons}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} sx={navStyles.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      
    </Drawer>
  );
};

export default Navbar;
