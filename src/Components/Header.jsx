import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";

function Header() {
  const headerStyles = {
    backgroundColor: "#87CEEB", // Background color
    // Padding to make it thinner
    position: "fixed", // Position fixed to place it at the top
    top: 0, // Position at the top of the screen
    width: "100%", // Full width
    zIndex: 1000, // Optional: Adjust the z-index as needed
  };

  const buttonStyles = {
    backgroundColor: "#007bff", // Button background color
    color: "white", // Button font color
  };

  return (
    <AppBar style={headerStyles}>
      <Toolbar>
        <Typography variant="h6">Page Title</Typography>
        <div style={{ flexGrow: 1 }}></div>
        <div>
          <Button style={buttonStyles}>
            <PersonIcon sx={{marginRight: "5px"}} />
            My Account
          </Button>
        </div>
      </Toolbar>
    </AppBar> 
  );
}

export default Header;
