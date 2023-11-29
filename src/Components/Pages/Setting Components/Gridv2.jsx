import * as React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccessibleIcon from "@mui/icons-material/Accessible";
import TranslateIcon from "@mui/icons-material/Translate";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";

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
  { label: "Account", link: "/general", icon: <MailIcon style={iconStyles} /> },
  { label: "Notifications", link: "/notifications", icon: <NotificationsIcon style={iconStyles} /> },
  { label: "Language", link: "/language", icon: <TranslateIcon style={iconStyles} /> },
  { label: "Help", link: "/contact", icon: <HelpIcon style={iconStyles} /> },
  { label: "About", link: "/contact", icon: <InfoIcon style={iconStyles} /> },
  { label: "Log Out", link: "/log-out", icon: <LogoutIcon style={iconStyles} /> },
];

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
            <Link to={item.link} style={linkStyles}> {/* Apply the linkStyles */}
              <Paper elevation={8}>
                <Item>
                  <IconWrapper>{item.icon}</IconWrapper>
                  <TextWithShadow variant="h4">{item.label}</TextWithShadow>
                </Item>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}