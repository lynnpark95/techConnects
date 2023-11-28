import * as React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import { getAuth, signOut, updateProfile } from "firebase/auth";

import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";

const customBackgroundColor = "#75A9DE";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "#1A2027" : customBackgroundColor,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#ffffff",
  minHeight: 150,
  minWidth: 300,
  position: "relative",
  overflow: "hidden",
}));

const IconWrapper = styled("div")({
  color: "#ffffff",
  marginBottom: "8px",
  marginTop: "25px",
  textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
});

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

// Call the handleLogout function - John Crudo
const handleLogoutClick = () => {
  handleLogout(); 
};
const TextWithShadow = styled(Typography)({
  textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
});

const iconStyles = {
  fontSize: "2.5rem",
};

const linkStyles = {
  textDecoration: "none", // Remove the underline from links
};

const boxData = [
  { label: "Account", link: "/profile", icon: <MailIcon style={iconStyles} /> },
  { label: "Help", link: "/contact", icon: <HelpIcon style={iconStyles} /> },
  { label: "About", link: "https://lamainnovationz.com", icon: <InfoIcon style={iconStyles} /> },
  { label: "Log Out", onClick: {handleLogout}, link: "/logout", icon: <LogoutIcon style={iconStyles}  /> },
];

// Able to make a new page to the lama's website - John 
// Also fix the log-out - John
export default function Gridv2() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40,
      }}
    >
      <Grid container spacing={4} sx={{ width: "100%", maxWidth: "1000px" }}>
        {boxData.map((item, index) => (
          <Grid item xs={6} key={item.label}>
            {item.link && item.link.startsWith("http") ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" style={linkStyles}> 
                <Paper elevation={8}>
                  <Item>
                    <IconWrapper>{item.icon}</IconWrapper>
                    <TextWithShadow variant="h4">{item.label}</TextWithShadow>
                  </Item>
                </Paper>
              </a>
            ) : (
              <Link to={item.link} style={linkStyles} onClick={item.label === "Log Out" ? handleLogoutClick : null}>
                <Paper elevation={8}>
                  <Item>
                    <IconWrapper>{item.icon}</IconWrapper>
                    <TextWithShadow variant="h4">{item.label}</TextWithShadow>
                  </Item>
                </Paper>
              </Link>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}