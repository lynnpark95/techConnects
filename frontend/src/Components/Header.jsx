import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

function Header() {
  const headerStyles = {
    backgroundColor: "#F5F5F5",
    position: "fixed",
    top: 0,
    width: "85.6%",
    zIndex: 1000,
  };

  const buttonStyles = {
    backgroundColor: "#007bff",
    color: "white",
  };

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleMyAccountClick = () => {
    // Navigate to the "/profile" route when the button is clicked
    navigate("/profile");
  };

  return (
    <AppBar style={headerStyles}>
      <Toolbar>
        <Typography variant="h6">P</Typography>
        <div style={{ flexGrow: 1 }}></div>
        <div>
          <Button style={buttonStyles} onClick={handleMyAccountClick}>
            <PersonIcon sx={{ marginRight: "5px" }} />
            My Account
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;